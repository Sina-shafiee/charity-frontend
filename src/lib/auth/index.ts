import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { env } from "@/lib/env";
import { getCurrentLocale } from "@/locale/server";

export const authOptions = {
	providers: [
		CredentialsProvider({
			credentials: {
				email: { type: "email" },
				password: { type: "password" },
			},
			async authorize(credentials) {
				const lang = getCurrentLocale();
				const loginResponse = await fetch(
					`${env.NEXT_PUBLIC_API_URL}/auth/email/login`,
					{
						body: JSON.stringify({
							email: credentials?.email ?? "",
							password: credentials?.password ?? "",
						}),
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							"x-application-lang": lang,
						},
						credentials: "include",
					},
				);

				const user = await loginResponse.json();

				if (!loginResponse.ok && loginResponse.status > 499) {
					return null;
				}

				if (!loginResponse.ok && loginResponse.status < 499) {
					throw new Error(JSON.stringify(user.errors));
				}

				return user;
			},
		}),
	],
	callbacks: {
		jwt({ token, user }) {
			if (user) {
				return {
					...token,
					user: {
						...user,
					},
				};
			}

			return token;
		},
		session({ session, token }) {
			if (token && session.user) {
				session.user = token.user;
			}

			return session;
		},
	},
	session: {
		strategy: "jwt",
	},
	pages: {
		signIn: "/auth/login",
	},
	secret: env.NEXTAUTH_SECRET,
} satisfies AuthOptions;

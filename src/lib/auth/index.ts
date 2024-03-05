import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { env } from "@/lib/env";

export const authOptions = {
	providers: [
		CredentialsProvider({
			credentials: {
				email: { type: "email" },
				password: { type: "password" },
			},
			async authorize(credentials) {
				const loginResponse = await fetch(
					`${env.NEXT_PUBLIC_API_URL}/auth/email/login`,
					{
						body: JSON.stringify({
							...credentials,
						}),
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
					},
				);

				if (!loginResponse.ok) {
					return null;
				}

				const user = await loginResponse.json();
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

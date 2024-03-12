import type { SessionOptions } from "iron-session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

import type { Roles } from "@/types/enums";

import { env } from "../env";

export const ADMIN_ROUTES_REGEX = /^\/admin(?:\/\w+)*$/;
export const USER_ROUTES_REGEX = /^\/user(?:\/\w+)*$/;
export const AUTH_ROUTES_REGEX = /^\/auth(?:\/\w+)*$/;

interface User {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	role: {
		id: Roles;
		name: string;
	};
}
export interface SessionData {
	user: User | undefined;
	token: string | undefined;
	tokenExpires: number | undefined;
}

export const sessionOptions: SessionOptions = {
	cookieName: env.SESSION_COOKIE_NAME,
	password: env.SESSION_SECRET,
	ttl: Number.parseInt(env.SESSION_TTL, 10),
	cookieOptions: {
		httpOnly: true,
		secure: env.NODE_ENV === "production",
		sameSite: "lax",
		path: "/",
	},
};

/**
 * access session on server components, server actions, api routes and middleware
 * @returns SessionData
 */
export async function getSession() {
	const session = await getIronSession<SessionData>(cookies(), sessionOptions);
	return session;
}

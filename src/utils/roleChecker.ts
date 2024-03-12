import "server-only";

import type { SessionData } from "@/lib/auth";
import {
	ADMIN_ROUTES_REGEX,
	AUTH_ROUTES_REGEX,
	USER_ROUTES_REGEX,
} from "@/lib/auth";
import { Roles } from "@/types/enums";

export const isAdminRoute = (pathname: string) =>
	ADMIN_ROUTES_REGEX.test(pathname);
export const isUserRoute = (pathname: string) =>
	USER_ROUTES_REGEX.test(pathname);
export const isAuthRoute = (pathname: string) =>
	AUTH_ROUTES_REGEX.test(pathname);

export const isUserAdmin = (session: SessionData) =>
	session?.user?.role?.id === Roles.ADMIN;
export const isRegularUser = (session: SessionData) =>
	session?.user?.role?.id === Roles.USER;
export const isLoggedIn = (session: SessionData) => !!session?.user;

export const dashboardPathnameBasedOnRole = (
	session: SessionData | undefined,
) => {
	if (!session?.user) return "/auth/login";
	if (session.user?.role?.id === Roles.ADMIN) return "/admin";
	if (session.user?.role?.id === Roles.USER) return "/user";
};

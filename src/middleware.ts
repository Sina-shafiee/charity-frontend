import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createI18nMiddleware } from "next-international/middleware";

import type { SessionData } from "./lib/auth";
import { getSession } from "./lib/auth";
import { env } from "./lib/env";
import { locales } from "./locale/helper";
import {
	dashboardPathnameBasedOnRole,
	isAdminRoute,
	isAuthRoute,
	isLoggedIn,
	isRegularUser,
	isUserAdmin,
	isUserRoute,
} from "./utils/roleChecker";

const redirectUser = (session: SessionData) =>
	NextResponse.redirect(
		env.APP_URL + dashboardPathnameBasedOnRole(session),
		302,
	);

const i18nMiddleware = createI18nMiddleware({
	locales,
	defaultLocale: locales[0],
});

export default async function middleware(request: NextRequest) {
	const { nextUrl } = request;

	const session = await getSession();

	const localeRegex = /^\/(en|fa)\b/;
	const pathnameWithoutLocale = nextUrl.pathname.replace(localeRegex, "");

	if (isAuthRoute(pathnameWithoutLocale) && isLoggedIn(session)) {
		return redirectUser(session);
	}

	if (isAdminRoute(pathnameWithoutLocale) && !isUserAdmin(session)) {
		return redirectUser(session);
	}

	if (isUserRoute(pathnameWithoutLocale) && !isRegularUser(session)) {
		return redirectUser(session);
	}

	return i18nMiddleware(request);
}

export const config = {
	matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};

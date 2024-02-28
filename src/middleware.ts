import type { NextRequest } from "next/server";
import { createI18nMiddleware } from "next-international/middleware";

import { locales } from "./locale/helper";

const I18nMiddleware = createI18nMiddleware({
	locales,
	defaultLocale: "fa",
});

export function middleware(request: NextRequest) {
	return I18nMiddleware(request);
}

export const config = {
	matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};

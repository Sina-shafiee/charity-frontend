import type { NextRequest } from "next/server";
import createMiddleware from "next-intl/middleware";

import { locales } from "@/locales";

const i18nMiddleware = createMiddleware({
	locales,
	defaultLocale: "en",
});

export const middleware = (req: NextRequest) => {
	return i18nMiddleware(req);
};

export const config = {
	matcher: ["/((?!api|favicon|day|_next|.*\\..*).*)"],
};

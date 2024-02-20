import type { Locales } from "@/locales";

export type Direction = "ltr" | "rtl";

const directions: Record<string, Direction> = {
	fa: "rtl",
};

export const getDirection = (locale: Locales) => {
	return directions[locale] ?? "ltr";
};

export const isRtl = (locale: Locales) => {
	return getDirection(locale) === "rtl";
};

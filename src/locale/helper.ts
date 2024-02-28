export type Direction = "ltr" | "rtl";

// here define only languages which are rtl
export const directions: Record<string, Direction> = {
	fa: "rtl",
};

export const locales = ["fa", "en"] as const;
export type Locale = (typeof locales)[number];

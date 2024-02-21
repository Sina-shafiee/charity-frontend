/**
 * TODO regularly check provided issue
 * this hook and isRtl helper right now throws:
 * "unable to find next-auth locale,..." on server console
 * check here for more info:
 * https://github.com/amannn/next-intl/discussions/446#discussioncomment-7026468
 * there is no fix right now
 */

import { useLocale } from "next-intl";

export type Direction = "ltr" | "rtl";

const directions: Record<string, Direction> = {
	fa: "rtl",
};

export const useDirection = (): Direction => {
	const locale = useLocale();
	return directions[locale] ?? "ltr";
};

export const useIsRTL = () => {
	const direction = useDirection();
	return direction === "rtl";
};

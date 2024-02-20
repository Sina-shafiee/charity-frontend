import "@/styles/globals.css";

import { Montserrat, Playfair_Display, Vazirmatn } from "next/font/google";
import type { FC, ReactNode } from "react";

import type { Direction } from "@/lib/i18n";
import { getDirection } from "@/lib/i18n";
import type { Locales } from "@/locales";

const montserratFont = Montserrat({
	subsets: ["latin"],
	weight: ["400", "500"],
	variable: "--font-body",
});

const playFair = Playfair_Display({
	subsets: ["latin"],
	weight: ["600", "700", "900"],
	variable: "--font-heading",
});

const vazirMatn = Vazirmatn({
	subsets: ["arabic"],
	weight: ["400", "500"],
	variable: "--font-body",
});

interface Props {
	children: ReactNode;
	params: { locale: Locales };
}

interface VariableFont {
	variable: string;
}
interface Fonts {
	body: VariableFont;
	heading: VariableFont;
}

const fonts: Record<Direction, Fonts> = {
	rtl: { body: vazirMatn, heading: playFair },
	ltr: { body: montserratFont, heading: playFair },
};

const MainLayout: FC<Props> = ({ children, params: { locale } }) => {
	const direction = getDirection(locale);
	const font = fonts[direction];
	return (
		<html
			lang={locale}
			className={`${font.body.variable} ${font.heading.variable}`}
			dir={direction}
		>
			<body className="font-body">{children}</body>
		</html>
	);
};
export default MainLayout;

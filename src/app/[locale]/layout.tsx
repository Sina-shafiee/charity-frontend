import {
	Alexandria,
	Montserrat,
	Playfair_Display,
	Vazirmatn,
} from "next/font/google";
import type { FC, ReactNode } from "react";

import type { Direction } from "@/hooks";
import { useDirection } from "@/hooks";
import type { Locales } from "@/locales";

import Providers from "../providers";

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

const alexandria = Alexandria({
	subsets: ["arabic"],
	weight: ["600", "700"],
	variable: "--font-heading",
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
	rtl: { body: vazirMatn, heading: alexandria },
	ltr: { body: montserratFont, heading: playFair },
};

const MainLayout: FC<Props> = ({ children, params: { locale } }) => {
	const direction = useDirection();
	const font = fonts[direction];

	return (
		<html
			lang={locale}
			className={`${font.body.variable} ${font.heading.variable}`}
			dir={direction}
		>
			<body className="font-body">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
};
export default MainLayout;

import {
	Alexandria,
	Montserrat,
	Playfair_Display,
	Vazirmatn,
} from "next/font/google";
import type { FC, ReactNode } from "react";

import type { Direction } from "@/locale/helper";
import { directions } from "@/locale/helper";

import Providers from "../providers";

const montserratFont = Montserrat({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-body",
	display: "swap",
});

const playFair = Playfair_Display({
	subsets: ["latin"],
	weight: ["600", "700", "900"],
	variable: "--font-heading",
	display: "swap",
});

const vazirMatn = Vazirmatn({
	subsets: ["arabic"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-body",
	display: "swap",
});

const alexandria = Alexandria({
	subsets: ["arabic"],
	weight: ["600", "700"],
	variable: "--font-heading",
	display: "swap",
});

interface Props {
	children: ReactNode;
	params: { locale: string };
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
	const dir = directions[locale] ?? "ltr";
	const font = fonts[dir];

	return (
		<html
			lang={locale}
			className={`${font.body.variable} ${font.heading.variable}`}
			dir={dir}
		>
			<body className="font-body">
				<Providers dir={dir}>{children}</Providers>
			</body>
		</html>
	);
};
export default MainLayout;

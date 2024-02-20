import "@/styles/globals.css";

import { Montserrat } from "next/font/google";
import type { FC, ReactNode } from "react";

import { getDirection } from "@/lib/i18n";
import type { Locales } from "@/locales";

const montserratFont = Montserrat({
	subsets: ["latin"],
	weight: ["500"],
});

interface Props {
	children: ReactNode;
	params: { locale: Locales };
}

const RootLayout: FC<Props> = ({ children, params: { locale } }) => {
	return (
		<html
			lang={locale}
			className={montserratFont.className}
			dir={getDirection(locale)}
		>
			<body>{children}</body>
		</html>
	);
};
export default RootLayout;

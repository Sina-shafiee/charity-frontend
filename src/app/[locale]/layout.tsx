import "@/styles/globals.css";

import { Montserrat } from "next/font/google";
import type { FC, ReactNode } from "react";

import { useDirection } from "@/hooks/useDirection";
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
	const direction = useDirection();
	return (
		<html lang={locale} className={montserratFont.className} dir={direction}>
			<body>{children}</body>
		</html>
	);
};
export default RootLayout;

import "@/styles/globals.css";

import type { FC, ReactNode } from "react";

import { useDirection } from "@/hooks/useDirection";
import type { Locales } from "@/locales";

interface Props {
	children: ReactNode;
	params: { locale: Locales };
}

const RootLayout: FC<Props> = ({ children, params: { locale } }) => {
	const direction = useDirection();
	return (
		<html lang={locale} dir={direction}>
			<body>{children}</body>
		</html>
	);
};
export default RootLayout;

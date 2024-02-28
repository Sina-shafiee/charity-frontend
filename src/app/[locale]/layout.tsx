import type { Metadata } from "next";
import { Alexandria, Barlow, Montserrat, Vazirmatn } from "next/font/google";
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

const barlow = Barlow({
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
	ltr: { body: montserratFont, heading: barlow },
};

const APP_NAME = "Give Live";
const APP_DEFAULT_TITLE = "Give Live";
const APP_TITLE_TEMPLATE = "%s - Give Live";
const APP_DESCRIPTION =
	"Empowering communities, transforming lives. Give Live is your gateway to making a meaningful impact through collective generosity. Join us in creating positive change worldwide.";

export const metadata: Metadata = {
	applicationName: APP_NAME,
	metadataBase: new URL("https://chairty.sina-shafiee.ink"),
	alternates: {
		canonical: "/",
		languages: {
			"en-US": "/en",
			"fa-IR": "/fa",
		},
	},
	title: {
		default: APP_DEFAULT_TITLE,
		template: APP_TITLE_TEMPLATE,
	},
	icons: [
		{
			rel: "icon",
			url: "/icon/favicon-16x16.png",
			sizes: "16x16",
			type: "image/png",
		},
		{
			rel: "icon",
			url: "/icon/favicon-32x32.png",
			sizes: "32x32",
			type: "image/png",
		},
		{
			rel: "icon",
			url: "/icon/favicon.ico",
			sizes: "32x32",
			type: "image/x-icon",
		},
	],
	description: APP_DESCRIPTION,
	manifest: "/manifest.json",
	appleWebApp: {
		capable: true,
		statusBarStyle: "default",
		title: APP_DEFAULT_TITLE,
	},
	formatDetection: {
		telephone: false,
	},
	openGraph: {
		type: "website",
		siteName: APP_NAME,
		title: {
			default: APP_DEFAULT_TITLE,
			template: APP_TITLE_TEMPLATE,
		},
		description: APP_DESCRIPTION,
	},
	twitter: {
		card: "summary",
		title: {
			default: APP_DEFAULT_TITLE,
			template: APP_TITLE_TEMPLATE,
		},
		description: APP_DESCRIPTION,
	},
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

"use client";

import { DirectionProvider } from "@radix-ui/react-direction";
import { SessionProvider } from "next-auth/react";
import type { ReactNode } from "react";

import { Toaster } from "@/component/ui";
import { I18nProviderClient } from "@/locale/client";
import type { Direction, Locale } from "@/locale/helper";

interface Props {
	children: ReactNode;
	dir: Direction;
	locale: Locale;
}

const Providers = ({ children, dir, locale }: Props) => {
	return (
		<SessionProvider>
			<I18nProviderClient locale={locale}>
				<DirectionProvider dir={dir}>
					{children}
					<Toaster />
				</DirectionProvider>
			</I18nProviderClient>
		</SessionProvider>
	);
};

export default Providers;

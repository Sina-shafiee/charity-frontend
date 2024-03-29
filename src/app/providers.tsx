"use client";

import { DirectionProvider } from "@radix-ui/react-direction";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NextTopLoader from "nextjs-toploader";
import type { ReactNode } from "react";
import { useState } from "react";

import { Toaster } from "@/component/ui";
import { I18nProviderClient } from "@/locale/client";
import type { Direction, Locale } from "@/locale/helper";

interface Props {
	children: ReactNode;
	dir: Direction;
	locale: Locale;
}

const Providers = ({ children, dir, locale }: Props) => {
	const [queryClient] = useState(new QueryClient());
	return (
		<QueryClientProvider client={queryClient}>
			<I18nProviderClient locale={locale}>
				<DirectionProvider dir={dir}>
					<NextTopLoader
						color="#219c7f"
						initialPosition={0.08}
						crawlSpeed={200}
						crawl
						showSpinner={false}
						shadow="0 0 10px #2299DD,0 0 5px #2299DD"
						zIndex={1600}
					/>
					{children}
					<Toaster />
				</DirectionProvider>
			</I18nProviderClient>
		</QueryClientProvider>
	);
};

export default Providers;

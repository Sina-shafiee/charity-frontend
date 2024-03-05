"use client";

import { DirectionProvider } from "@radix-ui/react-direction";
import { SessionProvider } from "next-auth/react";
import type { ReactNode } from "react";

import type { Direction } from "@/locale/helper";

interface Props {
	children: ReactNode;
	dir: Direction;
}

const Providers = ({ children, dir }: Props) => {
	return (
		<SessionProvider>
			<DirectionProvider dir={dir}>{children}</DirectionProvider>;
		</SessionProvider>
	);
};

export default Providers;

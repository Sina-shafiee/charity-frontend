"use client";

import { DirectionProvider } from "@radix-ui/react-direction";
import type { ReactNode } from "react";

import type { Direction } from "./[locale]/layout";

interface Props {
	children: ReactNode;
	dir: Direction;
}

const Providers = ({ children, dir }: Props) => {
	return <DirectionProvider dir={dir}>{children}</DirectionProvider>;
};

export default Providers;

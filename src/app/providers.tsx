"use client";

import { DirectionProvider } from "@radix-ui/react-direction";
import type { ReactNode } from "react";

import { useDirection } from "@/hooks";

interface Props {
	children: ReactNode;
}

const Providers = ({ children }: Props) => {
	const direction = useDirection();
	return <DirectionProvider dir={direction}>{children}</DirectionProvider>;
};

export default Providers;

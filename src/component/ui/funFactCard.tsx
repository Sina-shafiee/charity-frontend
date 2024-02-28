import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/utils";

import { Card } from "./card";

interface Props extends HTMLAttributes<HTMLDivElement> {
	icon: ReactNode;
	count: string;
	title: string;
}

export const FunFactCard = ({
	count,
	icon,
	title,
	className,
	...props
}: Props) => {
	return (
		<Card
			className={cn(
				"text-center bg-muted py-14 flex flex-col items-center",
				className,
			)}
			{...props}
		>
			{icon}
			<h4 dir="ltr" className="mt-8 font-body text-5xl font-bold">
				{count}
			</h4>
			<p className="mt-4 text-[#555555]">{title}</p>
		</Card>
	);
};

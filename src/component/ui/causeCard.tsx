import Image from "next/image";
import type { HTMLAttributes } from "react";

import DummyPic from "@/assets/about-s-p2.jpg";
import { cn } from "@/utils";

import { Button } from "./button";
import { Card, CardContent, CardFooter } from "./card";

interface Props extends HTMLAttributes<HTMLDivElement> {
	title: string;
	content: string;
	category: string;
	donation: string;
	raised: string;
	goal: string;
	donate: string;
}

/**
 * TODO pass actual data using props
 */

export const CauseCard = ({
	className,
	category,
	content,
	donation,
	goal,
	raised,
	title,
	donate,
}: Props) => {
	return (
		<Card className={cn("w-full h-full", className)}>
			<Image
				className="h-48 w-full object-cover"
				alt="dummy image"
				src={DummyPic}
			/>
			<CardContent className="mt-6">
				<p className="text-sm font-medium text-primary">{category}</p>
				<h4 className="mt-4 line-clamp-2 font-heading text-xl">{title}</h4>
				<p className="mt-4 line-clamp-2 text-sm">{content}</p>
				<div className="mt-4 flex items-center justify-between text-sm">
					<p className="text-sm">{donation}</p>
					<p className="text-sm">60%</p>
				</div>
				<div className="relative mt-1 h-2 w-full bg-[#C7E7DF]">
					<div className="absolute inset-0 w-[60%] bg-primary" />
				</div>
				<div className="mt-2 flex items-center justify-between text-sm">
					<p className="text-sm">{raised}</p>
					<p className="text-sm">{goal}</p>
				</div>
			</CardContent>
			<CardFooter>
				<Button variant="outline" size="sm" className="max-w-max">
					{donate}
				</Button>
			</CardFooter>
		</Card>
	);
};

import { AvatarIcon, CalendarIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import type { HTMLAttributes } from "react";

import DummyPic from "@/assets/about-s-p2.jpg";
import { cn } from "@/utils";

import { Button } from "./button";
import { Card, CardContent, CardFooter } from "./card";

interface Props extends HTMLAttributes<HTMLDivElement> {
	author: string;
	readMore: string;
	text: string;
	title: string;
}

export const ArticleCard = ({
	author,
	readMore,
	text,
	title,
	className,
	...props
}: Props) => {
	return (
		<Card {...props} className={cn("w-full h-full", className)}>
			<Image
				className="h-72 w-full object-cover"
				alt="dummy image"
				src={DummyPic}
			/>
			<CardContent className="mt-6">
				<section className="flex items-center justify-between">
					<div className="flex items-center gap-2 text-[#999999]">
						<AvatarIcon className="size-5" />
						<p className="text-sm">{author}</p>
					</div>
					<div className="flex items-center gap-2 text-[#999999]">
						<CalendarIcon className="size-5" />
						<p className="text-sm">12 sep 2022</p>
					</div>
				</section>
				<h4 className="mt-4 font-heading text-xl">{title}</h4>
				<p className="mt-4 line-clamp-3 text-sm">{text}</p>
			</CardContent>
			<CardFooter>
				<Button variant="outline" className="max-w-max">
					{readMore}
				</Button>
			</CardFooter>
		</Card>
	);
};

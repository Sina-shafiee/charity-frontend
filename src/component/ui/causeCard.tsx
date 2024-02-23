import Image from "next/image";
import type { HTMLAttributes } from "react";

import DummyPic from "@/assets/about-s-p2.jpg";
import { cn } from "@/utils";

import { Button } from "./button";
import { Card, CardContent, CardFooter } from "./card";

interface Props extends HTMLAttributes<HTMLDivElement> {}

/**
 * TODO pass actual data using props
 */
export const CauseCard = ({ className }: Props) => {
	return (
		<Card className={cn("w-full h-full", className)}>
			<Image
				className="h-48 w-full object-cover"
				alt="dummy image"
				src={DummyPic}
			/>
			<CardContent className="mt-6">
				<p className="text-sm font-medium text-primary">Medical</p>
				<h4 className="mt-4 font-heading text-xl">
					Donate for poor kids treatment.
				</h4>
				<p className="mt-4 line-clamp-2 text-sm">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
					illum assumenda aliquam cum quo praesentium omnis harum, tenetur
					recusandae sequi distinctio, vitae aspernatur placeat, dolorem fugiat
					repellendus eligendi commodi incidunt.
				</p>
				<div className="mt-4 flex items-center justify-between text-sm">
					<p className="text-sm">Donations</p>
					<p className="text-sm">60%</p>
				</div>
				<div className="relative mt-1 h-2 w-full bg-[#C7E7DF]">
					<div className="absolute inset-0 w-[60%] bg-primary" />
				</div>
				<div className="mt-2 flex items-center justify-between text-sm">
					<p className="text-sm">Raised: $600</p>
					<p className="text-sm">Goal: $1,000</p>
				</div>
			</CardContent>
			<CardFooter>
				<Button variant="outline" size="sm" className="max-w-max">
					Donate Now!
				</Button>
			</CardFooter>
		</Card>
	);
};

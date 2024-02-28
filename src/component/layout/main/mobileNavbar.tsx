"use client";

import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect, useState } from "react";

import LineIcon from "@/component/icon/line.svg";
import {
	Button,
	Sheet,
	SheetContent,
	SheetFooter,
	SheetTrigger,
} from "@/component/ui";
import { MediaQueries, useMediaQuery } from "@/hooks/useMediaQuery";
import { useCurrentLocale } from "@/locale/client";
import { cn } from "@/utils";
import type { NavbarLink } from "@/utils/constant";

interface Props {
	links: NavbarLink[];
	loginButtonLabel: string;
}

export const MobileNavbar = ({ links, loginButtonLabel }: Props) => {
	const isRtl = useCurrentLocale() === "fa";
	const [isSheetOpen, setIsOpenSheet] = useState(false);
	const isDesktopScreen = useMediaQuery(MediaQueries.LG);

	useEffect(() => {
		if (isDesktopScreen) {
			setIsOpenSheet(false);
		}
	}, [isDesktopScreen]);

	return (
		<Sheet
			open={isSheetOpen}
			onOpenChange={(newValue) => setIsOpenSheet(newValue)}
		>
			<SheetTrigger asChild>
				<Button variant="link" className="text-white lg:hidden" size="sm">
					<HamburgerMenuIcon className="size-9" />
					<span className="sr-only">Hamburger Menu</span>
				</Button>
			</SheetTrigger>
			<SheetContent
				className="w-full sm:max-w-96"
				side={isRtl ? "right" : "left"}
			>
				<div className="flex w-full flex-col gap-y-6 px-4 py-8">
					{links.map(({ href, title }) => {
						return (
							<div key={title} className="flex flex-row items-center gap-2">
								<LineIcon className="w-9 sm:w-12" />
								<Link
									href={href}
									className={cn(
										"group font-heading text-2xl sm:text-3xl",
										isRtl ? "font-medium" : "font-medium",
									)}
									key={title}
								>
									<span
										className={cn(
											isRtl ? "bg-right-bottom" : "bg-left-bottom",
											"bg-gradient-to-l group-hover:bg-[length:100%_3px] bg-[length:0%_3px] bg-no-repeat transition-all duration-500 ease-out pb-2 from-blue-500 to-blue-500",
										)}
									>
										{title}
									</span>
								</Link>
							</div>
						);
					})}
				</div>
				<SheetFooter className="absolute bottom-0 left-0 w-full">
					<Button variant="outline" className="mx-4 my-2 w-full">
						{loginButtonLabel}
					</Button>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};

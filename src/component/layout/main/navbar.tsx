"use client";

import { useDirection } from "@radix-ui/react-direction";
import Link from "next/link";

import { cn } from "@/utils";
import type { NavbarLink } from "@/utils/constant";

interface Props {
	links: NavbarLink[];
}

export const Navbar = ({ links }: Props) => {
	const isRtl = useDirection() === "rtl";

	return (
		<nav className="hidden lg:inline-block">
			<ul className="mt-1 flex items-center gap-x-5">
				{links.map((link) => {
					return (
						<li
							key={link.href}
							className="group text-lg text-white transition-all duration-300 ease-in-out"
						>
							<Link href={link.href}>
								<span
									className={cn(
										isRtl ? "bg-right-bottom" : "bg-left-bottom",
										"bg-gradient-to-l group-hover:bg-[length:100%_3px] bg-[length:0%_3px] bg-no-repeat transition-all duration-500 ease-out pb-2 from-blue-500 to-blue-500",
									)}
								>
									{link.title}
								</span>
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

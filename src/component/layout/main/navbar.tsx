"use client";

import Link from "next/link";

import type { NavbarLink } from "@/utils/constant";

interface Props {
	links: NavbarLink[];
}

export const Navbar = ({ links }: Props) => {
	return (
		<nav>
			<ul className="mt-1 flex items-center gap-x-4">
				{links.map((link) => {
					return (
						<li key={link.href} className="text-base font-medium">
							<Link href={link.href}>{link.title}</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

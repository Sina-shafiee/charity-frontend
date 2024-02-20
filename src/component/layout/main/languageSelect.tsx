"use client";

import { Link, usePathname } from "@/navigation";

export const LanguageSelect = () => {
	const pathname = usePathname();
	return (
		<div className="flex gap-2">
			<Link href={pathname} locale="en">
				en
			</Link>
			<Link href={pathname} locale="fa">
				fa
			</Link>
		</div>
	);
};

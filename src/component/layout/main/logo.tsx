import Link from "next/link";

import LogoIcon from "@/component/icon/logo.svg";

export const Logo = () => {
	return (
		<div className="flex items-center gap-2">
			<Link href="/">
				<LogoIcon className="h-[33px] w-[133px]" />
			</Link>
		</div>
	);
};

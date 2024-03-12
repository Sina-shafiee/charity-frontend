import Link from "next/link";

import LogoIcon from "@/component/icon/logo.svg";
import { getCurrentLocale } from "@/locale/server";

export const Logo = () => {
	const locale = getCurrentLocale();
	return (
		<div className="flex items-center gap-2">
			<Link href={`/${locale}`}>
				<LogoIcon className="h-[33px] w-[133px]" />
			</Link>
		</div>
	);
};

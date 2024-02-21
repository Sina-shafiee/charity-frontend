"use client";
import { useLocale } from "next-intl";

import EnIcon from "@/component/icon/en.svg";
import FaIcon from "@/component/icon/fa.svg";
import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/component/ui";
import { Link, usePathname } from "@/navigation";
import type { TranslatedLanguage } from "@/utils/constant";

interface Props {
	languages: TranslatedLanguage[];
}

const Icons = {
	en: <EnIcon className="size-7" />,
	fa: <FaIcon className="size-7" />,
};

export const LanguageSelect = ({ languages }: Props) => {
	const pathname = usePathname();
	const locale = useLocale();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					size="sm"
					variant="link"
					className="m-0 h-8 p-0 transition-all duration-300 will-change-transform hover:scale-105"
				>
					{locale === "fa" ? (
						<FaIcon className="size-9" />
					) : (
						<EnIcon className="size-9" />
					)}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{languages.map(({ lang, title }) => (
					<DropdownMenuLabel key={title}>
						<Link
							locale={lang}
							href={pathname}
							className="flex items-center gap-2 "
						>
							{Icons[lang as keyof typeof Icons]}
							<p className="leading-7">{title}</p>
						</Link>
					</DropdownMenuLabel>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

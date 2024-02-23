"use client";

import EnIcon from "@/component/icon/en.svg";
import FaIcon from "@/component/icon/fa.svg";
import {
	Button,
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/component/ui";
import { useChangeLocale, useCurrentLocale } from "@/locale/client";
import type { Locale } from "@/locale/helper";
import type { TranslatedLanguage } from "@/utils/constant";

interface Props {
	languages: TranslatedLanguage[];
}

export const LanguageSelect: React.FC<Props> = ({ languages }) => {
	const locale = useCurrentLocale();
	const changeLocale = useChangeLocale();

	const handleLanguageChange = (lang: Locale) => {
		changeLocale(lang);
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					size="sm"
					variant="link"
					className="m-0 text-white transition-all duration-300 will-change-transform hover:scale-105"
				>
					{locale === "fa" ? (
						<FaIcon className="size-10" />
					) : (
						<EnIcon className="size-10" />
					)}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{languages.map(({ lang, title }) => {
					return (
						<DropdownMenuLabel key={title} asChild>
							<Button
								size="sm"
								variant="ghost"
								onClick={() => handleLanguageChange(lang as Locale)}
								className="flex w-full items-center justify-start gap-2"
							>
								{lang === "fa" ? (
									<FaIcon className="size-7" />
								) : (
									<EnIcon className="size-7" />
								)}
								<p className="leading-7">{title}</p>
							</Button>
						</DropdownMenuLabel>
					);
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

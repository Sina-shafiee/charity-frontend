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

const Icons = {
	en: <EnIcon className="size-8 will-change-transform" />,
	fa: <FaIcon className="size-8 will-change-transform" />,
};

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
					className="m-0 h-8 p-0 text-white transition-all duration-300 will-change-transform hover:scale-105"
				>
					{Icons[locale]}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				{languages.map(({ lang, title }) => (
					<DropdownMenuLabel key={title} asChild>
						<Button
							size="sm"
							variant="ghost"
							onClick={() => handleLanguageChange(lang as Locale)}
							className="flex w-full items-center justify-start gap-2"
						>
							{Icons[lang as keyof typeof Icons]}
							<p className="leading-7">{title}</p>
						</Button>
					</DropdownMenuLabel>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

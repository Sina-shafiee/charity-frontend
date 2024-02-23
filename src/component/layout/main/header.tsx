import { useTranslations } from "next-intl";

import Logo from "@/component/icon/logo.svg";
import { languages, navbarLinks } from "@/utils/constant";

import { LanguageSelect } from "./languageSelect";
import { Navbar } from "./navbar";

export const Header = () => {
	const t = useTranslations("Navbar");
	/**
	 * i dont want to use "useTranslations" hook in
	 * client components and since functions are not serilaized
	 * i translate links on server and send the array
	 * of translated link to clinet component
	 */
	const translatedLinks = navbarLinks.map((link) => ({
		title: t(link.i18nKey as any),
		href: link.href,
	}));
	const translatedLanguages = languages.map(({ lang, i18nKey }) => {
		return {
			lang,
			title: t(`Language.${i18nKey}` as any),
		};
	});
	return (
		<header className="container relative mx-auto">
			<div className="p-container absolute left-0 top-0 z-30 mx-auto mt-[35px] flex h-12 w-full items-center justify-between text-white">
				<Logo className="h-[33px] w-[133px]" />
				<Navbar links={translatedLinks} />
				<LanguageSelect languages={translatedLanguages} />
			</div>
		</header>
	);
};

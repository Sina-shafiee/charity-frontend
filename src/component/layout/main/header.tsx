import Link from "next/link";

import Logo from "@/component/icon/logo.svg";
import { Button } from "@/component/ui";
import { getScopedI18n } from "@/locale/server";
import { languages, navbarLinks } from "@/utils/constant";

import { LanguageSelect } from "./languageSelect";
import { Navbar } from "./navbar";

export const Header = async () => {
	const t = await getScopedI18n("Navbar");
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
				<Link href="/">
					<Logo className="h-[33px] w-[133px]" />
				</Link>
				<Navbar links={translatedLinks} />
				<div className="flex items-center gap-2">
					<Button size="sm" className="text-base">
						{t("login")}
					</Button>

					<LanguageSelect languages={translatedLanguages} />
				</div>
			</div>
		</header>
	);
};

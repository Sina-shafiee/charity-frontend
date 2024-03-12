import { getCurrentLocale, getScopedI18n } from "@/locale/server";
import { languages, navbarLinks } from "@/utils/constant";

import { LanguageSelect } from "./languageSelect";
import { LoginButton } from "./loginButton";
import { Logo } from "./logo";
import { MobileNavbar } from "./mobileNavbar";
import { Navbar } from "./navbar";

export const Header = async () => {
	const t = await getScopedI18n("Navbar");
	const locale = getCurrentLocale();
	const translatedLinks = navbarLinks.map((link) => {
		// eslint-disable-next-line fp/no-let
		let href = link.href;

		if (link.href === "/") {
			href = `${link.href}${locale}`;
		}

		return {
			title: t(link.i18nKey as any),
			href,
		};
	});
	const translatedLanguages = languages.map(({ lang, i18nKey }) => {
		return {
			lang,
			title: t(`Language.${i18nKey}` as any),
		};
	});
	return (
		<header className="container relative mx-auto">
			<div className="p-container absolute left-0 top-0 z-30 mx-auto mt-[35px] flex h-12 w-full items-center justify-between text-white">
				<Logo />
				<Navbar links={translatedLinks} />
				<div className="flex items-center lg:gap-2">
					<LoginButton
						loginTitle={t("login")}
						dashboardTitle={t("dashboard")}
					/>
					<LanguageSelect languages={translatedLanguages} />
					<MobileNavbar loginButtonLabel={t("login")} links={translatedLinks} />
				</div>
			</div>
		</header>
	);
};

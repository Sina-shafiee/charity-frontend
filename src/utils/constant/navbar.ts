export const navbarLinks = [
	{
		href: "/",
		i18nKey: "home",
	},
	{
		href: "/causes",
		i18nKey: "causes",
	},
	{
		href: "/about",
		i18nKey: "about",
	},
	{
		href: "/user",
		i18nKey: "userDashboard",
	},
	{
		href: "/admin",
		i18nKey: "adminDashboard",
	},
	{
		href: "/contact",
		i18nKey: "contact",
	},
	{
		href: "/blog",
		i18nKey: "blog",
	},
];

export type NavbarLink = Omit<(typeof navbarLinks)[number], "i18nKey"> & {
	title: string;
};

interface Language {
	lang: string;
	i18nKey: string;
}

export const languages: Language[] = [
	{
		lang: "fa",
		i18nKey: "farsi",
	},
	{
		lang: "en",
		i18nKey: "english",
	},
];

export type TranslatedLanguage = Omit<(typeof languages)[number], "i18nKey"> & {
	title: string;
};

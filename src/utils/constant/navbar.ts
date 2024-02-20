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

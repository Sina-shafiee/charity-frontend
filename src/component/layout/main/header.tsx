import Logo from "@/component/icon/logo.svg";
import { Link } from "@/navigation";

const navbarLinks = [
	{
		href: "/",
		title: "Home",
	},
	{
		href: "/causes",
		title: "Causes",
	},
	{
		href: "/about",
		title: "About",
	},
	{
		href: "/contact",
		title: "Contact",
	},
	{
		href: "/blog",
		title: "Blogs",
	},
];

export const Header = () => {
	return (
		<header className="container relative mx-auto">
			<div className="absolute left-0 top-0 z-30 mt-[35px] flex h-12 w-full items-center justify-between text-white">
				<Logo className="h-[33px] w-[133px]" />
				<nav>
					<ul className="mt-1 flex items-center gap-x-3">
						{navbarLinks.map((link) => {
							return (
								<li key={link.href} className="text-base font-medium">
									<Link href={link.href}>{link.title}</Link>
								</li>
							);
						})}
					</ul>
				</nav>
				<Logo className="h-[60%] w-auto" />
			</div>
		</header>
	);
};

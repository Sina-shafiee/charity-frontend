import {
	GitHubLogoIcon,
	InstagramLogoIcon,
	LinkedInLogoIcon,
	TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

import partnerOne from "@/assets/partner-1.png";
import partnerTwo from "@/assets/partner-2.png";
import partnerThere from "@/assets/partner-3.png";
import partnerFour from "@/assets/partner-4.png";
import LogoIcon from "@/component/icon/logo.svg";
import { Button } from "@/component/ui";
import { getScopedI18n } from "@/locale/server";

const pics = {
	0: partnerOne,
	1: partnerTwo,
	2: partnerThere,
	3: partnerFour,
} as const;

const partners = Array.from({ length: 4 }).map((_, index) => ({
	pic: pics[index as keyof typeof pics],
}));

const usefulLinks = [
	{ i18nKey: "home", href: "/" },
	{ i18nKey: "causes", href: "/causes" },
	{ i18nKey: "blog", href: "/blog" },
	{ i18nKey: "photo_gallery", href: "/gallery" },
] as const;

const otherResources = [
	{ href: "/about", i18nKey: "about" },
	{ href: "/contact", i18nKey: "contact" },
] as const;

const socials = [
	{ href: "/", Icon: GitHubLogoIcon },
	{ href: "/", Icon: TwitterLogoIcon },
	{ href: "/", Icon: InstagramLogoIcon },
	{ href: "/", Icon: LinkedInLogoIcon },
];

export const Footer = async () => {
	const t = await getScopedI18n("Footer");
	return (
		<Fragment>
			<section className="container mx-auto mt-32 grid grid-cols-12 gap-24">
				{partners.map(({ pic }) => {
					return (
						<Image
							alt="partner"
							key={pic.src}
							placeholder="blur"
							src={pic}
							className="col-span-3"
						/>
					);
				})}
			</section>
			<footer className="relative mx-auto mt-28 bg-[#22262F] pb-6 pt-24 text-white">
				<div className="container mx-auto grid grid-cols-6">
					<div className="col-span-3">
						<LogoIcon className="w-44" />
						<h4 className="mt-8 font-heading text-2xl text-white">
							{t("keep_in_touch")}
						</h4>
						<h5 className="mb-4 mt-2 text-base text-white">
							{t("reponse_rate")}
						</h5>
						<div className="my-6 lg:mb-0">
							{socials.map(({ Icon, href }) => {
								return (
									<Button
										variant="outline"
										size="icon"
										key={href}
										className="group mr-4 size-11 items-center justify-center rounded-full bg-background font-normal shadow-lg outline-none focus:outline-none"
										type="button"
									>
										<Icon className="size-7 text-gray-800 group-hover:text-white" />
									</Button>
								);
							})}
						</div>
					</div>
					<div className="col-span-1">
						<h4 className="mb-2 block text-lg font-semibold text-white">
							{t("useful_links")}
						</h4>
						<ul>
							{usefulLinks.map(({ href, i18nKey }) => {
								return (
									<li key={i18nKey}>
										<Link
											className="block pb-2 font-semibold hover:text-blue-400"
											href={href}
										>
											{t(`UseFulLinks.${i18nKey}`)}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
					<div className="col-span-1">
						<h4 className="mb-2 block text-lg font-semibold text-white">
							{t("other_resources")}
						</h4>
						<ul>
							{otherResources.map(({ href, i18nKey }) => {
								return (
									<li key={i18nKey}>
										<Link
											className="block pb-2 font-semibold hover:text-blue-400"
											href={href}
										>
											{t(`OtherResuorces.${i18nKey}`)}
										</Link>
									</li>
								);
							})}
						</ul>
					</div>
					<div className="col-span-1">
						<h4 className="mb-2 block text-lg font-semibold text-white">
							{t("address")}
						</h4>
						<p>{t("Address")}</p>
					</div>
				</div>
				<hr className="my-6" />
				<div className="flex flex-wrap items-center justify-center md:justify-between">
					<div className="mx-auto w-full px-4 text-center md:w-4/12">
						<div className="py-1 font-normal">
							{t("copy_right.text")}
							<a
								href="https://www.github.com/sina-shafiee"
								target="_blank"
								rel="noreferrer"
								className="font-medium"
							>
								{" "}
								{t("copy_right.author")}
							</a>
						</div>
					</div>
				</div>
			</footer>
		</Fragment>
	);
};

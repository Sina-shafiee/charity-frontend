import Link from "next/link";

import LeftPath from "@/component/icon/hero-left-path.svg";
import RightPath from "@/component/icon/hero-right-path.svg";
import { Button } from "@/component/ui";
import { getCurrentLocale, getScopedI18n } from "@/locale/server";
import { cn } from "@/utils";

export const Hero = async () => {
	const isRtl = getCurrentLocale() === "fa";
	const t = await getScopedI18n("Index.Hero");
	return (
		<section className="relative grid max-h-[840px] min-h-screen place-content-center bg-gray-600 bg-[url('/images/landing-hero-pattern.webp')] bg-cover bg-center bg-no-repeat pt-16 sm:pt-0">
			<RightPath className="absolute bottom-0 right-0 h-auto w-80" />
			<LeftPath className="absolute bottom-0 left-0 h-72 w-auto" />
			<section className="relative z-40 flex w-full flex-col px-2 py-20 text-center font-semibold sm:mt-28 sm:px-0">
				<h5 className={cn(isRtl ? "mb-4" : "mb-2", "text-white")}>{t("h5")}</h5>
				<h1
					className={cn(
						isRtl ? "max-w-[840px]" : "max-w-[770px]",
						"mx-auto flex flex-col text-white text-4xl leading-normal sm:text-[72px] capitalize sm:leading-[90px]",
					)}
				>
					{t("heading")}
				</h1>
				<h6
					className={cn(
						isRtl ? "mt-6" : "mt-4",
						"mx-auto text-white max-w-[600px] font-medium",
					)}
				>
					{t("h6")}
				</h6>
				<div className="mx-auto mt-4 flex w-full max-w-96 flex-col items-center justify-center gap-4 px-14 sm:max-w-full sm:flex-row sm:gap-8">
					<Button className="w-full sm:max-w-max">
						<Link href="/causes">{t("main-cta")}</Link>
					</Button>
					<Button
						variant="outline"
						className="w-full text-white sm:max-w-max"
						asChild
					>
						<Link href="/about">{t("secondary-cta")}</Link>
					</Button>
				</div>
			</section>
		</section>
	);
};

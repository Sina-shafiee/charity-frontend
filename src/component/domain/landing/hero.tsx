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
		<section className="relative grid h-screen max-h-[840px] place-content-center bg-[url('/images/landing-hero-pattern.webp')] bg-cover bg-center bg-no-repeat">
			<RightPath className="absolute bottom-0 right-0 h-auto w-80" />
			<LeftPath className="absolute bottom-0 left-0 h-72 w-auto" />
			<section className="relative z-40 mt-28 flex w-full flex-col text-center font-semibold">
				<h5 className={cn(isRtl ? "mb-4" : "mb-2", "text-white")}>{t("h5")}</h5>
				<h1
					className={cn(
						isRtl ? "max-w-[840px]" : "max-w-[770px]",
						"mx-auto flex flex-col text-white text-[72px] capitalize leading-[90px]",
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
				<div className="mt-10 flex w-full items-center justify-center gap-8">
					<Button className="max-w-max">
						<Link href="/causes">{t("main-cta")}</Link>
					</Button>
					<Button variant="outline" className="max-w-max text-white" asChild>
						<Link href="/about">{t("secondary-cta")}</Link>
					</Button>
				</div>
			</section>
		</section>
	);
};

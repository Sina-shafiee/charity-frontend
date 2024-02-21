import { useTranslations } from "next-intl";

import LeftPath from "@/component/icon/hero-left-path.svg";
import RightPath from "@/component/icon/hero-right-path.svg";
import { Button } from "@/component/ui";
import { useIsRTL } from "@/hooks";
import { Link } from "@/navigation";
import { cn } from "@/utils";

export const Hero = () => {
	const isRtl = useIsRTL();
	const t = useTranslations("Index.Hero");

	return (
		<div className="relative grid h-screen max-h-[840px] place-content-center bg-[url('/images/landing-hero-pattern.webp')] bg-cover bg-center bg-no-repeat">
			<RightPath className="absolute bottom-0 right-0 h-auto w-80" />
			<LeftPath className="absolute bottom-0 left-0 h-72 w-auto" />
			<section className="relative z-40 mt-20 flex w-full flex-col text-center font-semibold text-white">
				<h5 className={cn(isRtl ? "mb-4" : "mb-2")}>{t("h5")}</h5>
				<h1
					className={cn(
						isRtl ? "max-w-[840px]" : "max-w-[770px]",
						"mx-auto flex flex-col text-[72px] capitalize leading-[90px]",
					)}
				>
					{t("heading")}
				</h1>
				<h6
					className={cn(
						isRtl ? "mt-6" : "mt-4",
						"mx-auto  max-w-[600px] font-medium",
					)}
				>
					{t("h6")}
				</h6>
				<div className="mt-10 flex w-full items-center justify-center gap-8">
					<Button className="max-w-max">
						<Link href="/causes">{t("main-cta")}</Link>
					</Button>
					<Button variant="outline" className="max-w-max" asChild>
						<Link href="/about">{t("secondary-cta")}</Link>
					</Button>
				</div>
			</section>
		</div>
	);
};

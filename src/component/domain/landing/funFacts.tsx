import type { ReactNode } from "react";

import CarryBoxCircle from "@/component/icon/carry-box-circle.svg";
import LineIcon from "@/component/icon/line.svg";
import PigeonCircle from "@/component/icon/pigeon-circle.svg";
import ShakeHandCircle from "@/component/icon/shake-hand-circle.svg";
import WorldMapCircle from "@/component/icon/world-map-circle.svg";
import { FunFactCard } from "@/component/ui";
import { getCurrentLocale, getScopedI18n } from "@/locale/server";
import { cn } from "@/utils";

interface Fact {
	title: string;
	count: string;
	icon: ReactNode;
}

export const FunFacts = async () => {
	const t = await getScopedI18n("Index.FunFacts");
	const locale = getCurrentLocale();
	const facts: Fact[] = [
		{
			title: t("Facts.0.title"),
			count: "4597+",
			icon: <ShakeHandCircle />,
		},
		{
			title: t("Facts.1.title"),
			count: "8945+",
			icon: <CarryBoxCircle />,
		},
		{
			title: t("Facts.2.title"),
			count: "10M+",
			icon: <PigeonCircle />,
		},
		{
			title: t("Facts.3.title"),
			count: "100+",
			icon: <WorldMapCircle />,
		},
	] as const;
	return (
		<section className="container mx-auto mt-[7.5rem]">
			<section className="flex items-center gap-4">
				<h5 className="text-[1.125rem]">{t("title")}</h5>
				<LineIcon />
			</section>
			<h2
				className={cn(
					"mt-4 max-w-[499px]",
					locale === "fa" ? "text-3xl leading-[3rem]" : "text-[2.438rem]",
				)}
			>
				{t("subTitle")}
			</h2>
			<section className="mt-14 grid grid-cols-12 gap-6">
				{facts.map(({ count, icon, title }, index) => {
					return (
						<FunFactCard
							count={count}
							icon={icon}
							title={title}
							className="col-span-3"
							key={index.toFixed(1)}
						/>
					);
				})}
			</section>
		</section>
	);
};

import LineIcon from "@/component/icon/line.svg";
import { getScopedI18n } from "@/locale/server";

import { CausesSlider } from "./causesSlider";

export const Causes = async () => {
	const t = await getScopedI18n("DummyCard");
	const t2 = await getScopedI18n("Index.Causes");
	const dummyCard = {
		category: t("category"),
		title: t("title"),
		content: t("content"),
		donation: t("donation"),
		goal: t("goal"),
		raised: t("raised"),
		donate: t("donate"),
	};
	return (
		<section className="container mx-auto mt-[7.5rem] min-h-screen">
			<section className="flex items-center gap-4">
				<h5 className="text-[1.125rem]">{t2("title")}</h5>
				<LineIcon />
			</section>
			<CausesSlider {...dummyCard} subTitle={t2("subTitle")} />
		</section>
	);
};

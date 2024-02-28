import LineIcon from "@/component/icon/line.svg";
import { getScopedI18n } from "@/locale/server";

import { CausesSlider } from "./causesSlider";

export const Causes = async () => {
	const t = await getScopedI18n("Index.Causes");
	return (
		<section className="container mx-auto mt-[7.5rem]">
			<section className="flex items-center gap-4">
				<h5 className="text-[1.125rem]">{t("title")}</h5>
				<LineIcon />
			</section>
			<CausesSlider subTitle={t("subTitle")} />
		</section>
	);
};

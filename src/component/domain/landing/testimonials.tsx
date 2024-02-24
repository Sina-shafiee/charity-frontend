import LineIcon from "@/component/icon/line.svg";
import { getScopedI18n } from "@/locale/server";

import { TestimonialsSlider } from "./testimonialsSlider";

export const TestMonials = async () => {
	const t = await getScopedI18n("Index.Testimonials");
	return (
		<section className="mt-[7.5rem] bg-[#22262F] text-white">
			<div className="container mx-auto">
				<section className="flex items-center justify-center gap-4 pt-20">
					<LineIcon strokeOpacity="1" />
					<h5 className="text-[1.125rem] text-white">{t("title")}</h5>
					<LineIcon strokeOpacity="1" />
				</section>
				<h2 className="mt-4 text-center text-[2.438rem] text-white">
					{t("subTitle")}
				</h2>
				<TestimonialsSlider />
			</div>
		</section>
	);
};

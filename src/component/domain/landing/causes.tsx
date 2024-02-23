import LineIcon from "@/component/icon/line.svg";

// import { getScopedI18n } from "@/locale/server";
import { CausesSlider } from "./causesSlider";

export const Causes = () => {
	// const t = await getScopedI18n("Index.Welcome");
	return (
		<section className="container mx-auto mt-[7.5rem] min-h-screen">
			<section className="flex items-center gap-4">
				<h5 className="text-[1.125rem]">Latest Causes</h5>
				<LineIcon />
			</section>
			<CausesSlider />
		</section>
	);
};

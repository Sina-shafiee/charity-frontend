import {
	About,
	Causes,
	FunFacts,
	Hero,
	TestMonials,
} from "@/component/domain/landing";
import { Welcome } from "@/component/domain/landing/welcome";
import { getI18n } from "@/locale/server";

const LandingPage = async () => {
	const t = await getI18n();
	return (
		<main>
			<Hero />
			<About />
			<Welcome />
			<Causes />
			<TestMonials />
			<FunFacts />
			<div className="mt-10" />
			<p className="container text-justify ">
				{t("lorem")}
				{t("lorem")}
				{t("lorem")}
				{t("lorem")}
				{t("lorem")}
				{t("lorem")}
				{t("lorem")}
			</p>
		</main>
	);
};

export default LandingPage;

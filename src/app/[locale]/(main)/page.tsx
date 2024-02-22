import { useTranslations } from "next-intl";

const LandingPage = () => {
	const t = useTranslations();
	return (
		<section className="container min-h-screen py-12 text-justify">
			{t("lorem")}
			{t("lorem")}
			{t("lorem")}
			{t("lorem")}
			{t("lorem")}
			{t("lorem")}
			{t("lorem")}
			{t("lorem")}
			{t("lorem")}
		</section>
	);
};

export default LandingPage;

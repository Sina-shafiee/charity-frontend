import { useTranslations } from "next-intl";
import type { FC } from "react";

const HomePage: FC = () => {
	const t = useTranslations("Index");
	return <h2 className="text-2xl font-bold">{t("title")}</h2>;
};

export default HomePage;

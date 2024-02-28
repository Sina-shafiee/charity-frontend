import Image from "next/image";

import AboutPicOne from "@/assets/about-s-p1.jpg";
import AboutPicTwo from "@/assets/about-s-p2.jpg";
import LineIcon from "@/component/icon/line.svg";
import { Button } from "@/component/ui";
import { getScopedI18n } from "@/locale/server";

export const About = async () => {
	const t = await getScopedI18n("Index.About");
	return (
		<section className="container mt-[7.5rem] grid gap-[3.75rem] xl:grid-cols-12">
			<section className="h-full md:grid xl:col-span-7 xl:grid-cols-9 xl:grid-rows-11 xl:place-content-center">
				<section className="grid-about-start relative h-96 w-full overflow-hidden border-4 border-gray-300/95 bg-gray-200">
					<Image
						fill
						className="size-full object-cover"
						src={AboutPicOne}
						placeholder="blur"
						alt="Charity worker"
					/>
				</section>
				<section className="grid-about-end relative hidden h-96 overflow-hidden border-4 border-gray-300/95 bg-gray-200 md:block">
					<Image
						fill
						className="size-full object-cover"
						src={AboutPicTwo}
						placeholder="blur"
						alt="Charity worker"
					/>
				</section>
			</section>
			<section className="flex flex-col justify-center xl:col-span-5">
				<div className="flex items-center gap-4">
					<h5 className="text-[1.125rem]">{t("title")}</h5>
					<LineIcon />
				</div>
				<h2 className="mt-4">{t("heading")}</h2>

				<p className="mt-4 text-foreground">{t("content")}</p>
				<Button className="mt-10 max-w-max">{t("read-more")}</Button>
			</section>
		</section>
	);
};

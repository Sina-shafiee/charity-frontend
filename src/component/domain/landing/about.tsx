import Image from "next/image";
import { useTranslations } from "next-intl";

import AboutPicOne from "@/assets/about-s-p1.jpg";
import AboutPicTwo from "@/assets/about-s-p2.jpg";
import LineIcon from "@/component/icon/line.svg";
import { Button } from "@/component/ui";

export const About = () => {
	const t = useTranslations("Index.About");
	return (
		<section className="container mt-[7.5rem] grid grid-cols-12 gap-[3.75rem]">
			<section className="col-span-7 grid h-full grid-cols-4 grid-rows-3 place-content-center">
				<section className="grid-about-start relative h-96 overflow-hidden border-4 border-gray-300/95 bg-gray-200">
					<Image
						fill
						className="size-full object-cover"
						src={AboutPicOne}
						placeholder="blur"
						alt="Charity worker"
					/>
				</section>
				<section className="grid-about-end relative h-96 overflow-hidden border-4 border-gray-300/95 bg-gray-200">
					<Image
						fill
						className="size-full object-cover"
						src={AboutPicTwo}
						placeholder="blur"
						alt="Charity worker"
					/>
				</section>
			</section>
			<section className="col-span-5 flex flex-col justify-center">
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

import Image from "next/image";

import AboutPicOne from "@/assets/about-s-p1.jpg";
import AboutPicTwo from "@/assets/about-s-p2.jpg";
import InkLetterIcon from "@/component/icon/ink-letter.svg";
import LineIcon from "@/component/icon/line.svg";
import ShieldCheckIcon from "@/component/icon/shield-check.svg";
import { getScopedI18n } from "@/locale/server";

export const Welcome = async () => {
	const t = await getScopedI18n("Index.Welcome");
	return (
		<section className="container mx-auto mt-[7.5rem] grid grid-cols-12 gap-10">
			<section className="col-span-5 flex flex-col justify-center">
				<div className="flex items-center gap-4">
					<h5 className="text-[1.125rem]">{t("title")}</h5>
					<LineIcon />
				</div>
				<h2 className="mt-4">{t("heading")}</h2>
				<p className="mt-4">{t("content")}</p>
				<section className="mt-4 flex gap-8">
					<div className="w-full bg-[#EDF7F5] p-4">
						<div className="flex items-center gap-2 text-primary">
							<ShieldCheckIcon className="size-6" />
							<p>{t("Mission.title")}</p>
						</div>
						<p className="mt-4 text-sm">{t("Mission.content")}</p>
					</div>
					<div className="w-full bg-[#EDF7F5] p-4">
						<div className="flex items-center gap-2 text-primary">
							<InkLetterIcon className="size-6" />
							<p>{t("Vision.title")} </p>
						</div>
						<p className="mt-4 text-sm">{t("Vision.content")}</p>
					</div>
				</section>
				<div className="mt-4">
					<div className="flex items-center justify-between">
						<p className="font-semibold">{t("Donations")}</p>
						<p className="font-semibold">75%</p>
					</div>
					<div className="relative mt-1 h-2 w-full bg-[#C7E7DF]">
						<div className="absolute inset-0 w-[75%] bg-primary" />
					</div>
					<div className="mt-4 flex items-center justify-between">
						<p className="font-semibold">{t("Medical_Help")}</p>
						<p className="font-semibold">90%</p>
					</div>
					<div className="relative mt-1 h-2 w-full bg-[#C7E7DF]">
						<div className="absolute inset-0 w-[90%] bg-primary" />
					</div>
				</div>
			</section>
			<section className="col-span-7 grid h-full grid-cols-9 grid-rows-11 place-content-center">
				<section className="grid-welcome-start relative h-96 overflow-hidden border-4 border-gray-300/95 bg-gray-200">
					<Image
						fill
						className="size-full object-cover"
						src={AboutPicOne}
						placeholder="blur"
						alt="Charity worker"
					/>
				</section>
				<section className="grid-welcome-end relative h-96 border-4 border-gray-300/95 bg-[#EDF7F5] py-10 pe-4 ps-8">
					<Image
						fill
						className="size-full object-cover"
						src={AboutPicTwo}
						placeholder="blur"
						alt="Charity worker"
					/>
				</section>
			</section>
		</section>
	);
};

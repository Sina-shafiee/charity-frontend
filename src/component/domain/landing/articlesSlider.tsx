import {
	ArticleCard,
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/component/ui";
import { getScopedI18n } from "@/locale/server";

interface Props {
	subTitle: string;
}

export const ArticlesSlider = async ({ subTitle }: Props) => {
	const t = await getScopedI18n("DummyArticle");
	const article = {
		author: t("author"),
		readMore: t("read_more"),
		text: t("text"),
		title: t("title"),
	};
	return (
		<Carousel
			opts={{
				align: "start",
				loop: true,
			}}
			className="w-full"
		>
			<div className="mt-2 flex flex-wrap items-center justify-between md:flex-nowrap">
				<h2 className="w-full max-w-96 text-black">{subTitle}</h2>
				<div className="flex w-full items-center justify-end gap-2">
					<CarouselPrevious
						className="static size-10 -translate-y-0 border-transparent bg-muted hover:bg-muted hover:text-black"
						variant="outline"
					/>
					<CarouselNext
						className="static m-0 size-10 -translate-y-0 border-transparent bg-muted hover:bg-muted hover:text-black"
						variant="outline"
					/>
				</div>
			</div>
			<CarouselContent className="mt-8 cursor-grabbing">
				{Array.from({ length: 7 }).map((_, index) => {
					return (
						<CarouselItem
							key={index.toFixed(1)}
							className="basis-full sm:basis-1/2 lg:basis-1/3"
						>
							<ArticleCard {...article} />
						</CarouselItem>
					);
				})}
			</CarouselContent>
		</Carousel>
	);
};

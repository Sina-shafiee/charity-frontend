import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	CauseCard,
} from "@/component/ui";

interface Props {
	title: string;
	content: string;
	category: string;
	donation: string;
	raised: string;
	goal: string;
	donate: string;
	subTitle: string;
}

export const CausesSlider = ({ subTitle, ...props }: Props) => {
	return (
		<Carousel
			opts={{
				align: "start",
			}}
			className="w-full"
		>
			<div className="mt-4 flex items-center justify-between">
				<h2 className="text-black">{subTitle}</h2>
				<div className="flex  items-center gap-2">
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
			<CarouselContent className="mt-8 cursor-move">
				{Array.from({ length: 7 }).map((_, index) => {
					return (
						<CarouselItem key={index.toFixed(1)} className="basis-1/4">
							<CauseCard {...props} />
						</CarouselItem>
					);
				})}
			</CarouselContent>
		</Carousel>
	);
};

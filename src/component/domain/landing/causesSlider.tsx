import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	CauseCard,
} from "@/component/ui";

export const CausesSlider = () => {
	return (
		<Carousel
			opts={{
				align: "start",
			}}
			className="w-full"
		>
			<div className="mt-4 flex items-center justify-between">
				<h2 className="text-black">Find the popular cause</h2>
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
							<CauseCard />
						</CarouselItem>
					);
				})}
			</CarouselContent>
		</Carousel>
	);
};

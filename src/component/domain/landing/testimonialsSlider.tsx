import {
	Carousel,
	CarouselContent,
	CarouselDots,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	TestimonialCard,
} from "@/component/ui";
import { getScopedI18n } from "@/locale/server";

export const TestimonialsSlider = async () => {
	const t = await getScopedI18n("DummyTestimonial");
	return (
		<Carousel className="container mx-auto mt-12 w-full" opts={{ loop: true }}>
			<div className="relative">
				<CarouselContent className="max-h-max cursor-grabbing">
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem key={index.toFixed(1)}>
							<TestimonialCard
								author={t("author")}
								job={t("job")}
								text={t("text")}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious
					className="m-0 size-10 -translate-y-0 border-transparent bg-muted text-black hover:bg-slate-300/90 hover:text-black"
					variant="outline"
				/>
				<CarouselNext
					className="m-0 size-10 -translate-y-0 border-transparent bg-muted text-black hover:bg-slate-300/90 hover:text-black"
					variant="outline"
				/>
			</div>
			<CarouselDots className="pb-20 pt-10" />
		</Carousel>
	);
};

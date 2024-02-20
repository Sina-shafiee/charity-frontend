import LeftPath from "@/component/icon/hero-left-path.svg";
import RightPath from "@/component/icon/hero-right-path.svg";

export const Hero = () => {
	return (
		<div className="pointer-events-none relative min-h-screen bg-[url('/images/landing-hero-pattern.webp')] bg-cover bg-center bg-no-repeat">
			<RightPath className="absolute bottom-0 right-0 h-auto w-80" />
			<LeftPath className="absolute bottom-0 left-0 h-72 w-auto" />
		</div>
	);
};

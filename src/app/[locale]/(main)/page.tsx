import {
	About,
	Articles,
	Causes,
	FunFacts,
	Hero,
	TestMonials,
} from "@/component/domain/landing";
import { Welcome } from "@/component/domain/landing/welcome";

const LandingPage = () => {
	return (
		<main>
			<Hero />
			<About />
			<Welcome />
			<Causes />
			<TestMonials />
			<FunFacts />
			<Articles />
		</main>
	);
};

export default LandingPage;

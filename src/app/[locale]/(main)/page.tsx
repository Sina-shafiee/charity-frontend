import {
	About,
	Articles,
	Causes,
	FunFacts,
	Hero,
	TestMonials,
	Welcome,
} from "@/component/domain/landing";

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

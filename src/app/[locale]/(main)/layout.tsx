import type { FC, ReactNode } from "react";
import { Fragment } from "react";

import { Hero } from "@/component/domain/landing";
import { Header } from "@/component/layout/main";

interface Props {
	children: ReactNode;
}

const LandingLayout: FC<Props> = ({ children }) => {
	return (
		<Fragment>
			<Header />
			<Hero />
			{children}
		</Fragment>
	);
};
export default LandingLayout;

import type { FC, ReactNode } from "react";
import { Fragment } from "react";

import { Footer, Header } from "@/component/layout/main";

interface Props {
	children: ReactNode;
}

const LandingLayout: FC<Props> = ({ children }) => {
	return (
		<Fragment>
			<Header />
			{children}
			<Footer />
		</Fragment>
	);
};
export default LandingLayout;

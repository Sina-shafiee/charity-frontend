import type { FC, ReactNode } from "react";
import { Fragment } from "react";

interface Props {
	children: ReactNode;
}

const LandingLayout: FC<Props> = ({ children }) => {
	return (
		<Fragment>
			<div />
			{children}
		</Fragment>
	);
};
export default LandingLayout;

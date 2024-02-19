import { FC, ReactNode } from "react";

import "@/styles/globals.css";

type Props = {
	children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};
export default RootLayout;

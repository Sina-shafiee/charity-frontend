import "@/styles/globals.css";

import type { FC, ReactNode } from "react";

interface Props {
	children: ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
};
export default RootLayout;

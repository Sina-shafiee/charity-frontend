import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/component/**/*.{js,ts,jsx,tsx,mdx,svg}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		theme: {
			extend: {
				container: {
					center: true,
					padding: {
						DEFAULT: "1rem",
						sm: "1rem",
						md: "1.5rem",
						lg: "2rem",
						xl: "2.5rem",
					},
					screens: {
						sm: "576px",
						md: "768px",
						lg: "992px",
						xl: "1200px",
					},
				},
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
export default config;

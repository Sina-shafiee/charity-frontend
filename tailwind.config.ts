import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/component/**/*.{js,ts,jsx,tsx,mdx,svg}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {},
	plugins: [],
	darkMode: "class",
};
export default config;

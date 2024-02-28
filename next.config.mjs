/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		addSvgrRules(config);
		return config;
	},
};

const addSvgrRules = (config) => {
	const fileLoaderRule = config.module.rules.find((rule) =>
		rule.test?.test?.(".svg"),
	);

	config.module.rules.push(
		{
			...fileLoaderRule,
			test: /\.svg$/i,
			resourceQuery: /url/,
		},
		{
			test: /\.svg$/i,
			issuer: { not: /\.(css|scss|sass)$/ },
			resourceQuery: { not: /url/ },
			loader: "@svgr/webpack",
			options: {
				typescript: true,
			},
		},
	);

	fileLoaderRule.exclude = /\.svg$/i;
};
export default nextConfig;

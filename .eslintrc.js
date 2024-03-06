const { init } = require("@fullstacksjs/eslint-config/init");

module.exports = init({
	root: true,
	modules: {
		auto: true,
		react: true,
		next: true,
		cspell: false,
		typescript: {
			parserProject: "./tsconfig.json",
			resolverProject: "./tsconfig.json",
		},
	},
	rules: {
		"@typescript-eslint/no-unnecessary-condition": "off",
		"tailwindcss/no-custom-classname": "off",
	},
	extends: ["plugin:@tanstack/eslint-plugin-query/recommended"],
});

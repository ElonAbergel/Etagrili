/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				'rubik-moonrocks': ['Rubik Moonrocks', 'sans-serif'],
				sans: ['Assistant', 'sans-serif'],
				'assistant-bold': ['Assistant Bold', 'sans-serif'],
			},
			colors: {
				custom: '#001527',
			},
		},
	},
	variants: {},
	plugins: [
		require('tailwindcss'),
		require('postcss-responsive')({
			rules: {
				...require('postcss-responsive').rules,
			},
			breakpoints: {
				sm: '600px',
				md: '768px',
				lg: '992px',
				xl: '1200px',
			},
		}),
		// Add other PostCSS plugins as needed
	],
};

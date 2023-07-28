/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');

const nextConfig = {
	// Remove the "output" property from the "experimental" configuration
	experimental: {
		appDir: true,
	},
	// Use "output: 'export'" instead of "next export"
	output: 'export',
};

module.exports = withFonts(nextConfig);

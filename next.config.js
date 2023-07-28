/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');

const nextConfig = {
	// Remove the "output" property from the "experimental" configuration
	experimental: {
		appDir: true,
	},
	// trailingSlash: true,
};

module.exports = withFonts(nextConfig);

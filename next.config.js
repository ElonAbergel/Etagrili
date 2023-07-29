/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');
const withImages = require('next-images'); // Import next-images plugin

const nextConfig = {
	experimental: {
		appDir: true,
	},
	output: 'export',
};

module.exports = withFonts(nextConfig); // Add withImages to the chain

/** @type {import('next').NextConfig} */
const withImages = require('next-images');
const withFonts = require('next-fonts');

const nextConfig = {
	experimental: {
		appDir: true,
	},
	// Add the images configuration for image formats
	// This will support PNG, JPG, JPEG, GIF, and SVG formats
	images: {
		domains: [], // Add any domains if you are using external image URLs
	},
};

module.exports = withFonts(nextConfig);

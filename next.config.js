/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');
const withImages = require('next-images'); // Import next-images plugin

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

module.exports = withFonts(withImages(nextConfig)); // Add withImages to the chain

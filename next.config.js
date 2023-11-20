/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "culinary-community.vercel.app",
			},
			{
				protocol: "http",
				hostname: "localhost",
			},
		],
	},
};

module.exports = nextConfig;

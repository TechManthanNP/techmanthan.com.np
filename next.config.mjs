/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return {
			beforeFiles: [{ source: "/", destination: "/website.html" }],
		};
	},
};

export default nextConfig;

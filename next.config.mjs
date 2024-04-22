/** @type {import('next').NextConfig} */
const headers = [{ key: 'Cache-Control', value: 'public, max-age=3600' }]
const nextConfig = {
	reactStrictMode: false,
	transpilePackages: ['@lens-protocol', '@livepeer'],
	images: {
		minimumCacheTTL: 3600,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
		],
	},
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.(mp3|wav|m4a)$/,
			use: {
				loader: 'file-loader',
				options: {
					publicPath: '/_next/static/audio/',
					outputPath: 'static/audio/',
					name: '[name].[ext]',
				},
			},
		})
		return config
	},
}

export default nextConfig

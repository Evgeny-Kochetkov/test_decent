/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
	compiler: {
		styledComponents: true
	},

	webpack: (config) => {
			config.module.rules.push({
				test: /\.(mov|mp4)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							publicPath: '/_next',
							name: 'static/videos/[name].[hash].[ext]',
						},
					},
				],
			});

			config.module.rules.push({
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: {
						loader: 'file-loader',
						options: {
								publicPath: '/_next/static/fonts',
								outputPath: 'static/fonts',
								name: '[name].[ext]',
						},
				},
		});

			return config;
	},

	images: {
		domains: ['flagcdn.com', 'upload.wikimedia.org', 'lh3.googleusercontent.com'],
	}

};

export default nextConfig;

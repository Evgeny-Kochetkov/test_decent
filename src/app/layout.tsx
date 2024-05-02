import type { Metadata } from 'next'

import localFont from 'next/font/local'

import { GlobalStyle } from '@/globalStyle'
import StyledComponentsRegistry from './registry'

import { ReduxProvider } from '@/redux/provider'
import { Providers } from '@/components/providers'

import { Layout } from '@/components/layout'

const gilroy = localFont({
	src: [
		{
			path: '../../public/fonts/Gilroy-Bold.woff2',
			weight: 'bold',
			style: 'normal'
		},
		{
			path: '../../public/fonts/Gilroy-Light.woff2',
			weight: '300',
			style: 'normal'
		},
		{
			path: '../../public/fonts/Gilroy-Medium.woff2',
			weight: '500',
			style: 'normal'
		},
		{
			path: '../../public/fonts/Gilroy-MediumItalic.woff2',
			weight: '500',
			style: 'italic'
		},
		{
			path: '../../public/fonts/Gilroy-Regular.woff2',
			weight: 'normal',
			style: 'normal'
		},
		{
			path: '../../public/fonts/Gilroy-Thin.woff2',
			weight: '100',
			style: 'normal'
		},
		],
	variable: '--font-gilroy'
})

const roadRadio = localFont({
	src: [
		{
			path: '../../public/fonts/RoadRadio-Regular.woff2',
			weight: 'normal',
			style: 'normal'
		},
		{
			path: '../../public/fonts/RoadRadio-Bold.woff2',
			weight: 'bold',
			style: 'normal'
		},
		{
			path: '../../public/fonts/RoadRadio-Black.woff2',
			weight: '800',
			style: 'normal'
		}
	],
	variable: '--font-road-radio'
})

export const metadata: Metadata = {
	title: 'COUNTRIES',
	description: 'COUNTRIES',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<StyledComponentsRegistry>
				<GlobalStyle/>
				<body className={`${gilroy.variable} ${roadRadio.variable}`}>
					<ReduxProvider>
						<Providers>
							<Layout>
								{children}
							</Layout>
						</Providers>
					</ReduxProvider>
				</body>
			</StyledComponentsRegistry>
		</html>
	)
}

import { AppProps } from 'next/app'

import '@/app/assets/styles/globals.scss'
import MainProvider from '@/app/providers/MainProvider'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<MainProvider>
			<Component {...pageProps} />
		</MainProvider>
	)
}

export default MyApp

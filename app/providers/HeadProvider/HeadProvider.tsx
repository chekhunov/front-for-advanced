import { FC, ReactNode } from 'react'
import NextProgressBar from 'nextjs-progressbar'
import { accentColor } from '../../configs/constanst'
import Favicons from './Favicons'
import Head from 'next/head'

interface HeadProviderProps {
	children: ReactNode
}

const HeadProvider: FC<HeadProviderProps> = ({ children }): JSX.Element => {
	return (
		<>
			<NextProgressBar
				color={accentColor}
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>

			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1.0"
				/>

				<Favicons />

				<meta name="theme-color" content={'#181B1E'} />
				<meta name="msapplication-navbutton-color" content={'#181B1E'} />
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content={'#181B1E'}
				/>
			</Head>

			{children}
		</>
	)
}
export default HeadProvider

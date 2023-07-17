import { FC } from 'react'
import { MetaProps } from './Meta.interface'

import Head from 'next/head'
import { useRouter } from 'next/router'
import { siteName, titleMerge } from '../../configs/seo.config'
import logoImage from '@/app/assets/images/logo.svg'
import { onlyText } from '../string/clearText'
import { MetaNoIndex } from './MetaNoIndex'

const Meta: FC<MetaProps> = ({
	title,
	description,
	image,
	children
}): JSX.Element => {
	const { asPath } = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`

	return (
		<>
			{description ? (
				<Head>
					<title itemProp="headline">{titleMerge(title)}</title>
					<meta
						itemProp="description"
						name="description"
						content={onlyText(description, 152)}
					/>
					<link rel="canonical" href={currentUrl} />
					<meta property="og:locale" content="en" />
					<meta property="og:title" content={titleMerge(title)} />
					<meta property="og:url" content={currentUrl} />
					<meta property="og:image" content={image || logoImage} />
					<meta property="og:site_name" content={siteName} />
					<meta
						property="og:description"
						content={onlyText(description, 197)}
					/>
				</Head>
			) : (
				<MetaNoIndex title={title} />
			)}
			{children}
		</>
	)
}
export default Meta

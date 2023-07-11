import Link from 'next/link'
import Image from 'next/image'
import { FC } from 'react'

import logoImage from '@/app/assets/images/logo.svg'

const Logo: FC = (): JSX.Element => {
	return (
		<Link href="/" className="px-layout mb-10 block">
			<Image src={logoImage} width={247} height={34} alt="logo" />
		</Link>
	)
}
export default Logo

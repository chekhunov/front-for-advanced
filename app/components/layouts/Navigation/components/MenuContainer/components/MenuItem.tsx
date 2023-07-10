import { useRouter } from 'next/router'
import { FC } from 'react'
import cn from 'classnames'
import { MenuItemProps } from '../Menu.interface'
import Link from 'next/link'
import MaterialIcon from '@/app/components/ui/MaterialIcon'

import styles from '../Menu.module.scss'

const MenuItem: FC<{ item: MenuItemProps }> = ({ item }): JSX.Element => {
	const { asPath } = useRouter()

	const { icon, link, title } = item || {}

	return (
		<li className={cn({ [styles.active]: asPath === link })}>
			<Link className={styles.link} href={link}>
				<MaterialIcon name={icon} />
				<span className='link-title'>{title}</span>
			</Link>
		</li>
	)
}
export default MenuItem

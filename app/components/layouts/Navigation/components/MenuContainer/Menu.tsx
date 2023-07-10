import { FC } from 'react'
import { MenuProps } from './Menu.interface'
import MenuItem from './components/MenuItem'
import AuthItems from './auth/AuthItems'

import styles from './Menu.module.scss'

interface IMenuProps {
	menu: MenuProps
}

const Menu: FC<IMenuProps> = ({ menu }): JSX.Element => {
	const { items, title } = menu
	return (
		<div className={styles.menu}>
			<div className={styles.heading}>{title}</div>
			<ul className={styles.ul}>
				{items?.map((el) => <MenuItem key={el.link} item={el} />)}
				{title === 'General' ? <AuthItems /> : null}
			</ul>
		</div>
	)
}
export default Menu

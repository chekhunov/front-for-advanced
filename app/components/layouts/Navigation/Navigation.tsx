import { FC } from 'react'
import Logo from './Logo'

import styles from './Navigation.module.scss'
import MenuContainer from './components/MenuContainer'

const Navigation: FC = (): JSX.Element => {
	return (
		<div className={styles.navigation}>
      <Logo />
      <MenuContainer />
		</div>
	)
}

export default Navigation

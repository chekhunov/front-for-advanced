import { FC } from 'react'
import styles from './Layout.module.scss'
import { LayoutProps } from './Layout.interface'
import Navigation from './Navigation'
import Sidebar from './Sidebar'

const Layout: FC<LayoutProps> = ({ children }): JSX.Element => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div>{children}</div>
			<Sidebar />
		</div>
	)
}

export default Layout

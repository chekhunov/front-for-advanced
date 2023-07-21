import { FC } from 'react'
import Search from './Search'

import styles from './Sidebar.module.scss'
import MoviesContainer from './MoviesContainer/MoviesContainer'

const Sidebar: FC = (): JSX.Element => {
	return (
		<div className={styles.sidebar}>
			<Search />
			<MoviesContainer />
		</div>
	)
}

export default Sidebar

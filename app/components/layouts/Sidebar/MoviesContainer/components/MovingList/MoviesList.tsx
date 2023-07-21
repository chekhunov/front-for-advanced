import { FC } from 'react'
import { MoviesListProps } from './MoviesList.interface'
import Link from 'next/link'
import MovieItem from '../MovieItem'

import styles from './MoviesList.module.scss'

const MoviesList: FC<MoviesListProps> = ({
	link,
	title,
	movies
}): JSX.Element => {
	return (
		<div className={styles.list}>
			<div className={styles.heading}>{title}</div>
			{movies?.map((movie) => <MovieItem key={movie._id} movie={movie} />)}
			<Link href={link} className={styles.button}>
				See more
			</Link>
		</div>
	)
}
export default MoviesList

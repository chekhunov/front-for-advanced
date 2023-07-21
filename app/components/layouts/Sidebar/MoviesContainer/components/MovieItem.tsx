import { MovieDTO } from '@/app/shared/types/movie.types'
import { FC } from 'react'
import Image from 'next/image'

import styles from './MovingList/MoviesList.module.scss'
import Link from 'next/link'
import { getGenreUrl, getMovieUrl } from '@/app/configs/url.config'
import { getGenresListEach } from '@/app/utils/movie/getGenresList'
import MaterialIcon from '@/app/components/ui/MaterialIcon'

interface MovieItemProps {
	movie: MovieDTO
}

const MovieItem: FC<MovieItemProps> = ({ movie }): JSX.Element => {
	return (
		<div className={styles.item}>
			<Link href={getMovieUrl(movie.slug)}>
				<Image
					width={65}
					height={97}
					src={movie.poster}
					alt={movie.title}
					draggable={false}
					priority
				/>
			</Link>
			<div className={styles.info}>
				<>
					<div className={styles.title}>{movie.title}</div>
					<div className={styles.genres}>
						{movie.genres.map((genre, index) => (
							<Link key={genre.id} href={getGenreUrl(genre.slug)}>
								{getGenresListEach(index, movie.genres.length, genre.name)}
							</Link>
						))}
					</div>
				</>

				<div className={styles.rating}>
					<MaterialIcon name="MdStarRate" />

					<span>{movie.rating.toFixed(1)}</span>
				</div>
			</div>
		</div>
	)
}
export default MovieItem

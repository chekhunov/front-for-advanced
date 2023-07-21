import { FC } from 'react'
import styles from './SearchList.module.scss'
import { MovieDTO } from '@/app/shared/types/movie.types'
import Link from 'next/link'
import Image from 'next/image'
import { getMovieUrl } from '@/app/configs/url.config'

interface SearchListProps {
	movies: MovieDTO[]
}

const SearchList: FC<SearchListProps> = ({ movies }): JSX.Element => {
	return (
		<div className={styles.list}>
			{movies.length ? (
				movies.map((movie) => (
					<Link key={movie._id} className="link" href={getMovieUrl(movie.slug)}>
						<Image
							width={50}
							height={50}
							src={movie.poster}
							alt={movie.title}
							objectFit="cover"
							objectPosition="top"
							draggable={false}
						/>
						<span>{movie.title}</span>
					</Link>
				))
			) : (
				<div className="text-white text-center my-4">Movies not found!</div>
			)}
		</div>
	)
}
export default SearchList

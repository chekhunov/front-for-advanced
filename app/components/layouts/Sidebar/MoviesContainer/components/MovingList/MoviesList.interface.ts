import { MovieDTO } from '@/app/shared/types/movie.types'

export interface MoviesListProps {
	title: string
	link: string
	movies: MovieDTO[]
}

import { FC } from 'react'
import PopularMovies from './components/PopularMovies'
import FavoriteMovies from './components/FavoriteMovies'

const MoviesContainer: FC = (): JSX.Element => {
	return (
		<>
			<PopularMovies />
			<FavoriteMovies />
		</>
	)
}
export default MoviesContainer

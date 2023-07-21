import axios, { axiosClassic } from '@/app/api/interceptors'

// import { IMovieEditInput } from '@/app/components/screens/admin/movie/movie-edit.interface'



import { getMoviesUrl } from '@/app/configs/api.config'
import { MovieDTO } from '@/app/shared/types/movie.types'

export const MovieService = {
	async getBySlug(slug: string) {
		return axiosClassic.get<MovieDTO>(getMoviesUrl(`/by-slug/${slug}`))
	},

	async getByActor(actorId: string) {
		return axiosClassic.get<MovieDTO[]>(getMoviesUrl(`/by-actor/${actorId}`))
	},

	async getByGenres(genreIds: string[]) {
		return axiosClassic.post<MovieDTO[]>(getMoviesUrl(`/by-genres`), {
			genreIds
		})
	},

	async create() {
		return axios.post<string>(getMoviesUrl(''))
	},

	async updateCountOpened(slug: string) {
		return axiosClassic.post(getMoviesUrl('/update-count-opened'), {
			slug
		})
	},

	// async update(_id: string, data: IMovieEditInput) {
	// 	return axios.put<string>(getMoviesUrl(`/${_id}`), data)
	// },

	async delete(_id: string) {
		return axios.delete<string>(getMoviesUrl(`/${_id}`))
	},

	async getMovies(searchTerm?: string) {
		return axiosClassic.get<MovieDTO[]>(getMoviesUrl(``), {
			params: searchTerm
				? {
						searchTerm
				  }
				: {}
		})
	},

	// async getById(_id: string) {
	// 	return axios.get<IMovieEditInput>(getMoviesUrl(`/${_id}`))
	// },

	async getMostPopularMovies() {
		const { data: movies } = await axiosClassic.get<MovieDTO[]>(
			getMoviesUrl('/most-popular')
		)

		return movies
	}
}
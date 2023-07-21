import { TypeMaterialIconName } from './icons.types'

export interface IGenre {
	id: string
	name: string
	slug: string
	description: string
	icon: TypeMaterialIconName
}

export interface IActor {
	_id: string
	name: string
	photo: string
	countMovies: number
	slug: string
}

export interface IParameters {
	year: number
	duration: number
	country: string
}

/* DTO - Data transfer object */
export interface MovieDTO {
	_id: string
	poster: string
	bigPoster: string
	title: string
	parameters: IParameters
  genres: IGenre[]
  actors: IActor[]
  countOpened: number
  videoUrl: string
  rating: number
  slug: string
}
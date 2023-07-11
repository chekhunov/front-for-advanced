import { GenreService } from '@/app/services/genre.services'
import { useQuery } from 'react-query'
import { MenuItemProps } from '../Menu.interface'
import { getGenreUrl } from '@/app/config/url.config'

export const usePopularGenres = () => {
	const queryData = useQuery(
		'popular genre menu',
		() => GenreService.getAll(),
		{
			select: ({ data }) =>
				data
					.map(
						(genre) =>
							({
								icon: genre.icon,
								link: getGenreUrl(genre.slug),
								title: genre.name
							}) as MenuItemProps
					)
					.splice(0, 4),
			onError(error) {
				console.log(error)
			}
		}
	)

	return queryData
}

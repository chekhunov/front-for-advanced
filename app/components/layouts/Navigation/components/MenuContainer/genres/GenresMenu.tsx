import { FC } from 'react'
import { usePopularGenres } from './usePopularGenres'
import Menu from '../Menu'
import SkeletonLoader from '@/app/components/ui/skeleton-loader'

const GenresMenu: FC = (): JSX.Element => {
	const { isLoading, data } = usePopularGenres()

	return isLoading ? (
		<div className="mx-11 mb-6">
			<SkeletonLoader count={3} className="h-7 mt-6" />
		</div>
	) : (
		<Menu menu={{ title: 'Popular genres', items: data || [] }} />
	)
}
export default GenresMenu

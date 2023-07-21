import { FC } from 'react'
import styles from './Search.module.scss'
import { useSearch } from './useSearch'
import SearchList from './SearchList'
import SearchField from '@/app/components/ui/search-field'

const Search: FC = (): JSX.Element => {
	const { isSuccess, data = [], handleSearch, searchTerm } = useSearch()

	return (
		<div className={styles.wrapper}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && <SearchList movies={data} />}
		</div>
	)
}
export default Search

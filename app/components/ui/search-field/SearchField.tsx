import { FC } from 'react'
import { SearchFieldProps } from './SearchField.interface'

import styles from './SearchField.module.scss'
import MaterialIcon from '../MaterialIcon'

const SearchField: FC<SearchFieldProps> = ({
	searchTerm,
	handleSearch
}): JSX.Element => {
	return (
		<div className={styles.search}>
      <MaterialIcon name="MdSearch" />
      <input placeholder='Search' value={searchTerm} onChange={handleSearch} />
		</div>
	)
}
export default SearchField

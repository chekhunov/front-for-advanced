import { ChangeEvent } from 'react'

export interface SearchFieldProps {
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

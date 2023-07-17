import { ReactNode } from 'react'

export interface MetaProps {
	title: string
	description?: string
	image?: string
	children: ReactNode
}
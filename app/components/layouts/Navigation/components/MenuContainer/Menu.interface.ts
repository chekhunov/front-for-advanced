import { TypeMaterialIconName } from '@/app/shared/types/icons.types'

export interface MenuItemProps {
	icon: TypeMaterialIconName
	title: string
	link: string
}

export interface MenuProps {
	title: string
	items: MenuItemProps[]
}

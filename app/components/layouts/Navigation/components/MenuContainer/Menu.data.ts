import { MenuProps } from './Menu.interface'

export const firstMenu: MenuProps = {
	title: 'Menu',
	items: [
		{
			icon: 'MdHome',
			link: '/',
			title: 'Home'
		},
		{
			icon: 'MdExplore',
			link: '/genres',
			title: 'Discovery'
		},
		{
			icon: 'MdRefresh',
			link: '/fresh',
			title: 'Fresh movies'
		},
		{
			icon: 'MdLocalFireDepartment',
			link: '/trending',
			title: 'Trending now'
		}
	]
}

export const userMenu: MenuProps = {
	title: 'General',
	items: []
}
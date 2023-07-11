import Menu from './Menu'
import { firstMenu, userMenu } from './Menu.data'
import GenresMenu from './genres/GenresMenu'

const MenuContainer = () => {
	return (
		<>
			<Menu menu={firstMenu} />
			<GenresMenu />
			<Menu menu={userMenu} />
		</>
	)
}
export default MenuContainer

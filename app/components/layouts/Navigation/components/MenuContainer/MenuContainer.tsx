import Menu from './Menu'
import { firstMenu, userMenu } from './Menu.data'

const MenuContainer = () => {
	return (
		<>
			<Menu menu={firstMenu} />
			{/* TODO Add Genres Menu */}
			<Menu menu={userMenu} />
		</>
	)
}
export default MenuContainer

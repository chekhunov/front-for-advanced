import { TypeMaterialIconName } from '@/app/shared/types/icons.types'
import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

interface MaterialIconProps {
	name: TypeMaterialIconName
}

const MaterialIcon: FC<MaterialIconProps> = ({ name }): JSX.Element => {
	const IconComponent = MaterialIcons[name]

	return <IconComponent /> || <MaterialIcons.MdDragIndicator />
}
export default MaterialIcon

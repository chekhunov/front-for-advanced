import { FC } from 'react'
import { HeadingProps } from './Heading.interface'

const Heading: FC<HeadingProps> = ({ title, className }): JSX.Element => {
	return (
		<h1
			className={`text-white text-opacity-80 font-semibold ${
				className?.includes('xl') ? '' : 'text-3xl'
			} ${className}`}
		>
			{title}
		</h1>
	)
}
export default Heading

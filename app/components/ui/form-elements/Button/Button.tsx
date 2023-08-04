import { ButtonHTMLAttributes, FC } from 'react'
import cn from 'classnames'

import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({
	children,
	className,
	...rest
}): JSX.Element => {
	return (
		<button className={cn(styles.button, className)} {...rest}>
			{children}
		</button>
	)
}

export default Button

import { InputHTMLAttributes, forwardRef } from 'react'
import { FieldError } from 'react-hook-form'
import cn from 'classnames'
import styles from './Field.module.scss'

interface BasicFieldProps {
	placeholder: string
	error?: Omit<FieldError, 'type'> | undefined
}

type TypeInputFieldProps = InputHTMLAttributes<HTMLInputElement> &
	BasicFieldProps

interface FieldProps extends TypeInputFieldProps {}

const Field = forwardRef<HTMLInputElement, FieldProps>(
	({ placeholder, error, type = 'text', style, ...rest }, ref): JSX.Element => {
		return (
			<div className={cn(styles.common, styles.field)} style={style}>
				<label>
					<span>{placeholder}</span>
					<input ref={ref} type={type} {...rest} />
				</label>
				{error && <div className={styles.error}>{error?.message}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field

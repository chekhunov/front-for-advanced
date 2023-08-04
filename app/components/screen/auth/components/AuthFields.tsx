import Field from '@/app/components/ui/form-elements/Field'
import { validEmail } from '@/app/shared/regex'
import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

interface AuthFieldsProps {
	register: UseFormRegister<any>
	formState: FormState<any>
	isPasswordRequired?: boolean
}

const AuthFields: FC<AuthFieldsProps> = ({
	register,
	formState: { errors },
	isPasswordRequired = false
}): JSX.Element => {
	return (
		<>
			<Field
				{...register('email', {
					required: 'Email is required',
					pattern: {
						value: validEmail,
						message: 'Please enter a valid email address'
					}
				})}
				type="email"
				placeholder="Email"
				error={errors.email}
			/>
			<Field
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Password is required',
								minLength: {
									value: 6,
									message: 'Min length should more 6 symbols'
								}
						  }
						: {}
				)}
				type="password"
				placeholder="Password"
				error={errors.password}
			/>
		</>
	)
}

export default AuthFields

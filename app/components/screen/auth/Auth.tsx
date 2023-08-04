import { AuthInputProps } from '@/app/components/screen/auth/Auth.interface'
import { useAuthRedirect } from '@/app/components/screen/auth/useAuthRedirect'
import { useAuth } from '@/app/hooks/useAuth'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import styles from './Auth.module.scss'
import Meta from '@/app/utils/meta'
import Heading from '../../ui/heading'
import Button from '../../ui/form-elements/Button'
import AuthFields from './components/AuthFields'

const Auth = () => {
	useAuthRedirect()

	const { isLoading } = useAuth()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset
	} = useForm<AuthInputProps>({
		mode: 'onChange'
	})

	const login = (data: any) => {
		console.table(data)
	}
	const register = (data: any) => {
		console.table(data)
	}

	const onSubmit: SubmitHandler<AuthInputProps> = (data) => {
		if (type === 'login') login(data)
		else if (type === 'register') register(data)

		reset()
	}

	return (
		<Meta title="Auth">
			<section className={styles.wrapper}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Heading title="Auth" className="mb-6" />

					<AuthFields
						formState={formState}
						register={registerInput}
						isPasswordRequired
					/>

					<div className={styles.buttons}>
						<Button
							type="submit"
							onClick={() => setType('login')}
							disabled={isLoading}
						>
							Login
						</Button>

						<Button
							type="submit"
							onClick={() => setType('register')}
							disabled={isLoading}
						>
							Register
						</Button>
					</div>
				</form>
			</section>
		</Meta>
	)
}
export default Auth

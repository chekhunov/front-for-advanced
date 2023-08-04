import { FC } from 'react'
import { HomeProps } from './Home.interface'
import Meta from '@/app/utils/meta'
import Heading from '@/app/components/ui/heading'
import { toastr } from 'react-redux-toastr'

const Home: FC<HomeProps> = (): JSX.Element => {
	return (
		<Meta
			title="Watch movies online"
			description="Watch MovieApp movies and TV shows online or stream right to your browser."
		>
			<Heading
				title="Watch movies online"
				className="text-gray-300 mb-8 text-xl"
			></Heading>
    </Meta>
	)
}

export default Home

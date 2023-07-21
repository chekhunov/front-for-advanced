import { FC } from 'react'

const NotAuthFavorite: FC = (): JSX.Element => {
	return (
		<div>
			<div className="mt-11 bg-gray-700 bg-opacity-20 py-3 px-5 rounded-lg text-white text-opacity-80">
				For viewing favorites plz authorize!
			</div>
		</div>
	)
}
export default NotAuthFavorite

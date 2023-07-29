import { FC, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from '../components/layouts/Layout'
import ReduxToast from './ReduxToast'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import HeadProvider from './HeadProvider'

interface MainProviderProps {
	children: ReactNode
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

const MainProvider: FC<MainProviderProps> = ({ children }): JSX.Element => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<ReduxToast />
					<Layout>{children}</Layout>
				</QueryClientProvider>
			</Provider>
		</HeadProvider>
	)
}
export default MainProvider

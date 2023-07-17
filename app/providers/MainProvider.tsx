import { FC, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Layout from '../components/layouts/Layout'

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
		<QueryClientProvider client={queryClient}>
			<Layout>{children}</Layout>
		</QueryClientProvider>
	)
}
export default MainProvider

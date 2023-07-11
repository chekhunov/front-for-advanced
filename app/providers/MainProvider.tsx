import { FC, ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

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
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}
export default MainProvider

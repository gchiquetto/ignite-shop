import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app'
import Header from '../components/Header'
import { ShoppingListContextProvider } from '../contexts/ShoppingListContext'
globalStyles()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <ShoppingListContextProvider>
        <Header />
        <Component {...pageProps} />
      </ShoppingListContextProvider>
    </Container>
  )
}

export default MyApp

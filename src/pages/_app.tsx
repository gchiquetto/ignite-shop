import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import Image from 'next/future/image'
import logo from '../assets/logo.svg'
import { Container, Header } from '../styles/pages/app'
import Link from 'next/link'
globalStyles()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={logo} alt="" />
        </Link>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp

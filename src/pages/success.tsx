import Image from 'next/future/image'
import Link from 'next/link'
import {
  ImageContainer,
  ProductsImagesContainer,
  SuccessContainer,
} from '../styles/pages/success'
import { GetServerSideProps } from 'next'
import { stripe } from '../lib/stripe'
import Head from 'next/head'

interface SuccessProps {
  customerName: string
  product: {
    name: string
    imageUrl: string
  }[]
}

export default function Success({ customerName, product }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Successful Purchase | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <h1>Your Purchase Was Successful!</h1>
        <ProductsImagesContainer>
          {!!product &&
            product.map((prod) => {
              return (
                <ImageContainer key={prod.imageUrl}>
                  <Image src={prod.imageUrl} alt="" width={115} height={106} />
                </ImageContainer>
              )
            })}
        </ProductsImagesContainer>

        <p>
          Yay <strong>{customerName}</strong>, your purchase of {product.length}{' '}
          tshirt{product.length > 1 ? 's' : ''} is in the way to your place
        </p>
        <Link href="/">Back to catalog</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name

  const productsList = session.line_items?.data.map((item) => {
    return {
      name: item.price?.product,
      imageUrl: item.price?.product.images[0],
    }
  })

  return {
    props: {
      customerName,
      product: productsList,
    },
  }
}

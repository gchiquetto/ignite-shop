import Image from 'next/future/image'
import { useKeenSlider } from 'keen-slider/react'
import { HomeContainer, Product } from '../styles/pages/home'
import 'keen-slider/keen-slider.min.css'
import { stripe } from '../lib/stripe'
import { GetStaticProps } from 'next'
import Stripe from 'stripe'
import Link from 'next/link'
import Head from 'next/head'
import { useContext } from 'react'
import { ShoppingListContext } from '../contexts/ShoppingListContext'
import { Handbag } from 'phosphor-react'
import { ProductType } from '../reducers/selectedProducts/reducer'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
    numericPrice: number
  }[]
}

export default function Home({ products }: HomeProps) {
  const { addNewProduct } = useContext(ShoppingListContext)
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
    breakpoints: {
      '(max-width: 1200px)': {
        slides: {
          perView: 3,
          spacing: 32,
        },
      },
      '(max-width: 998px)': {
        slides: {
          perView: 2,
          spacing: 48,
        },
      },
      '(max-width: 778px)': {
        slides: {
          perView: 2,
          spacing: 32,
        },
      },
      '(max-width: 580px)': {
        slides: {
          perView: 1,
          spacing: 32,
        },
      },
    },
  })

  function handleAddProductToShoppingCart(product: ProductType) {
    const newProduct = {
      name: product.name,
      imageUrl: product.imageUrl,
      price: product.price,
      defaultPriceId: product.defaultPriceId,
      numericPrice: product.numericPrice,
    }
    addNewProduct(newProduct)
  }

  return (
    <>
      <Head>
        <title>Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => {
          return (
            <Link
              href={`/product/${product.id}`}
              prefetch={false}
              key={product.id}
            >
              <Product className="keen-slider__slide">
                <Image src={product.imageUrl} width={520} height={480} alt="" />
                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>
                  <button
                    className="cart-button"
                    onClick={() => handleAddProductToShoppingCart(product)}
                  >
                    <Handbag size={32} />
                  </button>
                </footer>
              </Product>
            </Link>
          )
        })}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price:
        price.unit_amount &&
        new Intl.NumberFormat('nl-NL', {
          style: 'currency',
          currency: 'EUR',
        }).format(price.unit_amount / 100),
      description: product.description,
      defaultPriceId: price.id,
      numericPrice: price.unit_amount,
    }
  })
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}

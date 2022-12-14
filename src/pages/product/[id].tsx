import Image from 'next/future/image'
import {
  ImageContainer,
  ProductContainer,
  ProductDescriptionContainer,
} from '../../styles/pages/product'

import { GetStaticPaths, GetStaticProps } from 'next'
import { stripe } from '../../lib/stripe'
import Stripe from 'stripe'
import { useRouter } from 'next/router'
import axios from 'axios'
import { useContext, useState } from 'react'
import Head from 'next/head'
import { ShoppingListContext } from '../../contexts/ShoppingListContext'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
    numericPrice: number
  }
}

export default function Product({ product }: ProductProps) {
  const { currentProducts, addNewProduct } = useContext(ShoppingListContext)
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)
  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>Loading...</p>
  }

  function handleAddProductToShoppingCart() {
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
        <title>{`${product.name} | Ignite Shop`}</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image
            src={product.imageUrl}
            width={520}
            height={480}
            alt={''}
          ></Image>
        </ImageContainer>
        <ProductDescriptionContainer>
          <h1>{product.name}</h1>
          <h2>{product.price}</h2>
          <p>{product.description}</p>
          <button
            disabled={isCreatingCheckoutSession}
            onClick={handleAddProductToShoppingCart}
          >
            Add to shopping list
          </button>
        </ProductDescriptionContainer>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  if (!params) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
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
      },
    },
    revalidate: 60 * 60 * 1, // 1hour
  }
}

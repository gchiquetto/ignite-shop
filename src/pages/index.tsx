import Image from 'next/future/image'
import { useKeenSlider } from 'keen-slider/react'
import { HomeContainer, Product } from '../styles/pages/home'

import tshirt1 from '../assets/tshirts/1.png'
import tshirt2 from '../assets/tshirts/2.png'
import tshirt3 from '../assets/tshirts/3.png'

import 'keen-slider/keen-slider.min.css'
import { stripe } from '../lib/stripe'
import { GetServerSideProps } from 'next'

export default function Home(props: []) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={tshirt1.src} width={520} height={480} alt="" />
        <footer>
          <strong>Tshirt X</strong>
          <span>$ 8.00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={tshirt2.src} width={520} height={480} alt="" />
        <footer>
          <strong>Tshirt X</strong>
          <span>$ 8.00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={tshirt3.src} width={520} height={480} alt="" />
        <footer>
          <strong>Tshirt X</strong>
          <span>$ 8.00</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={tshirt3.src} width={520} height={480} alt="" />
        <footer>
          <strong>Tshirt X</strong>
          <span>$ 8.00</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await stripe.products.list()
  console.log(response)
  return {
    props: {
      list: [1, 2, 3],
    },
  }
}

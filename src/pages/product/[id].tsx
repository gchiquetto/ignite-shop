import Image from 'next/future/image'
import {
  ImageContainer,
  ProductContainer,
  ProductDescriptionContainer,
} from '../../styles/pages/product'

import tshirt1 from '../../assets/tshirts/1.png'

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={tshirt1} alt={''}></Image>
      </ImageContainer>
      <ProductDescriptionContainer>
        <h1>Igniter Aboard</h1>
        <h2>€17.90</h2>
        <p>
          The Igniter Aboard T-shirt is a perfect item for those who love
          exploring. The shirt is made from 100% cotton and is equipped with a
          100% polyester mesh back for comfort and breathability.
        </p>
        <button>Buy now</button>
      </ProductDescriptionContainer>
    </ProductContainer>
  )
}

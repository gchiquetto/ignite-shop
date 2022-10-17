import Image from 'next/future/image'
import {
  CardContainer,
  CardContent,
  ImageContainer,
} from '../styles/components/ItemCardCheckout'

import tshirt from '../assets/tshirts/1.png'

export default function ItemCardCheckout() {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={tshirt} width={100} alt="" />
      </ImageContainer>
      <CardContent>
        <h3>Igniter Aboard</h3>
        <strong>€17.90</strong>
        <button className="button_remove">Remove</button>
      </CardContent>
    </CardContainer>
  )
}

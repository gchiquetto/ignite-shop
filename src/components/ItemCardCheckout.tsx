import Image from 'next/future/image'
import { useContext } from 'react'
import { ShoppingListContext } from '../contexts/ShoppingListContext'
import {
  CardContainer,
  CardContent,
  ImageContainer,
} from '../styles/components/ItemCardCheckout'

interface ProductDataType {
  data: {
    name: string
    imageUrl: string
    price: string
    defaultPriceId: string
  }
}

export default function ItemCardCheckout({ data }: ProductDataType) {
  const { removeSelectedProduct } = useContext(ShoppingListContext)

  function handleRemoveProductFromShoppingList() {
    removeSelectedProduct(data)
  }

  return (
    <CardContainer>
      <ImageContainer>
        <Image src={data.imageUrl} width={100} height={100} alt="" />
      </ImageContainer>
      <CardContent>
        <h3>{data.name}</h3>
        <strong>{data.price}</strong>
        <button
          className="button_remove"
          onClick={handleRemoveProductFromShoppingList}
        >
          Remove
        </button>
      </CardContent>
    </CardContainer>
  )
}

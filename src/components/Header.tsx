import Link from 'next/link'
import {
  HeaderContainer,
  ItemsCardContainer,
  QuantityContainer,
  ShoppingListContainer,
  ShoppingListContent,
  SummaryContainer,
} from '../styles/components/Header'
import Image from 'next/future/image'
import logo from '../assets/logo.svg'
import { Handbag, X } from 'phosphor-react'
import ItemCardCheckout from './ItemCardCheckout'
import { useContext, useState } from 'react'
import { ShoppingListContext } from '../contexts/ShoppingListContext'
import axios from 'axios'

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const { currentProducts } = useContext(ShoppingListContext)
  const priceList = currentProducts.map((product) => {
    return product.numericPrice / 100
  })
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const totalValue =
    priceList.length > 0
      ? priceList.reduce((acc, curr) => {
          return (acc += curr)
        })
      : 0

  const formattedTotalPrice = new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
  }).format(totalValue)

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)
      const itemsPriceIdList = currentProducts.map(
        (currentProduct) => currentProduct.defaultPriceId,
      )
      const response = await axios.post('/api/checkout', {
        priceIdList: itemsPriceIdList,
      })

      const { checkoutUrl } = response.data
      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)
      alert('Fail to redirect to checkout')
    }
  }

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logo} alt="" />
      </Link>
      <button className="cart-button" onClick={() => setNavbarOpen(true)}>
        {currentProducts.length > 0 && (
          <QuantityContainer>
            <p>{currentProducts.length}</p>
          </QuantityContainer>
        )}
        <Handbag size={24} />
      </button>
      {navbarOpen && (
        <ShoppingListContainer>
          <button className="close_button" onClick={() => setNavbarOpen(false)}>
            <X size={24} />
          </button>
          <ShoppingListContent>
            <h2>Shopping Cart</h2>
            <ItemsCardContainer>
              {currentProducts.map((product) => (
                <ItemCardCheckout key={product.defaultPriceId} data={product} />
              ))}
            </ItemsCardContainer>
            <SummaryContainer>
              <div>
                <span className="quantity_label">Quantity</span>
                <span>{currentProducts.length} items</span>
              </div>
              <div>
                <strong>Total</strong>
                <strong className="total_price">{formattedTotalPrice}</strong>
              </div>
            </SummaryContainer>
            <button
              disabled={isCreatingCheckoutSession}
              onClick={handleBuyProduct}
              className="checkout_button"
            >
              Checkout
            </button>
          </ShoppingListContent>
        </ShoppingListContainer>
      )}
    </HeaderContainer>
  )
}

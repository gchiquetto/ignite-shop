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

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const { currentProducts } = useContext(ShoppingListContext)

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
              <ItemCardCheckout />
            </ItemsCardContainer>
            <SummaryContainer>
              <div>
                <span className="quantity_label">Quantity</span>
                <span>3 items</span>
              </div>
              <div>
                <strong>Total</strong>
                <strong className="total_price">€ 50.00</strong>
              </div>
            </SummaryContainer>
            <button className="checkout_button">Checkout</button>
          </ShoppingListContent>
        </ShoppingListContainer>
      )}
    </HeaderContainer>
  )
}

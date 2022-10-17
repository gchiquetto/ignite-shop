import { createContext, ReactNode, useReducer } from 'react'
import { ActionTypes } from '../reducers/selectedProducts/actions'
import {
  ProductType,
  selectectProductsReducer,
} from '../reducers/selectedProducts/reducer'

interface ShoppingListContextProviderProps {
  children: ReactNode
}

interface ShoppingListType {
  currentProducts: ProductType[]
  addNewProduct: (productId: ProductType) => void
  removeSelectedProduct: (productId: ProductType) => void
}

export const ShoppingListContext = createContext({} as ShoppingListType)

export function ShoppingListContextProvider({
  children,
}: ShoppingListContextProviderProps) {
  const [selectedProductsState, dispatch] = useReducer(
    selectectProductsReducer,
    { products: [] },
  )

  const currentProducts = selectedProductsState.products

  function addNewProduct(product: ProductType) {
    dispatch({ type: ActionTypes.ADD_PRODUCT, payload: product })
  }

  function removeSelectedProduct(product: ProductType) {
    dispatch({ type: ActionTypes.REMOVE_PRODUCT, payload: product })
  }

  return (
    <ShoppingListContext.Provider
      value={{ currentProducts, addNewProduct, removeSelectedProduct }}
    >
      {children}
    </ShoppingListContext.Provider>
  )
}

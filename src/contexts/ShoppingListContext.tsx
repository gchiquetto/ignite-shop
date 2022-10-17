import { createContext, ReactNode, useReducer } from 'react'
import { ActionTypes } from '../reducers/selectedProducts/actions'
import { selectectProductsReducer } from '../reducers/selectedProducts/reducer'

interface ShoppingListContextProviderProps {
  children: ReactNode
}

interface ShoppingListType {
  currentProducts: string[]
  addNewProduct: (productId: string) => void
  removeSelectedProduct: (productId: string) => void
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

  function addNewProduct(productId: string) {
    console.log(currentProducts)
    dispatch({ type: ActionTypes.ADD_PRODUCT, payload: productId })
  }

  function removeSelectedProduct(productId: string) {
    dispatch({ type: ActionTypes.REMOVE_PRODUCT, payload: productId })
  }

  return (
    <ShoppingListContext.Provider
      value={{ currentProducts, addNewProduct, removeSelectedProduct }}
    >
      {children}
    </ShoppingListContext.Provider>
  )
}

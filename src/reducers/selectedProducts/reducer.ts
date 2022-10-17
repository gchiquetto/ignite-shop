import { ActionTypes } from './actions'

export interface ProductType {
  name: string
  imageUrl: string
  price: string
  defaultPriceId: string
}

interface SelectedProductsState {
  products: ProductType[]
}

interface SelectedProductAction {
  type: ActionTypes
  payload: ProductType
}

export function selectectProductsReducer(
  state: SelectedProductsState,
  action: SelectedProductAction,
) {
  const { type, payload } = action
  switch (type) {
    case ActionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, payload],
      }

    case ActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products.filter(
            (product) => product.defaultPriceId !== payload.defaultPriceId,
          ),
        ],
      }
    default:
      return state
  }
}

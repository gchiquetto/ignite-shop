import { ActionTypes } from './actions'

interface SelectedProductsState {
  products: string[]
}

interface SelectedProductAction {
  type: ActionTypes
  payload: string
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
        products: [...state.products.filter((product) => product !== payload)],
      }
    default:
      return state
  }
}

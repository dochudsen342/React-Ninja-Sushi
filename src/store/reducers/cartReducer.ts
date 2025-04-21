import { CartProductItem } from "../../types/types"
import { CartTypeAction } from "../varibalse"



export interface CartState {
  cart: CartProductItem[]
}

interface CartAddAction {
  type: CartTypeAction.ADD_PRODUCT
  payload: CartProductItem
}
interface CartRemoveAction {
  type: CartTypeAction.REMOVE_PRODUCT
  payload: CartProductItem
}

type CartAction = CartAddAction | CartRemoveAction

const initialState: CartState = {
  cart: []
}

export const cartReducer = (state: CartState = initialState, action: CartAction): CartState => {
  const cartItem = action.payload
  const existingItem = state.cart.find(item => item.name === cartItem.name)
  switch (action.type) {
    case CartTypeAction.ADD_PRODUCT: {
      if (existingItem) {
        return {
          ...state, cart:
            state.cart.map((item) => {
              return item.name === cartItem?.name ? { ...item, quantity: item.quantity + 1 } : item
            })
        }

      } else {
        return {
          ...state, cart: [...state.cart, { ...cartItem, quantity: 1 }]
        }
      }
    }

    case CartTypeAction.REMOVE_PRODUCT: {
      if (existingItem) {
        const currentQuantity = existingItem.quantity - 1
        if (currentQuantity > 0) {
          return { ...state, cart: state.cart.map(item => item.name === cartItem?.name ? { ...item, quantity: item.quantity - 1 } : item) }
        } else {
          return { ...state, cart: state.cart.filter(item => item.name !== cartItem.name) }
        }
      }
      return state
    }

    default:
      return state
  }
}



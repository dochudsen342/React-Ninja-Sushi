import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProductItem, ProductCardItem } from "../../types/types";
import { CartTypeAction } from "../varibalse";



export interface CartState {
    cart: CartProductItem[]
}

type CartActionProduct = CartProductItem | ProductCardItem


const initialState: CartState = {
    cart: []

}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<CartActionProduct>) {
            const cartItem = action.payload
            const currentCartItem = state.cart.find(item => item.name === cartItem.name)
            console.log(currentCartItem)
            if (currentCartItem) {
                currentCartItem.quantity += 1
            } else {
                state.cart.push({ ...cartItem, quantity: 1 })
            }
        },
        removeProduct(state, action: PayloadAction<CartActionProduct>) {
            const cartItem = action.payload
            const currentCartItem = state.cart.find(item => item.name === cartItem.name)

            if (currentCartItem) {
                if (currentCartItem.quantity === 1) {
                    state.cart = state.cart.filter(item => item.name !== cartItem.name)
                } else {
                    currentCartItem.quantity -= 1
                }
            }
        },

        deleteProduct(state, action: PayloadAction<CartActionProduct>) {
            const cartItem = action.payload
            state.cart = state.cart.filter(item => item.name !== cartItem.name)
        }
    }
})

export const cartReducer = cartSlice.reducer
export const { addProduct, removeProduct, deleteProduct } = cartSlice.actions
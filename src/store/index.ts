import {configureStore } from '@reduxjs/toolkit'
import { cartReducer, CartState } from './reducers/cartReducer'

export interface RootState {
    cart:CartState
}

export const store = configureStore<RootState,any,any>({
    reducer:{
        cart:cartReducer
    }
})

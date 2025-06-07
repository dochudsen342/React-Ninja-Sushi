import {configureStore } from '@reduxjs/toolkit'
import {  CartState } from './reducers/cartReducer'
import { IsModalState } from '../hooks/UseIsModal'
import { modalReducer } from './slices/ModalSlice'
import { cartReducer } from './slices/CartSlice'




export interface RootState {
    modal:IsModalState,
    cart:CartState,
}

export const store = configureStore<RootState,any,any>({
    reducer:{
        modal:modalReducer,
        cart:cartReducer,
    }
})


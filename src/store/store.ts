import {configureStore } from '@reduxjs/toolkit'
import { cartReducer, CartState } from './reducers/cartReducer'
import ModalReducer from './reducers/ModalReducer'
import { IsModalState } from '../hooks/UseIsModal'
import { modalReducer } from './slices/ModalSlice'




export interface RootState {
    cart:CartState,
    modal:IsModalState
}

export const store = configureStore<RootState,any,any>({
    reducer:{
        cart:cartReducer,
        modal:modalReducer,
    }
})


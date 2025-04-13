import {configureStore } from '@reduxjs/toolkit'
import { addProductCart } from './reducers/addProductCart'

export const initialState = []
export const store = configureStore({
    reducer:{
        addProductCart:addProductCart
    }
})
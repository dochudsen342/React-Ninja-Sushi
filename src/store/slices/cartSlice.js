import { createSlice } from "@reduxjs/toolkit";
import { addProductCart } from "../reducers/addProductCart";
import { CartProductItem } from "../../types/types";

const store = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addCartItem:addProductCart,
    }
})
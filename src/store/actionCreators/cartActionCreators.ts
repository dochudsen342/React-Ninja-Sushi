import { ProductCardItem } from "../../types/types"
import { CartTypeAction } from "../varibalse"



export const addProcuctCartCreator = (cardItem:ProductCardItem) => ({type:CartTypeAction.ADD_PRODUCT,payload:cardItem})
export const removeProductCreator = (cartItem:ProductCardItem) => ({type:CartTypeAction.REMOVE_PRODUCT,payload:cartItem})
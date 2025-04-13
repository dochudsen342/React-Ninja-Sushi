import { CartProductItem } from "../../types/types";
import { CartActionType } from "../varibalse";

export const removeProductCreator = (cartItem) => ({type:REMOVE_PRODUCT,payload:cartItem})


import { CartProductItem } from "../../types/types";
import { CartActionType } from "../varibalse";

export const addProcuctCartCreator = (cartItem:CartProductItem) => ({type:CartActionType.ADD_PRODUCT,payload:cartItem})
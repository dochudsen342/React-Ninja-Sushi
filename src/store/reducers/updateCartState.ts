import { Reducer } from "redux"
import { CartProductItem } from "../../types/types"
import { CartActionType } from "../type";


interface AddProductAction {
    type: typeof CartActionType.ADD_PRODUCT;
    payload: CartProductItem;
  }
  
  interface RemoveProductAction {
    type: typeof CartActionType.REMOVE_PRODUCT;
    payload: number; 
  }

type CartActionTypes = AddProductAction | RemoveProductAction
type CartState = CartProductItem[] 
const initialState: CartState = []

export const addProductCart:Reducer = (state = initialState,action) =>{
    
}


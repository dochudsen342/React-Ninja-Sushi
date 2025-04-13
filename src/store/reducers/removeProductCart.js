import { initialState } from "../index.js";

export const removeProductCart = (state = initialState,action) =>{
    const cartItem = action.payload
    const existingProduct = state.find(item => item.name === action.payload.name)
    if(existingProduct){
        const currentQantity = cartItem.qantity - 1
        if(currentQantity > 1){
            return state.map(item => {
                item.name === cartItem.name ? {...item,qantity:currentQantity} : item
            })
        }else{
            return state.filter(item => item.name !== cartItem.name)
        }
    }
}
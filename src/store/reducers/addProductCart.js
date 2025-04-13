import { initialState } from "../index.js"



export const addProductCart = (state = initialState,action) =>{
      const itemInCart = state.items.find(item => item.name === action.payload.name)
        if(itemInCart){
         return itemInCart.qantity++
        }else{
          return state.items.push({...action.payload,qantity:1})
        }    
}


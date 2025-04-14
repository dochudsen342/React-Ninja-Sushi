import { ADD_PRODUCT, REMOVE_PRODUCT } from "../varibalse"

const initialState = []


export const cartReducer = (state = initialState,action) =>{
  const cartItem = action.payload
  const existingItem = state.find(item => item.name === cartItem.name)
  switch(action.type){
    case ADD_PRODUCT:{
      if(existingItem){
        return state.map((item) =>{
         return item.name === cartItem.name ? {...item,qantity:item.qantity + 1}:item
        })
      }else{
        return [...state,{...cartItem,qantity:1}]
      }    
    }
      
    case REMOVE_PRODUCT:{
      if(existingItem){
        const currentQantity = existingItem.qantity - 1
        if(currentQantity > 0){
            return state.map(item => {
               return item.name === cartItem.name ? {...item,qantity:currentQantity} : item
            })
        }else{
            return state.filter(item => item.name !== cartItem.name)
        }
    }
    }
      default:
        return state
  }
      
}


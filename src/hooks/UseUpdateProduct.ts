// import { useCallback, useContext, useEffect} from 'react'
// import { CartContext } from '../context'
// import { CartProductItem, ProductCardItem } from '../types/types'



// interface catContext {
//   cart:CartProductItem[],
//   setCart:Function
// }

//  export const useUpdateCart = (cardItem:ProductCardItem) =>{ 
//   const {cart,setCart} = useContext<catContext>(CartContext)
  
//   useEffect(() =>{
//    localStorage.setItem('cart',JSON.stringify(cart))
//   },[cart])
//   const updateCartItem = useCallback((change:number)=>{
//           setCart((prevCart:CartProductItem[]) =>{
//             const currentProductIndex = prevCart.findIndex(item => item.name === cardItem.name)
//           //  console.log('предыдущие',prevCart)
//           //  console.log('текущие',cart)
//             if(change === 0) return prevCart.filter(item => item.name !== cardItem.name)
     
//             if(currentProductIndex !== -1){
//                 const updateCart = [...prevCart]
//                 const newQantity = updateCart[currentProductIndex].qantity + change

//                 if(newQantity > 0){
//                     updateCart[currentProductIndex] = {
//                       ...updateCart[currentProductIndex],qantity:newQantity
//                     }
//                 }else{
//                   updateCart.splice(currentProductIndex,1)
//                   return updateCart
//                 }
                
//                 return updateCart 
//             } else if (change > 0) {
//               return [...prevCart, { ...cardItem, qantity: change }];
//             }
  
//             return prevCart
 
//           })
//       },[cardItem,setCart])
//       return {updateCartItem}//посмотреть как вызывается этот хук при ререндере(вызывается ли хук useUpdate полностью или только возвращаемая функция отрабатывает)
//  } 
export default {}
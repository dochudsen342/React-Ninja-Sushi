import { useCallback, useContext, useEffect, useMemo} from 'react'
import { CartContext } from '../context'





 export const useUpdateCart = (cardItem) =>{ 
  const {cart,setCart} = useContext(CartContext)
  
  useEffect(() =>{
   localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])
  const updateCartItem = useCallback((change) =>{
          setCart((prevCart) =>{
            const currentProductIndex = prevCart.findIndex(item => item.name === cardItem.name)
          //  console.log('предыдущие',prevCart)
          //  console.log('текущие',cart)
            if(change === 'remove') return prevCart.filter(item => item.name !== cardItem.name)
     
            if(currentProductIndex !== -1){
                const updateCart = [...prevCart]
                const newQantity = updateCart[currentProductIndex].qantity + change

                if(newQantity > 0){
                    updateCart[currentProductIndex] = {
                      ...updateCart[currentProductIndex],qantity:newQantity
                    }
                }else{
                  updateCart.splice(currentProductIndex,1)
                  return updateCart
                }
                
                return updateCart 
            } else if (change > 0) {
              return [...prevCart, { ...cardItem, qantity: change }];
            }
  
            return prevCart
 
          })
      },[cardItem,setCart])
      return {updateCartItem}//посмотреть как вызывается этот хук при ререндере(вызывается ли хук useUpdate полностью или только возвращаемая функция отрабатывает)
 } 

























// const useCategory = (sortNameState)  =>{
   
//     const [categories, setCategories] = useState([]);

//     useEffect( () =>{
//         const categoriesList = (sortNameState) =>
//             [
//                 {id:'rolls',nameCategories:'Роллы',icon:<Rolls sortName={sortNameState}/>,},
//                 {id:'sushi',nameCategories:'Суши',icon:<Sushi sortName={sortNameState}/>},
//                 {id:'sets',nameCategories:'Сеты',icon:<Sets sortName={sortNameState}/>},
//                 {id:'bowls',nameCategories:'Боулы',icon:<Bowls sortName={sortNameState}/>},
//                 {id:'drinks',nameCategories:'Напитки',icon:<Drinks sortName={sortNameState}/>},
//                 {id:'sauces',nameCategories:'Соусы',icon:<Sauces sortName={sortNameState}/>},
//                 {id:'unknown',nameCategories:'Неизвестно',icon:<Unknown sortName={sortNameState}/>},
//                 {id:'unknownTwo',nameCategories:'Неизвестно',icon:<Unknown sortName={sortNameState}/>},
//             ]
    
//         setCategories(categoriesList(sortNameState))
//    },[sortNameState])

//    return categories

// }

// export default useCategory
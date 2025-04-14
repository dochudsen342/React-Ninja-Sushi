import {useCallback} from 'react'
import AddedCartProduct from '../../AddedProduct/AddedCartProduct'
import cl from './Cart.module.css'
import { CartProductItem } from '../../../types/types.js'
import { useSelector } from 'react-redux'


const CartNotEmpty = () => {
  const cart = useSelector((state:any) => state.cartProduct)
 
     const countTotalPrice = useCallback( () =>{
          const totalPrice = cart.reduce((acc:number,product:CartProductItem) => {
            return acc + product.qantity * product.price 
          },0)     
          return totalPrice
     },[cart])
     

  return (
    <>
    <div className={cl.basket__product_content}>  
        {cart.map((product:CartProductItem) => <AddedCartProduct key={product.name} cartItem={product}/>)}
    </div>
    <div className={cl.basket__footer}>
        <div className={cl.total__price}>
            <span>Итого:</span>
            <p>{countTotalPrice()} руб</p>
        </div>
        <button className={cl.footer__btn}>Оформить заказ</button>
    </div>
  </>
  )
}

export default CartNotEmpty

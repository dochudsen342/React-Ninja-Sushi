import {useCallback} from 'react'
import AddedCartProduct from '../../AddedProduct/AddedCartProduct'
import cl from './Cart.module.css'
import { CartProductItem } from '../../../types/types.js'
import { useTypedSelector } from '../../../hooks/useTypedSelector'


const CartNotEmpty = () => {
  const cart = useTypedSelector(state => state.cart.cart)
  
     const countTotalPrice = useCallback( () =>{
          const totalPrice = cart.reduce((acc:number,product:CartProductItem) => {
            return acc + product.quantity * product.price 
          },0)     
          return totalPrice
     },[cart])

  return (
    <>
    <div className={cl.basket__product_content}>  
        {cart && cart.map((product:CartProductItem) => <AddedCartProduct key={product.name} cartItem={product}/>)}
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

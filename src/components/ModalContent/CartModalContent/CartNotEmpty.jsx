import React,{useCallback, useContext, useId} from 'react'
import AddedBasketProduct from '../../AddedProduct/AddedBasketProduct.jsx'
import cl from './Cart.module.css'
import { CartContext } from '../../../context/index.js'


const CartNotEmpty = () => {
    const {cart} = useContext(CartContext)
     const countTotalPrice = useCallback( () =>{
          const totalPrice = cart.reduce((acc,product) => {
            return acc + product.qantity * product.price 
          },0)     
          return totalPrice
     },[cart])
     

  return (
    <>
    <div className={cl.basket__product_content}>  
        {cart.map(product => <AddedBasketProduct key={product.name} cardItem={product}/>)}
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

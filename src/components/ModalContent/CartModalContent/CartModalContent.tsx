import React, { FC, useContext } from 'react'
import EmptyCart from './EmptyCart.jsx'
import cl from './Cart.module.css'
import CartNotEmpty from './CartNotEmpty.jsx'
import { CartContext } from '../../../context/index.js'
import { IsModalState } from '../../../hooks/UseIsModal.js'

interface CartModalContent{
  title?:string,
  setIsModal:(modalState:IsModalState) => void

}
const CartModalContent:FC<CartModalContent> = ({title = 'Ваш заказ',setIsModal}) => {
  const {cart} = useContext(CartContext)
  const isEmpty = !cart || cart.length === 0;
  
  return (
    <div className={cl.basket__content}>
      <div className={cl.modal__content_title}>
          <span className={cl.title}>{title}</span>
          <button onClick={() => setIsModal({modalBasket:false,modalNotify:false})} className={cl.close__btn}></button>
      </div>
        {isEmpty? <EmptyCart/> : 
          <CartNotEmpty/>
        }
    </div>
  )
}

export default CartModalContent

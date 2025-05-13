import { FC} from 'react'
import EmptyCart from './EmptyCart.jsx'
import cl from './Cart.module.css'
import CartNotEmpty from './CartNotEmpty'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import {  closeModal } from '../../../store/slices/ModalSlice'

interface CartModalContent{
  title?:string,
}

const CartModalContent:FC<CartModalContent> = ({title = 'Ваш заказ'}) => {
  const cart = useTypedSelector(state => state.cart.cart)
  const dispatch = useDispatch()
  const isEmpty = !cart || cart.length === 0;
  
  return (
    <div className={cl.basket__content}>
      <div className={cl.modal__content_title}>
          <span className={cl.title}>{title}</span>
          <button onClick={() => dispatch(closeModal())} className={cl.close__btn}></button>
      </div>
        {isEmpty? <EmptyCart/> : 
          <CartNotEmpty/>
        }
    </div>
  )
}

export default CartModalContent

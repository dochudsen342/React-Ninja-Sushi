import React, { FC, useContext } from 'react'
import cl from './TotalItemCart.module.css'
import { CartContext } from '../../../context'
import { CartProductItem } from '../../../types/types'
const MyCountTotalItemCart:FC = () => {
    const {cart} = useContext(CartContext)
    const totalItemCart:number = cart.length === 0 ? false : cart.reduce((acc:number,item:CartProductItem)=>acc += item.qantity,0)
  return (
    <>
        {totalItemCart && <div className={cl.total__item__cart}>
            {totalItemCart}
        </div>}
    </>
    
  )
}

export default MyCountTotalItemCart

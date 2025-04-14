import React, { FC, useContext } from 'react'
import cl from './TotalItemCart.module.css'
import { CartContext } from '../../../context'
import { CartProductItem } from '../../../types/types'
import { useSelector } from 'react-redux'
const MyCountTotalItemCart:FC = () => {
    const cart = useSelector((state:any) => state.cartProduct)
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

import { FC } from 'react'
import cl from './MyCountProduct.module.css'
import { useUpdateCart } from '../../../hooks/UseUpdateProduct'
import { ProductCardItem } from '../../../types/types'

interface CountProductProps {
  qantity:number,
  cardItem:ProductCardItem
}

const MyCountProduct:FC<CountProductProps> = ({qantity,cardItem}) => {
  const {updateCartItem} = useUpdateCart(cardItem)
  
    return (
    <div className={cl.counter}>
        <button onClick={() => {updateCartItem(-1) }} className={cl.decrement}></button>
        <span className={cl.value}>{qantity}</span>
        <button onClick={() => {updateCartItem(1)}} className={cl.increment}></button>
    </div>
  )
}

export default MyCountProduct

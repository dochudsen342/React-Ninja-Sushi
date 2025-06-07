import { FC } from 'react'
import cl from './MyCountProduct.module.css'
import { ProductCardItem } from '../../../types/types'
import { useAction } from '../../../hooks/useAction'
import { useDispatch } from 'react-redux'
import { addProduct, removeProduct } from '../../../store/slices/CartSlice'


interface CountProductProps {
  qantity:number,
  cardItem:ProductCardItem
}

const MyCountProduct:FC<CountProductProps> = ({qantity,cardItem}) => {
  const dispatch = useDispatch()
  
    return (
    <div className={cl.counter}>
        <button onClick={() => {dispatch(removeProduct(cardItem))}} className={cl.decrement}></button>
        <span className={cl.value}>{qantity}</span>
        <button onClick={() => {dispatch(addProduct(cardItem))}} className={cl.increment}></button>
    </div>
  )
}

export default MyCountProduct

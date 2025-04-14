import { FC } from 'react'
import cl from './MyCountProduct.module.css'
import { ProductCardItem } from '../../../types/types'
import { useDispatch } from 'react-redux'
import { removeProductCreator } from '../../../store/actionCreators/removeProductCreator'
import { addProcuctCartCreator } from '../../../store/actionCreators/addProductCreator'

interface CountProductProps {
  qantity:number,
  cardItem:ProductCardItem
}

const MyCountProduct:FC<CountProductProps> = ({qantity,cardItem}) => {
  const dispatch = useDispatch()
  
    return (
    <div className={cl.counter}>
        <button onClick={() => {dispatch(removeProductCreator(cardItem)) }} className={cl.decrement}></button>
        <span className={cl.value}>{qantity}</span>
        <button onClick={() => {dispatch(addProcuctCartCreator(cardItem))}} className={cl.increment}></button>
    </div>
  )
}

export default MyCountProduct

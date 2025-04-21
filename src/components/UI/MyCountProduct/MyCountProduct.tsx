import { FC } from 'react'
import cl from './MyCountProduct.module.css'
import { ProductCardItem } from '../../../types/types'
import { useDispatch } from 'react-redux'
import { addProcuctCartCreator, removeProductCreator } from '../../../store/actionCreators/cartActionCreators'
import { useAction } from '../../../hooks/useAction'


interface CountProductProps {
  qantity:number,
  cardItem:ProductCardItem
}

const MyCountProduct:FC<CountProductProps> = ({qantity,cardItem}) => {
  const {addProcuctCartCreator,removeProductCreator} = useAction()
  
    return (
    <div className={cl.counter}>
        <button onClick={() => {removeProductCreator(cardItem)}} className={cl.decrement}></button>
        <span className={cl.value}>{qantity}</span>
        <button onClick={() => {addProcuctCartCreator(cardItem)}} className={cl.increment}></button>
    </div>
  )
}

export default MyCountProduct

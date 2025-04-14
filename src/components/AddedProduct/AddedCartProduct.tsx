import  { FC } from 'react'
import cl from './AddedProduct.module.css'
import { CartProductItem} from '../../types/types'
import { useDispatch } from 'react-redux'
import { addProcuctCartCreator } from '../../store/actionCreators/addProductCreator'
import { removeProductCreator } from '../../store/actionCreators/removeProductCreator'

interface AddedCartProductProps{
  cartItem:CartProductItem
}
const AddedCartProduct:FC<AddedCartProductProps> = ({cartItem}) => {
  const dispatch = useDispatch()
   const {icon,name,weight,price,qantity} = cartItem

  return (
      <div className={cl.product__basket_card}>
        <div className={cl.product__info}>
          <img width={58} height={47} src={icon} alt="" />
          <div className={cl.info__weight__name}>
              <p className={cl.name}>{name}</p>
              <p className={cl.weight}>{weight > 10?`${weight} г`:`${weight} л`}</p>
          </div>
        </div>
        <div className={cl.product__value}>
          <span className={cl.product__price}>{price} руб</span>
          <div className={cl.product__count}>
            <button onClick={() =>{dispatch(removeProductCreator(cartItem))}} className={cl.decrement}></button>
            <span className={cl.qantity}>{qantity}</span>
            <button onClick={() =>{dispatch(addProcuctCartCreator(cartItem))}} className={cl.increment}></button>
          </div>
        </div>
        <button onClick={() =>{dispatch(removeProductCreator(cartItem))}} className={cl.remove__product}></button>
      </div>
  )
}

export default AddedCartProduct

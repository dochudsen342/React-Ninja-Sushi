import  { FC } from 'react'
import cl from './AddedProduct.module.css'
import { CartProductItem} from '../../types/types'
import { useDispatch } from 'react-redux'
import { addProduct, deleteProduct, removeProduct } from '../../store/slices/cartSlice'


interface AddedCartProductProps{
  cartItem:CartProductItem
}
const AddedCartProduct:FC<AddedCartProductProps> = ({cartItem}) => {
  const {icon,name,weight,price,quantity} = cartItem
  
  const dispatch = useDispatch()
   

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
            <button onClick={() =>{dispatch(removeProduct(cartItem))}} className={cl.decrement}></button>
            <span className={cl.qantity}>{quantity}</span>
            <button onClick={() =>{dispatch(addProduct(cartItem))}} className={cl.increment}></button>
          </div>
        </div>
        <button onClick={() =>{dispatch(deleteProduct(cartItem))}} className={cl.remove__product}></button>
      </div>
  )
}

export default AddedCartProduct

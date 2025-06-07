import { FC} from 'react'
import cl from './TotalItemCart.module.css'
import { CartProductItem } from '../../../types/types'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

const MyCountTotalItemCart:FC = () => {
    const cart = useTypedSelector(state => state.cart.cart)
    const totalItemCart:number | boolean =  cart && cart.length  === 0 ? false : cart?.reduce((acc:number,item:CartProductItem)=>acc += item.quantity,0)
    console.log(cart.length)
  return (
    <>
        {totalItemCart && <div className={cl.total__item__cart}>
            {totalItemCart}
        </div>}
    </>
    
  )
}

export default MyCountTotalItemCart

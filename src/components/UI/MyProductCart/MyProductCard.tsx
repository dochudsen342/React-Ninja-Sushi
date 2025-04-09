import React, { FC, memo, useContext, useMemo } from 'react'
import cl from './ProductCard.module.css'
import MyCountProduct from '../MyCountProduct/MyCountProduct'
import { useUpdateCart } from '../../../hooks/UseUpdateProduct'
import { CartContext } from '../../../context/index.js'
import { CartProductItem, ProductCardItem } from '../../../types/types'

interface CardItem {
  cardItem:ProductCardItem
}
const MyProductCard:FC <CardItem> = ({cardItem}) => {
    const {cart} = useContext(CartContext)
   const {updateCartItem} = useUpdateCart(cardItem)
   const {icon,name,weight,price} = cardItem
   
   
   const qantity:number = useMemo(() =>{
       const productInCart:CartProductItem = cart.find((item:CartProductItem) => item.name === cardItem.name);
       return productInCart ? productInCart.qantity : 0;
    },[cart])
  
  return (
    <article className={cl.card}>
        <div className={cl.card__content}>
          <div className={cl.card__visual_content}><img width={331} height={290} src={icon} alt="" /></div>
          <div className={cl.card__description}>
            <span className={cl.card__name}>{name}</span>
            <p className={cl.card__weight}>{weight > 10?`${weight} г`:`${weight} л`}</p>
            <p className={cl.card__subtitle}>Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло</p>
          </div>
        </div>
        <div className={cl.card__bottom_content}>
          <div className={cl.card__price}>
              <span className={cl.card__value}>{price}</span>
              <span className={cl.card__currency}>руб</span>
          </div>
             {!qantity ? <div className={cl.card__options}>
                              <button className={cl.card__btn_favorite}></button>
                              <button onClick={() => {
                              updateCartItem(1)
                              }} 
                              className={cl.card__btn_add_basket}
                              >
                              </button>
                        </div>// вынести в отдельный компонент?(не уверен куда именно)
               : <MyCountProduct cardItem={cardItem} qantity = {qantity} />}
            </div>
    </article>
  )
}
 
export default MyProductCard

/*  */
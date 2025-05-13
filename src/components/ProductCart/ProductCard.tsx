import { FC, memo, useMemo, useState } from 'react'
import cl from './ProductCard.module.css'
import MyCountProduct from '../UI/MyCountProduct/MyCountProduct'
import { CartProductItem, ProductCardItem } from '../../types/types'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useAction } from '../../hooks/useAction'

interface CardItem {
  cardItem: ProductCardItem
}

type Quantity = CartProductItem | number | undefined

const MyProductCard: FC<CardItem> = memo(({ cardItem }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const { addProcuctCartCreator } = useAction()
  const cart = useTypedSelector(state => state.cart.cart)
  const rootFavoriteBtnClass = isFavorite ? cl.card__btn_favorite_active : cl.card__btn_favorite
  const { icon, name, weight, price } = cardItem
  const qantity: number = useMemo(() => {
    const productInCart: Quantity = cart.find((item: CartProductItem) => item.name === cardItem.name);
    const newQuantity = productInCart ? productInCart.quantity : 0;
    return newQuantity
  }, [cart])

  return (
    <article className={cl.card}>
      <div className={cl.card__content}>
        <div className={cl.card__visual_content}><img width={331} height={290} src={icon} alt="" /></div>
        <div className={cl.card__description}>
          <span className={cl.card__name}>{name}</span>
          <p className={cl.card__weight}>{weight > 10 ? `${weight} г` : `${weight} л`}</p>
          <p className={cl.card__subtitle}>Нори, рис, японский майонез, бальзамик, трюфельная сальса, кунжутное масло</p>
        </div>
      </div>
      <div className={cl.card__bottom_content}>
        <div className={cl.card__price}>
          <span className={cl.card__value}>{price}</span>
          <span className={cl.card__currency}>руб</span>
        </div>
        {!qantity ? <div className={cl.card__options}>
          <button onClick={() => setIsFavorite(!isFavorite)} className={rootFavoriteBtnClass}></button>
          <button onClick={() => {
            addProcuctCartCreator(cardItem)
          }}
            className={cl.card__btn_add_basket}
          >
          </button>
        </div>
          : <MyCountProduct cardItem={cardItem} qantity={qantity} />}
      </div>
    </article>
  )
})

export default MyProductCard

/*  */
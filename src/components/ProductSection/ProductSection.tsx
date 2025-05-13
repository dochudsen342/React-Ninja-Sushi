import {FC} from 'react'
import cl from './ProductSection.module.css'
import MyProductCard from '../ProductCart/ProductCard'
import {Link} from 'react-router-dom'
import { ProductCardItem } from '../../types/types'

interface ProductCardList {
  cardList:ProductCardItem[]
}
const ProductSection:FC<ProductCardList> = ({cardList}) => {
  
  return (
    <div className={cl.product__section}>
        <div className={cl.title}>
            <span>{cardList[0].title}</span>
            <Link to={`/${cardList[0].categoryId}`}><button>Смотреть все</button></Link>
        </div>
        <div className={cl.content}>
           {cardList.map((cardItem:ProductCardItem) =>
            <MyProductCard key={cardItem.name} cardItem={cardItem}/>
            )}
        </div>
    </div>
  )
}
export default ProductSection

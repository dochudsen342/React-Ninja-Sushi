import {FC, useState } from 'react'
import cl from './CategoryProductSection.module.css'
import MyProductCard from '../UI/MyProductCart/MyProductCard'
import Sort from '../Sort/Sort'
import { ProductCardItem } from '../../types/types'

interface CategoryProductSectionProps {
  cardList:ProductCardItem[],
}
const CategoryProductSection:FC<CategoryProductSectionProps> = ({cardList}) => {
  const [fillterCardList,setFilterCardList] = useState<ProductCardItem[]>(cardList)
  
  
  return (
    <div className={cl.product__category__section}>
        <div className={cl.title}>
            <span>{cardList[0].title}</span>
        </div>
        <div className={cl.filter__category}>
            <Sort 
            cardList={cardList} 
            setFilterCardList = {setFilterCardList} 
            fillterCardList ={fillterCardList}
            />
        </div>
        <div className={cl.content}>
          {fillterCardList.length < 0? <span className={cl.empty__content}>Товары не найдены</span>:fillterCardList.map(cardItem =>
            <MyProductCard key={cardItem.name} cardItem={cardItem}/>
            )}
        </div>
    </div>
  )
}

export default CategoryProductSection

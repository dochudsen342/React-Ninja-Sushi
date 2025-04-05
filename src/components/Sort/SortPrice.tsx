import React, { useState,memo, FC} from 'react'
import cl from './Sort.module.css'
import { useSortPrice } from '../../hooks/useSortPrice'
import { ProductCardItem, sortCategoryState } from '../../types/types'

interface SortState{
  sortName:sortCategoryState,
  setSortName:(sortName:sortCategoryState) => void
}
interface SortPriceProps{
  fillterCardList:ProductCardItem[],
  setFilterCardList:(cardList:ProductCardItem[]) => void,
  sortState:SortState
}
const SortPrice:FC<SortPriceProps> = memo(({fillterCardList,setFilterCardList,sortState}) => {
    const {sortName,setSortName} = sortState
    const [isVisible,setIsVisible] = useState(false)    
    const rootClass = isVisible ? [cl.sort__price__list,cl.sort__price__active].join(' '): cl.sort__price__list
    useSortPrice(sortName.sort,fillterCardList,setFilterCardList)

  return (
    <div className={cl.sortPrice__container}>
        <div onClick={() => {setIsVisible(!isVisible)}}  className={cl.sort__price__content}>
            <span className={cl.sort__price__name}>{sortName.sortName}</span>
            <button className={cl.show__select__btn}></button>
        </div>
        <div className={rootClass}>
            <span onClick={(e) => {
              const target = e.currentTarget
              setSortName({sort:'lowToHight',sortName:target.innerText})
              setIsVisible(false)
            }} 
            className={cl.sort__price__item}
            >От дешевых к дорогим
            </span>
            <span onClick={(e) => {
               const target = e.currentTarget
               setSortName({sort:'hightToLow',sortName:target.innerText})
               setIsVisible(false)
            }} 
            className={cl.sort__price__item}
            >От дорогих к дешевым</span>
        </div>
    </div>
  )
})

export default SortPrice

import { FC, memo,useState } from 'react'
import cl from './Sort.module.css'
import { sortCategory } from '../../ProductData/sortCategory'
import SortCategory from './SortCategory'
import SortPrice from './SortPrice'
import { useSortCategory } from '../../hooks/useSortCategory'
import { ProductCardItem, sortCategoryState } from '../../types/types'


interface SortProps{
  cardList:ProductCardItem[],
  setFilterCardList: (cardList:ProductCardItem[]) => void
  fillterCardList:ProductCardItem[],
}

const Sort:FC<SortProps> = memo(({cardList,setFilterCardList,fillterCardList}) => {
 const [activeButton,setActiveButton] = useState<string>('Все')
 const [sortName,setSortName] = useState<sortCategoryState>({
       sort:'',
       sortName:'Показать полностью'})
 const {sortByCategory} = useSortCategory(setSortName)
 
  return (
    <article className={cl.sort__container}>
        <div className={cl.sort__category}>
            {sortCategory.map(sort => <SortCategory 
            className={`${sort.sortName === activeButton ? 
            [cl.sort__btn, cl.sort__btn__active].join(' ') : cl.sort__btn}`} 
            onClick={() =>{
              setActiveButton(sort.sortName)
              sortByCategory(cardList,setFilterCardList,sort.id)
            }}  
            key={sort.id} 
            sortName = {sort.sortName}
            />
            )}
        </div>
        <div className={cl.sort__price}>
          <SortPrice sortState = {{sortName,setSortName}} fillterCardList = {fillterCardList}  setFilterCardList = {setFilterCardList}/>
        </div>
    </article>
  )
})

export default Sort

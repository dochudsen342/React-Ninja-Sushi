import { useCallback } from "react"
import { ProductCardItem, sortCategoryList, sortCategoryState } from "../types/types"

type useSortCategory = (sortState:sortCategoryState) => void
type setFilter = (cardList:ProductCardItem[]) => void

export const useSortCategory = (setSortName:useSortCategory) =>{
    const sortByCategory = useCallback((cardList:ProductCardItem[],setFilterCartList:setFilter,sortCategory:sortCategoryList['id']) =>{
        setSortName({
            sort:'',
            sortName:'Показать полностью'})
        if(sortCategory === 'all'){
           return setFilterCartList([...cardList])
        }
        setFilterCartList(cardList.filter(card => card.detail === sortCategory))
    },[setSortName])

    return {sortByCategory}
}
import {useCallback, useEffect} from "react"

export const useSortPrice = (sortName,fillterCardList,setFilterCardList) =>{
  
      const sortingPriceCardList = useCallback(() =>{
            if(sortName === 'lowToHight'){
              setFilterCardList([...fillterCardList].sort((a,b) => a.price - b.price))
            }else if(sortName === 'hightToLow'){
              setFilterCardList([...fillterCardList].sort((a,b) => b.price - a.price))
            }
          },[sortName])
          
      useEffect(() =>{
            sortingPriceCardList()
          },[sortName])
       
}
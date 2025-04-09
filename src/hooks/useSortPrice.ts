import {Dispatch, ReactElement, SetStateAction, useCallback, useEffect} from "react"
import { ProductCardItem } from "../types/types"

type SetFunc =(productCard:ProductCardItem[]) => void

export const useSortPrice = (sortName:string,fillterCardList:ProductCardItem[],setFilterCardList:SetFunc) =>{
  
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
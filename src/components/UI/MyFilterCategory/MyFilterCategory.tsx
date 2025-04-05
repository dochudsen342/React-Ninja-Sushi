import React, { FC, ReactNode } from 'react'
import cl from './MyFilterCategory.module.css'
import { Link, useLocation } from 'react-router'
interface  PropsId{
 toRoute:string,
 filterId:string,
 nameCategories:string
}
interface FilterCategoriesProps{
  children:ReactNode,
  title:string,
  setFilterName:(nameCategories:string) => void
  propsId:PropsId
}

const FilterCategories:FC<FilterCategoriesProps> = ({children,title = '...',setFilterName,propsId}) => {
    const {toRoute,nameCategories,filterId} = propsId
    const rootClases = [cl.category__name]
    const isActive = useLocation().pathname === filterId

    if(isActive) rootClases.push(cl.active__category)
   
  return (
    <Link to={toRoute} className={cl.filter__link}>
       <div onClick={() => {
      setFilterName(nameCategories)
    }} className={cl.filter__category}>
        {children}
        <span className={rootClases.join(' ')}>{title}</span>
    </div>    
    </Link>
  )
}

export default FilterCategories

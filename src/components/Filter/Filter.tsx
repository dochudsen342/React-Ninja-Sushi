import React, { FC, ReactNode, useMemo, useState } from 'react'
import cl from './Filter.module.css'
import MyFilterCategory from '../UI/MyFilterCategory/MyFilterCategory'
import Bowls from '../UI/SvgIconsComponents/FilterSvgComponents/Bowls.jsx'
import Drinks from '../UI/SvgIconsComponents/FilterSvgComponents/Drinks.jsx'
import Rolls from '../UI/SvgIconsComponents/FilterSvgComponents/Rolls.jsx'
import Sauces from '../UI/SvgIconsComponents/FilterSvgComponents/Sauces.jsx'
import Sets from '../UI/SvgIconsComponents/FilterSvgComponents/Sets.jsx'
import Sushi from '../UI/SvgIconsComponents/FilterSvgComponents/Sushi.jsx'
import Unknown from '../UI/SvgIconsComponents/FilterSvgComponents/Unknown.jsx'
interface Categories {
    id:string,
    nameCategories:string,
    icon:ReactNode
}

const Filter:FC = () => {
    const [filterName,setFilterName] = useState<string | null>(null)

    const categories = useMemo<Categories[]>(() =>
        [
            {id:'/rolls',nameCategories:'Роллы',icon:<Rolls/>,},
            {id:'/sushi',nameCategories:'Суши',icon:<Sushi/>},
            {id:'/sets',nameCategories:'Сеты',icon:<Sets/>},
            {id:'/bowls',nameCategories:'Боулы',icon:<Bowls/>},
            {id:'/drinks',nameCategories:'Напитки',icon:<Drinks/>},
            {id:'/sauces',nameCategories:'Соусы',icon:<Sauces/>},
            {id:'/unknown',nameCategories:'Неизвестно',icon:<Unknown/>},
            {id:'/unknownTwo',nameCategories:'Неизвестно',icon:<Unknown/>},
        ],
    [filterName])
    

  return (
    <div className={cl.filter__container}>
        <div className={cl.filter__content}>
            {categories.map(c => 
                <MyFilterCategory propsId = {{toRoute:c.id,filterId:c.id,nameCategories:c.id}}  key={c.id} title={c.nameCategories} setFilterName={setFilterName}>
                    {c.icon}
                </MyFilterCategory>
            )}
        </div>
    </div>
  )
}

export default Filter

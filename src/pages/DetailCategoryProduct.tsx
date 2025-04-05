import { FC, memo, useEffect} from 'react'
import Header from '../components/Header/Header'
import Filter from '../components/Filter/Filter'
import Footer from '../components/Footer/Footer'
import '../styles/Rolls.css'
import CategoryProductSection from '../components/CategoryProductSection/CategoryProductSection'
import { ProductCardItem } from '../types/types'
interface DetailCategoryProductProps {
  category:ProductCardItem[]
}
const DetailCategoryProduct:FC<DetailCategoryProductProps> = memo(({category}) => {
  useEffect(() =>{
    window.scrollTo(0,0)
  },[])
  
  return (  
    <>
     <main className='main__rolls__container'>
          <Header/>
          <Filter/>
          <CategoryProductSection key={category[0].categoryId} cardList={category}/>
      </main>   
      <div className='footer__pre_title'>
          <p>В Сети полно всевозможных сервисов учета, начиная от учета времени или калорий, заканчивая учетом финансов. А вот сервиса учета инструментов до сих пор не было. Теперь – есть. Вообще, конечно, идея учета рабочего инструмента, расходных материалов и комплект... Теперь – есть.</p>
          <span className ='reed__more'>Читать больше</span>
      </div>
      <Footer/> 
    </>
  )
})

export default DetailCategoryProduct

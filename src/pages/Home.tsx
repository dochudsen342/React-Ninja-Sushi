import React, { FC } from 'react'
import Header from '../components/Header/Header';
import Filter from '../components/Filter/Filter';
import Slider from '../components/UI/MySlider/Slider';
import ProductSection from '../components/ProductSection/ProductSection';
import productCards from '../ProductData/productData'
import DeliveryArea from '../components/DeliveryArea/DeliveryArea.jsx'
import NinjaAppDownload from '../components/NinjaAppDownload/NinjaAppDownload';
import Footer from '../components/Footer/Footer';

const Home:FC = () => {
  return (
  <>
      <main className='main__container'>
          <Header/>
          <Filter/>
          <Slider/>
          {productCards.map(card => <ProductSection key={card[0].categoryId} cardList={card}/>)}
      </main>    
      <DeliveryArea/>
      <NinjaAppDownload/>
      <div className='footer__pre_title'>
          <p>В Сети полно всевозможных сервисов учета, начиная от учета времени или калорий, заканчивая учетом финансов. А вот сервиса учета инструментов до сих пор не было. Теперь – есть. Вообще, конечно, идея учета рабочего инструмента, расходных материалов и комплект... Теперь – есть.</p>
          <span className ='reed__more'>Читать больше</span>
      </div>
        <Footer/>
  </>
    
  )
}

export default Home

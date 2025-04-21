import { memo } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination } from 'swiper/modules';
import firstSlider from '../../../images/Slider/1310_577_ru.webp'
import secondSlider from '../../../images//Slider/1310_577_desktop_slider.webp'
import threeSlider from  '../../../images//Slider/1310_577_ru (1).webp'
import fourSlider from '../../../images//Slider/1310_577_ru (2).webp'
import cl from './Slide.module.css'
import '../../../../node_modules/swiper/modules/pagination.css';
import 'swiper/swiper-bundle.css'


const Slider = memo(() => {
  
  return (
    <div className={cl.container}>
        <div className={cl.slider__wrapper}>
            <Swiper
                  style={{
                    "--swiper-pagination-color": "#FF6633",
                    "--swiper-pagination-bullet-inactive-color": "#D2D2D7",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "11px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px"
                  }}
                  modules={[Pagination]}
                  pagination={{clickable:true}}
                  spaceBetween={15}
                  slidesPerView={1}
                
            >
                <SwiperSlide> <img loading='lazy' src={firstSlider} alt="" /></SwiperSlide>
                <SwiperSlide> <img loading='lazy' src={secondSlider} alt="" /></SwiperSlide>
                <SwiperSlide> <img loading='lazy' src={threeSlider} alt="" /></SwiperSlide>
                <SwiperSlide> <img loading='lazy' src={fourSlider} alt="" /></SwiperSlide>
                <div className="swiper-pagination"></div>
            </Swiper>
            
         </div>
         <div className={cl.slider__description}>
                <p className={cl.slider__title}>Доставка суши в от NINJA <br /> SUSHI</p>
                <p className={cl.slider__subtitle}>В ассортименте Ninja Sushi представлены роллы, суши, сеты и напитки  на <br /> любой вкус. Мы рекомендуем обязательно попробовать топ-позиции нашего <br /> меню!</p>
         </div>
  </div>// вынести description в отдельный дополнительный компонент 
    
   
  )
})

export default Slider




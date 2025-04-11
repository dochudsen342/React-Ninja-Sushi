import React from 'react'
import cl from './NinjaApp.module.css'
import iphoneImg from '../../images/appStoreIcons/iphoneApp.svg'
import MyAppStoreButton from '../UI/MyAppStoreButton/MyAppStoreButton'
const NinjaAppDownload = () => {
  return (
    <div className={cl.app__container}>
      <div className={cl.app__description}>
        <p className={cl.app__title}>Ниндзя - это семья.Скачивайте наше приложение</p>
        <p className={cl.app__subtitle}>Станьте ниндзя! Будьте в курсе всех новинок и никогда не оставаться голодным.</p>
        <MyAppStoreButton/>
      </div>
      <div className={cl.app__img}>
        <img loading='lazy' src={''} alt="" />
      </div>
    </div>
  )
}

export default NinjaAppDownload

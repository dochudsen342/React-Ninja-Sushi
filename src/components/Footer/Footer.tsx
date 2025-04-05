import React, { FC } from 'react'
import cl from './FooterStyle/Footer.module.css'
import LogoSvg from '../UI/SvgIconsComponents/LogoSvgCompnents/LogoSvg'
import MyAppStoreButton from '../UI/MyAppStoreButton/MyAppStoreButton'
import FooterNavbar from './FooterNavbar'
import {masterCard,pb,visa} from '../../images/BankCardsIcons/bankCards.js'

const Footer:FC = () => {
  return (
        <div className={cl.footer__container}>
            <div className={cl.footer__top__content}>
                <article className={cl.footer__logo}>
                    <LogoSvg/>
                    <MyAppStoreButton/>
                    <span className={cl.footer__logo__subtitle}>© Ninja Sushi. All rights reserved.</span>
                </article>
                <FooterNavbar/>
            </div>
            <div className={cl.footer__bottom__content}>
                <span className={cl.footer__bottom_title}>Политика конфиденциальности</span>
                <div className={cl.footer__bank__card}>
                    <img src={masterCard} alt="" />
                    <img src={visa} alt="" />
                    <img src={pb} alt="" />
                </div>
            </div>
        </div>
  )
}

export default Footer

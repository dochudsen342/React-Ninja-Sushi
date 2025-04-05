import React, { FC } from 'react'
import cl from './FooterStyle/Footer.module.css'
import cs from './FooterStyle/SocialBtn.module.css'
const FooterNavbar:FC = () => {
  return (
    <nav className={cl.footer__nav}>
        <ul className={cl.nav__list}>
            <span className={cl.footer__nav__title}>Навигация:</span>
                <li className={cl.nav__item}>Главная</li>
                <li className={cl.nav__item}>Меню</li>
                <li className={cl.nav__item}>Доставка</li>
                <li className={cl.nav__item}>Вакансии</li>
                <li className={cl.nav__item}>Новости</li>
        </ul>
        <ul className={[cl.nav__list,cl.nav__number].join(' ')}>
            <span className={cl.footer__nav__title}>Оформить заказ:</span>
            <li className={cl.nav__item}>+38 (067) 436 61 27</li>
            <li className={cl.nav__item}>+38 (066) 031 76 30</li>
            <li className={cl.nav__item}>+38 (093) 924 98 28</li>
        </ul>
        <ul className={[cl.nav__list,cl.nav__time].join(' ')}>
            <span className={cl.footer__nav__title}>Время работы:</span>
            <li className={cl.nav__item}>с 11:00 до 22:45</li>
            <li className={cl.nav__item}>с 22.45 до 06.00</li>
            <span className={cl.footer__nav__subtitle}>Ночная доставка</span>
        </ul>
        <ul className={cl.nav__list__social}>
            <span className={cl.footer__nav__title}>Мы в соц. сетях:</span>
            <li className={cl.nav__item_social}>
                <button className={[cs.button__social, cs.facebook].join(' ')}></button>
                <button className={[cs.button__social, cs.inst].join(' ')}></button>                    
            </li>
            <li>
                <button className={cs.social__telegram}><span>Техподдержка</span></button>
            </li>
        </ul>
        <ul className={cl.nav__list__social}>
            <span className={cl.footer__social__title}>#NinjaSushi</span>
            <span className={cl.footer__social__subtitle}>Ninja Sushi в фотографиях наших клиентов</span>
            <button className={cs.footer__button__inst}>Перейти в instagram</button>
        </ul>
    </nav>
  )
}

export default FooterNavbar

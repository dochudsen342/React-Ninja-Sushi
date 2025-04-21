import { memo } from 'react'
import cl from './header.module.css'
import {Link} from 'react-router-dom'
import headerPhone from '../../images/HeaderActionIcons/headerPhone.svg'


const HeaderNavbar = memo(() => {
  return (
      <nav className={cl.nav}>
        <ul className={cl.nav__list}>
            <li>
              <Link className={cl.nav__item} to='/'>Главная</Link>
              </li>
            <li >
              <Link className={cl.nav__item} to='/rolls'>Доставка</Link>
              </li>
            <li >
              <Link className={cl.nav__item} to='/about'>О нас</Link>
              </li>
            <li >
              <Link className={cl.nav__item} to='/news'>Новости</Link>
            </li>
            <li className={cl.phone}>
                <img src={headerPhone} alt="" />
                <span>+38 097 699 34 38</span>
            </li>
        </ul>
      </nav>
  )
})

export default HeaderNavbar

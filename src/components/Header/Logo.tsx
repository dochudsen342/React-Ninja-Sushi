import { FC, memo } from 'react'
import arrow from '../../images/ninja-sushi Logo/arrow.svg'
import cl from './header.module.css'
import LogoSvg from '../UI/SvgIconsComponents/LogoSvgCompnents/LogoSvg.jsx'
const Logo:FC = memo(() => {
  return (
        <div className={cl.logo}>
            <LogoSvg/>
            <button className={cl.logo__btn}>
              <img src={arrow} alt="" />
            </button>
        </div>
  )
})

export default Logo

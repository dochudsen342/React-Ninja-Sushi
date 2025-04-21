import {FC, memo} from 'react'
import cl from './MyBasket.module.css'
import MyCartIcon from '../SvgIconsComponents/HeaderSvgComponents/MyCartIcon'


interface MyCartButtonProps {
  isModal:boolean,
  onClick: () => void
}

const MyCartButton:FC<MyCartButtonProps> = memo(({isModal,onClick}) => {
   const rootClases = [cl.basket__btn] 
    if(isModal){
      rootClases.push(cl.active__basket) 
    }

  return (
    <button onClick={onClick} className={rootClases.join(' ')}>
        <span>Корзина</span>
        <MyCartIcon isModal ={isModal}/>
    </button>
  )
})

export default MyCartButton

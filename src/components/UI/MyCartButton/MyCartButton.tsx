import {FC, memo} from 'react'
import cl from './MyBasket.module.css'
import MyCartIcon from '../SvgIconsComponents/HeaderSvgComponents/MyCartIcon'
import { useSelector } from 'react-redux'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { changeModal } from '../../../store/slices/ModalSlice'




const MyCartButton:FC = memo(() => {
   const rootClases = [cl.basket__btn] 
   const isModal = useTypedSelector(state => state.modal)
   const dispatch = useDispatch()
    if(isModal.modalBasket){
      rootClases.push(cl.active__basket) 
    }

  return (
    <button onClick={() =>{
      dispatch(changeModal('modalBasket'))
    }} className={rootClases.join(' ')}>
        <span>Корзина</span>
        <MyCartIcon isModal ={isModal.modalBasket}/>
    </button>
  )
})

export default MyCartButton

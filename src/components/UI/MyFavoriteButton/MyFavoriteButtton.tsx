import {FC, memo} from 'react'
import cl from './MyFavoriteButton.module.css'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { changeModal } from '../../../store/slices/ModalSlice'



const MyFavoriteButtton:FC = memo(() => {
  
   const rootClases = [cl.header__favorite_btn] 
   const isModal = useTypedSelector(state => state.modal)
  const dispatch = useDispatch()
  if(isModal.modalFavorite) {
    rootClases.push(cl.active__favorite_btn)
  }
 
 
  return (  
    <button  onClick={() =>{
      dispatch(changeModal('modalFavorite'))
    }} className={rootClases.join(' ')}></button>
  )
})

export default MyFavoriteButtton

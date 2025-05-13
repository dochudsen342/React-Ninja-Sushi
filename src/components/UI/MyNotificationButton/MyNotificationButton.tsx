import  { FC } from 'react'
import cl from './MyNotificationButtom.module.css'
import { useDispatch } from 'react-redux'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { changeModal } from '../../../store/slices/ModalSlice'



const MyNotificationButton:FC  = () => {
  
  const rootClases = [cl.notification__header_btn] 
   const isModal = useTypedSelector(state => state.modal)
  const dispatch = useDispatch()
  console.log(isModal.modalNotification)
  if(isModal.modalNotification) {
    rootClases.push(cl.active__notification_btn)
  }
 
  return (  
    <button onClick={() =>{
      dispatch(changeModal('modalNotification'))
    }} className={rootClases.join(' ')}></button>
  )
  
}

export default MyNotificationButton

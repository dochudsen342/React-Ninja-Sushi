import React, { FC } from 'react'
import cl from './MyProfileBtn.module.css'
import { IsModalState} from '../../../hooks/UseIsModal'
import { useTypedSelector } from '../../../hooks/useTypedSelector'
import { useDispatch } from 'react-redux'
import { changeModal } from '../../../store/slices/ModalSlice'


const MyProfileBtn:FC = () => {
  const rootClases = [cl.header__profile_btn]
  const isModal = useTypedSelector(state => state.modal)
  const dispatch = useDispatch()

  if (isModal.modalProfile) {
    rootClases.push(cl.active__profile_btn)
  }
  return (
    <button onClick={() => {
      dispatch(changeModal('modalProfile'))
    }} className={rootClases.join(' ')}></button>
  )
}

export default MyProfileBtn

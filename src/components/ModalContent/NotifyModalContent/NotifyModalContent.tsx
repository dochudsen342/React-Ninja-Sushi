import React, { FC, useState } from 'react'
import { IsModalState } from '../../../hooks/UseIsModal'
import cl from './NotifyModal.module.css'
import EmptyNotifyModal from './EmptyNotifyModal'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../../store/slices/ModalSlice'
const NotifyModalContent: FC = () => {
  const [isModal,setIsModal] = useState(true)
  const dispatch = useDispatch()
  return (
    <div>
      <div className={cl.modal__content_title}>
        <span className={cl.title}>Уведомления</span>
        <button onClick={() => dispatch(closeModal())} className={cl.close__btn}></button>
      </div>
      {isModal && <EmptyNotifyModal/>}

    </div>
  )
}

export default NotifyModalContent

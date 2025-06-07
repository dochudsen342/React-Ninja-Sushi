import React from 'react'
import cl from './NotifyModal.module.css'
import EmptyNotify from '../../../images/HeaderActionIcons/notifications-empty.png'
const EmptyNotifyModal = () => {

  return (
    <>
      <div className={cl.empty__modal__content}>
        <div className={cl.empty__modal_description}>
          <img src={EmptyNotify} alt="" />
          <div className={cl.empty__modal_title}>
            <span>Вы еще ничего не добавилив избанное</span>
            <span>Мы сообщим, когда появится что-то интересное</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmptyNotifyModal

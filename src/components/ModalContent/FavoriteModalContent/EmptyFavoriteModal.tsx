import React from 'react'
import cl from './FavoriteModal.module.css'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../../store/slices/ModalSlice'
import EmptyFavorite from '../../../images/OptionsContentImages/EmptyFavoriteProduct.svg'

const EmptyFavoriteModal = () => {
    const dispatch = useDispatch()

  return (
    <>
        <div className={cl.modal__content_title}>
          <span className={cl.title}>Избранное</span>
          <button onClick={() => dispatch(closeModal())} className={cl.close__btn}></button>
        </div>
      <div className={cl.empty__modal__content}>
        <div className={cl.empty__modal_description}>
          <img width={250} height={250} src={EmptyFavorite} alt="" />
          <div className={cl.empty__modal_title}>
            <span>Вы еще ничего не добавилив избанное</span>
            <span>Переходите в интересующую вас категорию и отмечайте понравившиеся</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default EmptyFavoriteModal

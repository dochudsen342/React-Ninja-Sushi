import React from 'react'
import cl from './FavoriteModal.module.css'
import EmptyFavoriteModal from './EmptyFavoriteModal'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../../store/slices/ModalSlice'


const FavoriteModalContent = () => {
  const isFavorite = true
  const dispatch = useDispatch()

  return (
    <>
      <div className={cl.modal__content_title}>
        <span className={cl.title}>Избранное</span>
        <button onClick={() => dispatch(closeModal())} className={cl.close__btn}></button>
      </div>
       {isFavorite && <EmptyFavoriteModal/>}
    </>
  )
}

export default FavoriteModalContent

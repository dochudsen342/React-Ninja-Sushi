import React from 'react'
import cl from './FavoriteModal.module.css'
import EmptyFavoriteModal from './EmptyFavoriteModal'


const FavoriteModalContent = () => {
  const isFavorite = true
  return (
    <>
       {isFavorite && <EmptyFavoriteModal/>}
    </>
  )
}

export default FavoriteModalContent

import {FC, memo,ReactNode,useEffect,useMemo} from 'react'
import MyCartButton from '../UI/MyCartButton/MyCartButton'
import cl from './header.module.css'
import MyModal from '../UI/MyModal/MyModal'
import CartModalContent from '../ModalContent/CartModalContent/CartModalContent';
import { IsModalState, UseIsModal } from '../../hooks/UseIsModal'
import MyCountTotalItemCart from '../UI/MyCountTotalItemCart/MyCountTotalItemCart'
import MyFavoriteButtton from '../UI/MyFavoriteButton/MyFavoriteButtton';
import MyNotificationButton from '../UI/MyNotificationButton/MyNotificationButton';
import MyProfileBtn from '../UI/MyProfileBtn/MyProfileBtn';
import NotifyModalContent from '../ModalContent/NotifyModalContent/NotifyModalContent';
import { useSelector } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import FavoriteModalContent from '../ModalContent/FavoriteModalContent/FavoriteModalContent';

interface ActionButton {
  id:number,
  modalKey?:keyof IsModalState,
  icon:ReactNode
}


const HeaderOptions:FC = memo(() => {
  
  const isModal = useTypedSelector( state => state.modal)

  return (
    <div className={cl.nav__options}>
      <MyNotificationButton/>
      <MyFavoriteButtton/>
      <MyProfileBtn/>
      <MyModal>
        {isModal.modalBasket ? <CartModalContent/>: 
        isModal.modalNotification? <NotifyModalContent/>: 
        isModal.modalFavorite && <FavoriteModalContent/>}
      </MyModal>
      <MyCartButton/>
      <MyCountTotalItemCart/>
    </div>
  )
})

export default HeaderOptions

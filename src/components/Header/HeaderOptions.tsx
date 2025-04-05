import {FC, memo,ReactNode,useMemo} from 'react'
import MyActionButtton from '../UI/MyActionButton/MyActionButtton'
import MyCartButton from '../UI/MyCartButton/MyCartButton'
import cl from './header.module.css'
import MyModal from '../UI/MyModal/MyModal'
import CartModalContent from '../ModalContent/CartModalContent/CartModalContent';
import MyBellIcon from '../UI/SvgIconsComponents/HeaderSvgComponents/MyBellIcon';
import MyHeartIcon from '../UI/SvgIconsComponents/HeaderSvgComponents/MyHeartIcon';
import MyProfileIcon from '../UI/SvgIconsComponents/HeaderSvgComponents/MyProfileIcon';
import { IsModalState, UseIsModal } from '../../hooks/UseIsModal'
import MyCountTotalItemCart from '../UI/MyCountTotalItemCart/MyCountTotalItemCart'
import NotifyModalContent from '../ModalContent/NotifyModalContent/NotifyModalContent'

interface ActionButton {
  id:number,
  modalKey?:keyof IsModalState,
  icon:ReactNode
}


const HeaderOptions:FC = memo(() => {

const {toggleIsModale,isModal,setIsModal} = UseIsModal()

  const buttons = useMemo <ActionButton[]>(() =>
     [
      {id:1, modalKey: 'modalNotify', icon: <MyBellIcon isModal={isModal.modalNotify} /> },
      {id:2,icon: <MyHeartIcon/> },
      {id:3,icon: <MyProfileIcon /> },
    ]
  ,[isModal.modalNotify])

  return (
    <div className={cl.nav__options}>
      {buttons.map((btn) =>
        <MyActionButtton 
        key={btn.id} 
        isModal={btn.modalKey ? isModal[btn.modalKey]:false}  
        onClick={() => toggleIsModale(btn.modalKey)}
        >
          {btn.icon}
        </MyActionButtton>
      )}  
      <MyModal isModal={isModal}>
        <CartModalContent setIsModal={setIsModal}/>
        <NotifyModalContent toggleIsModale={toggleIsModale}/>
      </MyModal>
      <MyCartButton isModal={isModal.modalBasket} onClick ={() =>  toggleIsModale('modalBasket')}/>
      <MyCountTotalItemCart/>
    </div>
  )
})

export default HeaderOptions

import { useState, useCallback } from "react"

export interface IsModalState {
  modalFavorite: boolean,
  modalBasket: boolean,
  modalProfile: boolean,
  modalNotification: boolean
}

export const UseIsModal = () => {
  const [isModal, setIsModal] = useState<IsModalState>({
    modalFavorite: false,
    modalBasket: false,
    modalProfile: false,
    modalNotification: false
  })

  const toggleIsModale = 
    (modalKey: keyof IsModalState | undefined) => {
      if (!modalKey) return
  
      setIsModal((prevIsModal)=> ({...prevIsModal,[modalKey]:!prevIsModal[modalKey]}))
      
    }
   
  return { toggleIsModale, isModal, setIsModal }
} 


//  const newState: any = {
//           ...Object.fromEntries(
//             (Object.keys(prevIsModal) as (keyof IsModalState)[]).map(
//               (key) => [key, false]
//             ))
//         };
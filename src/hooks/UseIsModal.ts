import { useState,useCallback }  from "react"

export interface IsModalState {
  modalNotify:boolean,
  modalBasket:boolean,
}

export const UseIsModal = () =>{
    const [isModal,setIsModal] = useState<IsModalState>({
        modalNotify:false,
        modalBasket:false,
      })

    const toggleIsModale = useCallback(
        (modalKey:keyof IsModalState | undefined) =>  {
          
          if(!modalKey)return
          
          setIsModal((prevIsModal)  => ({...prevIsModal , [modalKey]:!prevIsModal[modalKey]}))
        },[])

      return {toggleIsModale,isModal,setIsModal}
} 
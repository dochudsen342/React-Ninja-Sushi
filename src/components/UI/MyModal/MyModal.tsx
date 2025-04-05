import React, { FC, ReactNode } from 'react'
import cl from './MyModal.module.css'
import { IsModalState } from '../../../hooks/UseIsModal'

interface MyModalProps{
  isModal:IsModalState,
  children:ReactNode
}
const MyModal:FC <MyModalProps> = ({children,isModal}) => {
  const isModalActive = Object.values(isModal).some(v => v === true)
  const rootClases = [cl.modal__window]


  if(isModalActive){
    rootClases.push(cl.modal__active)
  }

  return (
          <div className={rootClases.join(' ')}>
            <div className={cl.modal__content}>
                <div className={cl.modal__main__content}>
                    {children}
                </div>
            </div>
        </div>
     
  )
}

export default MyModal

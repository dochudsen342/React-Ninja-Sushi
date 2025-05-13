import { FC, ReactNode } from 'react'
import cl from './MyModal.module.css'
import { IsModalState } from '../../../hooks/UseIsModal'
import { useTypedSelector } from '../../../hooks/useTypedSelector'

interface MyModalProps{
  children:ReactNode
}

const MyModal:FC <MyModalProps> = ({children}) => {
  const isModal = useTypedSelector(state => state.modal)
  
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

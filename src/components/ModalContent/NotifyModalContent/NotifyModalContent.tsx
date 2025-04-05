import React, { FC } from 'react'
import { IsModalState } from '../../../hooks/UseIsModal'
interface NotifyProps {
  toggleIsModale:(modalKey:keyof IsModalState | undefined) => void
}
const NotifyModalContent:FC <NotifyProps> = ({toggleIsModale}) => {
  
  return (
    <div style={{display:'none'}}>
      УВЕДОМЛЕНИЯ
    </div>
  )
}

export default NotifyModalContent

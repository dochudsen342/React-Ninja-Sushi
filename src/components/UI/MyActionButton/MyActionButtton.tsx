import {FC, memo, ReactElement, ReactNode} from 'react'
import cl from './MyActionButton.module.css'
interface ActionButtonProps{
  isModal:boolean,
  children:ReactNode,
  onClick: () => void
}
const MyActionButtton:FC <ActionButtonProps> = memo(({children,isModal,onClick}) => {
  const rootClases = [cl.header__action_btn] 
  if(isModal) rootClases.push(cl.active__action_btn) 
  
  
  return (  
    <button onClick={onClick} className={rootClases.join(' ')}>
        {children}
    </button>
  )
})

export default MyActionButtton

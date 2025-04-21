import { FC, memo} from 'react'

interface SortCategoryProps{
  sortName:string,
  className?:string,
  onClick:() => void
}
const SortCategory:FC<SortCategoryProps> = memo(({sortName,className,onClick}) => {
  return (
    <button onClick ={onClick} className={className}>{sortName}</button>
  )
})

export default SortCategory

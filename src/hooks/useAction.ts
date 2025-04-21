import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as cartActionCreators from '../store/actionCreators/cartActionCreators'

export const useAction = () =>{
    const dispatch = useDispatch()
    return bindActionCreators(cartActionCreators,dispatch)
}
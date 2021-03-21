import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import ActionCreator from '../store/actionCreator/Index'


export const useAction = () => {
    const dispatch = useDispatch()
    console.log(ActionCreator)
    return bindActionCreators(ActionCreator, dispatch)
}
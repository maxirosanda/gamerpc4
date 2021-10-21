
import { SELECTEDORDER,CONFIRM_ORDER,GET_ORDERS,GET_ORDERSUSER, DELETE_ORDER } from '../actions/orders.action';

const INITIAL_STATE = {
    list:[] ,
    selectedId: null,
    status: 'inactive',
}

const  OrdersReducer = (state = INITIAL_STATE,action) =>{

    
    switch(action.type) {
        
        case CONFIRM_ORDER:
            return {
                ...state,
      };    
      case GET_ORDERS:
        return{
          ...state,
          list: action.list
        }
        case GET_ORDERSUSER:
            return {
                ...state,
                list:action.list
            }

            case  SELECTEDORDER :
                return{
                    ...state,
                selectedId: action._id
                }
            case DELETE_ORDER :
                return {
                    ...state,
                    selectedId:null
                }
           

        default:
            return state
            
    }
}

export default OrdersReducer

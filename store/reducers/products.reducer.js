
import { SELECTEDPRODUCT,GET_PRODUCTS } from '../actions/products.actions';

const INITIAL_STATE = {
    list:[] ,
    selectedId: null
}

const  ProductReducer = (state = INITIAL_STATE,action) =>{
    switch(action.type) {
        case SELECTEDPRODUCT:

            return {
                ...state,
                selectedId: action.id
              };
              case GET_PRODUCTS:
                return{
                  ...state,
                  list: action.list
                }
        

        default:
            return state
            
    }
}

export default ProductReducer


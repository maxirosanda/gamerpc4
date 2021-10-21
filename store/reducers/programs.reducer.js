
import { SELECTEDPROGRAM ,GET_PROGRAMS } from '../actions/programs.actions';

const INITIAL_STATE = {
    list:[] ,
    selectedId: null
}

const  ProgramsReducer = (state = INITIAL_STATE,action) =>{
    switch(action.type) {
        case SELECTEDPROGRAM:

            return {
                ...state,
                selectedId: action.id
              };
              case GET_PROGRAMS:
                return{
                  ...state,
                  list: action.list
                }

        default:
            return state
            
    }
}

export default ProgramsReducer


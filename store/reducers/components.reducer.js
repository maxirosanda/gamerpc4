import {COMPONENTS} from '../../data/components'

import { SELECTEDCOMPONENTS } from '../actions/components.actions';

const INITIAL_STATE = {
    list:COMPONENTS,
    selectedId: null
}

const  ComponentsReducer = (state = INITIAL_STATE,action) =>{
    switch(action.type) {
        case SELECTEDCOMPONENTS:

            return {
                ...state,
                selectedId: action.id
              };

        default:
            return state
            
    }
}

export default ComponentsReducer


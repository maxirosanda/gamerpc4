
import { SELECTEDGAMES , GET_GAMES } from '../actions/games.actions';

const INITIAL_STATE = {
    list:[] ,
    selectedId: null
}

const  GamesReducer = (state = INITIAL_STATE,action) =>{

    
    switch(action.type) {
        case SELECTEDGAMES:

            return {
                ...state,
                selectedId: action.id
              };

        case GET_GAMES:
              return{
                ...state,
                list: action.list
              }

        default:
            return state
            
    }
}

export default GamesReducer


import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import ProductReducer from "./reducers/products.reducer";
import GamesReducer from "./reducers/games.reducer";
import ProgramsReducer from "./reducers/programs.reducer";
import ComponentsReducer from "./reducers/components.reducer";
import AuthReducer from './reducers/auth.reducer'
import OrdersReducer from "./reducers/orders.reducer";
import MisPcsReducer from "./reducers/misPcs.reducer";

const RootReducer = combineReducers({
    products: ProductReducer,
    games:GamesReducer,
    programs:ProgramsReducer,
    components:ComponentsReducer,
    auth: AuthReducer,
    orders:OrdersReducer,
    mispcs:MisPcsReducer
})

export default createStore(RootReducer, applyMiddleware(thunk));


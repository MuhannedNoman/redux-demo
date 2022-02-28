import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from "redux-thunk";

import countReducer from './counterReducer'
import usersReducer from './usersReducer'



const reducer = combineReducers({
    counter: countReducer,
    users: usersReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;
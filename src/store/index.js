import {  applyMiddleware, combineReducers, createStore } from "redux";
import  thunkMiddleware  from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import auth from './auth/reducer';


const appReducer = combineReducers({
    auth
});

const rootReducer = (state,action) => {

}

function configureStore (preloadedstate) {
    const middleware = [];
    return createStore(
        rootReducer,
        preloadedstate,
        composeWithDevTools(applyMiddleware(...middleware,thunkMiddleware))
    )
} 

export default configureStore()
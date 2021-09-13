import {  applyMiddleware, combineReducers, createStore } from "redux";
import  thunkMiddleware  from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import student from './student/reducer';


const appReducer = combineReducers({
    student
});

const rootReducer = (state,action) => {
    return appReducer(state,action)
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
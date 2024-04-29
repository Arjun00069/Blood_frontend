import {createStore,combineReducers,applyMiddleware} from "redux";

import thunk from "redux-thunk";

import {composeWithDevTools} from "redux-devtools-extension";

import {userReducer,profileReducer, allhospitalsReducer, hospitalReducer, hospitalDetailsReducer} from "./Reducer/userReducer.js"
import {hospReducer} from './Reducer/hospReducer.js'
let initialstate={};
const middleware=[thunk];



const reducer = combineReducers({
    user:userReducer,
    profile:profileReducer,
    hospitals:allhospitalsReducer,
    hospitalDetails:hospitalDetailsReducer,
    hospital:hospReducer
})


const store= createStore(
    reducer,
    initialstate,
    composeWithDevTools(applyMiddleware(...middleware))
)
export const server= "http://localhost:4000/api/v1"
export default store;
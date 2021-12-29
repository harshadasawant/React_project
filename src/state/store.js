import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import combReducers from "./reducers/combReducers";

export const store =createStore(combReducers,{},applyMiddleware(thunk))
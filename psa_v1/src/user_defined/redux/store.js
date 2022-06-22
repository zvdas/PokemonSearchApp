import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { retrievePokemons } from "./actions/pokemon-actions";
import combineReducers from "./reducers/combine_reducer";

export const store = createStore(combineReducers, applyMiddleware(thunk));
store.dispatch(retrievePokemons())
store.subscribe(()=>console.log("in store state:", store.getState()));
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers/combine-reducer';
import app from '../configurations/firebase-config';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { retrievePokemons } from './actions/pokemon/pokemon-actions';

export const store = createStore(combineReducers, applyMiddleware(thunk));

const auth = getAuth(app);

onAuthStateChanged(auth, user => {
    if(user) {
        store.dispatch(retrievePokemons())
    } else {
        store.dispatch(retrievePokemons())
    }
})

store.subscribe(()=>console.log('in store state:', store.getState()));
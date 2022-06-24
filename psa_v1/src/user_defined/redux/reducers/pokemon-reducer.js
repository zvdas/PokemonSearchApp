import { CREATE_POKEMON, DELETE_POKEMON, RETRIEVE_POKEMONS, UPDATE_POKEMON } from "../actions/pokemon-types";

export default function PokemonReducer(state=[], action){
    switch(action.type){
        case CREATE_POKEMON:
            return [...state, action.payload]
        case RETRIEVE_POKEMONS:
            return action.payload
        case UPDATE_POKEMON:
            if(state.id === action.payload.id){
                return [...state, ...action.payload]
            }else{
                return state
            }
        case DELETE_POKEMON:
            return action.payload
        default:
            return state
    }
}
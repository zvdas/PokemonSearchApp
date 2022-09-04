import { CREATE_POKEMON, DELETE_POKEMON, RETRIEVE_POKEMONS, RETRIEVE_A_POKEMON, UPDATE_POKEMON } from './pokemon-types';

export const createAPokemon = (data) => {
    return {
        type : CREATE_POKEMON,
        payload : data
    }
}

export const getAllPokemons = (data) => {
    return {
        type : RETRIEVE_POKEMONS,
        payload : data
    }
} 

export const getPokemonById = (data) => {
    return {
        type : RETRIEVE_A_POKEMON,
        payload : data
    }
}

export const updatePokemonById = (data) => {
    return {
        type : UPDATE_POKEMON,
        payload : data
    }
}

export const deletePokemonById = (id) => {
    return {
        type : DELETE_POKEMON,
        payload : id
    }
}

export const getPokemonByName = (data) => {
    return {
        type : RETRIEVE_POKEMONS,
        payload : data
    }
}
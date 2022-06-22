import { CREATE_POKEMON, DELETE_POKEMON, RETRIEVE_POKEMONS, SELECT_DATATYPE, UPDATE_POKEMON } from "./pokemon-types";

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
        type : RETRIEVE_POKEMONS,
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
    console.log(`inside Pokemon methods : id ${id}`)
    return {
        type : DELETE_POKEMON,
        payload : id
    }
}

export const getPokemonByGeneration = (data) => {
    return {
        type : RETRIEVE_POKEMONS,
        payload : data
    }
}

export const getSelectedDataType = (data) => {
    return {
        type : SELECT_DATATYPE,
        payload : data
    }
}
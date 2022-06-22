import pokemonServices from "../../services/pokemon-service";
import { createAPokemon, getAllPokemons, getPokemonById, updatePokemonById, deletePokemonById, getPokemonByGeneration, getSelectedDataType } from "./pokemon-methods";

export const createPokemon = (pokemons) => {
    return (dispatch) =>{
        return pokemonServices.create({pokemons})
            .then(response => {
                dispatch(createAPokemon(response.data))
            })
            .catch(err=>{throw(err)})
    }
}

export const retrievePokemons = () => {
    return (dispatch) => {
        return pokemonServices.getAll()
            .then(response => {
                dispatch(getAllPokemons(response.data))
            })
            .catch(err => {throw(err)})
    }
}

export const findPokemonByID = (id) => {
    return (dispatch) => {
        return pokemonServices.get(id)
            .then(response => {
                dispatch(getPokemonById(response.data))
            })
            .catch(err => {throw(err)})
    }
}

export const updatePokemon = (id, data) => {
    return (dispatch) => {
        return pokemonServices.update(id, data)
        .then(response => {
            dispatch(updatePokemonById(response.data))
        })
        .catch(err => {throw(err)})
    }
}

export const deletePokemon = (id) => {
    return (dispatch) => {
        return pokemonServices.delete(id)
        .then(response => {
            dispatch(deletePokemonById(response.data))
        })
        .catch(err => {throw(err)})
    }
}

export const findPokemonByGeneration = (generation) => {
    return (dispatch) => {
        return pokemonServices.findByGeneration(generation)
        .then(response => {
            dispatch(getPokemonByGeneration(response.data))
        })
        .catch(err => {throw(err)})
    }
}

export const selectDataTypes = (info) =>{
    return (dispatch) => {
        dispatch(getSelectedDataType(info))
    }
}
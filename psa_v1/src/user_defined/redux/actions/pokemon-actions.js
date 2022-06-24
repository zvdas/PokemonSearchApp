import pokemonServices from "../../services/pokemon-firestore-service";
import { getAllPokemons, getPokemonById } from "./pokemon-methods";

export const createPokemon = (pokemons) => {
    return (dispatch) =>{
        return pokemonServices.create({pokemons})
            .then(response => {
                dispatch(getAllPokemons(response.data))
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

export const findPokemonById = (id) => {
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
            dispatch(getAllPokemons(response.data))
        })
        .catch(err => {throw(err)})
    }
}

export const deletePokemon = (id) => {
    return (dispatch) => {
        return pokemonServices.delete(id)
        .then(response => {
            dispatch(getAllPokemons(response.data))
        })
        .catch(err => {throw(err)})
    }
}
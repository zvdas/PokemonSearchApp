export const CREATE_POKEMON = "CREATE_POKEMON";

export const RETRIEVE_POKEMONS = "RETRIEVE_POKEMONS";

export const UPDATE_POKEMON = "UPDATE_POKEMON";

export const DELETE_POKEMON = "DELETE_POKEMON";

export const SELECT_DATATYPE = "SELECT_DATATYPE";

export const mapStateToProps = (state) => {
    return {
        pokemons : state.payload
    }
}
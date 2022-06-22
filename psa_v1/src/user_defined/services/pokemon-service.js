import axios from 'axios';

const url = process.env.REACT_APP_API_URL;

class PokemonServices{
    create(data) {
        return axios.post(url, data.pokemons)
    }
    getAll() {
        return axios.get(url)
    }
    get(id) {
        return axios.get(`${url}/${id}`)
    }
    update(id, data) {
        return axios.put(`${url}/${id}`, data)
    }
    delete(id) {
        return axios.delete(`${url}/${id}`)
    }
    findByGeneration(generation) {
        return axios.get(`${url}/?generation=${generation}`)
    }
}

export default new PokemonServices();
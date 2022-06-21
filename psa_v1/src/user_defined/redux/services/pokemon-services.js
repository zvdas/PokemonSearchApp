import axios from 'axios'

const url = process.env.REACT_APP_API_URL;

class PokemonService{
    create(data) {
        return axios.post(url, data.events)
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
    findByDate(date) {
        return axios.get(`${url}/?edate=${date}`)
    }
}

export default new PokemonService();
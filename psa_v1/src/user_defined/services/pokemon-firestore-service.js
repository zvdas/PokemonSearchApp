import firedb from "../configurations/firebase";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore";

let pcoll = collection(firedb, "pokemons");

class PokemonServices{
    create(data) {
        return addDoc(pcoll, data.pokemons);
    }
    getAll() {
        return getDocs(pcoll).then(response=>({data: response.docs.map(doc=>({...doc.data(), id: doc.id}))}));
    }   
    get(id) {
        return getDoc(doc(firedb, "pokemons", id)).then(response=>({data:{...response.data(), id: response.id}}));
    }
    update(id, data) {
        return updateDoc(doc(firedb, "pokemons", id), data);
    }
    delete(id) {
        return deleteDoc(doc(firedb, "pokemons", id));
    }
    findByName(name) {
        return getDocs(query(pcoll, where("pname", "==", name))).then(response=>({data: response.docs.map(doc=>({...doc.data(), id: doc.id}))}));
    }
}

export default new PokemonServices();
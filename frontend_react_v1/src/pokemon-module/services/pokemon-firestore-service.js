import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, query, updateDoc, where } from 'firebase/firestore';
import app from '../configurations/firebase-config';

const db = getFirestore(app);

let pcoll = collection(db, 'pokemons');

class PokemonServices{
    create(data) {
        return addDoc(pcoll, data.pokemons);
    }
    getAll() {
        return getDocs(pcoll).then(response=>({data: response.docs.map(doc=>({...doc.data(), id: doc.id}))}));
    }   
    get(id) {
        return getDoc(doc(db, 'pokemons', id)).then(response=>({data:{...response.data(), id: response.id}}));
    }
    update(id, data) {
        return updateDoc(doc(db, 'pokemons', id), data);
    }
    delete(id) {
        return deleteDoc(doc(db, 'pokemons', id));
    }
    findByName(name) {
        return getDocs(query(pcoll, where('pname', '==', name))).then(response=>({data: response.docs.map(doc=>({...doc.data(), id: doc.id}))}));
    }
}

export default new PokemonServices();
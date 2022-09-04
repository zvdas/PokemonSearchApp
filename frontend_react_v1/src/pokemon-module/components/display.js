import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { mapStateToProps } from '../redux/actions/manage-state';
import { retrievePokemons, findPokemonByName } from '../redux/actions/pokemon/pokemon-actions';

function DisplayComponent({pokemons}) {

    let byName=React.createRef(); 
    
    let dispatch = useDispatch();

    const [currentIndex, setCurrentIndex] = useState(0);

    const searchByName = () => {
        dispatch(findPokemonByName(byName.current.value));
    }

    const previousPage = (currentIndex) => {
        if(currentIndex>0){
            return setCurrentIndex(currentIndex - 10)
        }
    }

    const nextPage = (currentIndex) => {
        while(currentIndex<pokemons.length-10){
            return setCurrentIndex(currentIndex + 10);
        }
    }

    let response
    !pokemons ?
    response = <p><strong>No Data Found</strong></p> :
    response = 
    (
        <div>
            {pokemons.slice(currentIndex, currentIndex+10).map((pokemon) => 
                <div className='card-content d-flex m-5 justify-content-around' key={pokemon.id}>
                    <div className='col-auto'>
                        <img className='imagebg' src={'data:image/png;base64,'+pokemon.pimage} alt=''/>
                    </div>
                    <div className='col-auto'>
                        <p>
                            <strong>{pokemon.pname}</strong>
                            <br/><br/>
                            CP : {pokemon.pcp}<br/>
                            HP : {pokemon.php}<br/>
                            Attack : {pokemon.pattack}<br/>
                            Defence : {pokemon.pdefence}<br/>
                            Generation : {pokemon.pgeneration}<br/>
                            Type 1 : {pokemon.ptype1}<br/>
                            Type 2 : {pokemon.ptype2}
                        </p>
                    </div>
                </div>
            )}
        </div>
    )

    let pagination = 
    (
        <nav className='d-flex justify-content-center'>
            <ul className='pagination'>
                <li className='page-item'>
                    <button className='page-link bg-danger text-warning' id='previous' onClick={()=>previousPage(currentIndex)}>Previous</button>
                </li>
                <li className='page-item'>
                    <p className='page-link bg-danger text-warning' id='pagination'>Page {Math.ceil(currentIndex/10)+1} of {Math.ceil(pokemons.length/10)}</p>
                </li>
                <li className='page-item'>
                    <button className='page-link bg-danger text-warning' id='next' onClick={()=>nextPage(currentIndex)}>Next</button>
                </li>
            </ul>
        </nav>
    )

  
    return (
        <div className='container m-5 bg-warning text-danger'>
            <h1 className='text-center'>Display</h1>
            <div className='card bg-warning'>
                <div className='d-flex m-5' role='search'>
                    <input className='form-control me-2' id='search' type='search' placeholder='Search' aria-label='Search' ref={byName}/>
                    <button className='btn btn-danger text-warning' id='name' onClick={searchByName}>Search</button>
                </div>
                {response}
            </div>
            {pagination}
        </div>
    )
}

export default connect(mapStateToProps, {retrievePokemons, findPokemonByName})(DisplayComponent)
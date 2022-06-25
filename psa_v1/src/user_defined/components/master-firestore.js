import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPokemon, findPokemonById, updatePokemon, deletePokemon, retrievePokemons } from '../redux/actions/pokemon-actions';
import { mapStateToProps } from '../redux/actions/pokemon-types';
import noimage from '../../assets/no-image-available.png';

class MasterFirestoreComponent extends Component {
    constructor(props) {
        
        super(props)

        this.pname = React.createRef();
        this.pimage = React.createRef();
        this.pcp = React.createRef();
        this.php = React.createRef();
        this.pdefence = React.createRef();
        this.pattack = React.createRef();
        this.pgeneration = React.createRef();
        this.ptype1 = React.createRef();
        this.ptype2 = React.createRef();
        this.selectedid = React.createRef();

        this.state = {msg:'', selectedimage:''};

        this.onFileChange = this.onFileChange.bind(this);

    }

    onFileChange(event){
        let reader  = new FileReader();
        reader.readAsBinaryString(event.target.files[0]);
        reader.onload = () => {
            this.pimage = btoa(reader.result);
            this.setState({selectedimage: this.pimage});
        }
    }

    savePokemon(){
        let pokemons = {
            pname : this.pname.current.value,
            pimage : this.pimage,
            pcp : this.pcp.current.value,
            php : this.php.current.value,
            pdefence : this.pdefence.current.value,
            pattack : this.pattack.current.value,
            pgeneration : this.pgeneration.current.value, 
            ptype1 : this.ptype1.current.value,
            ptype2 : this.ptype2.current.value
        }

        this.props.createPokemon(pokemons);

        this.setState({msg : 'Pokémon Created Successfully'});
    }

    getPokemonById(id){
        this.selectedid = id;
        this.props.findPokemonById(id);
        setTimeout(() => {
            this.pname.current.value = this.props.pokemons.pname;
            this.setState({selectedimage: this.props.pokemons.pimage});
            this.pcp.current.value = this.props.pokemons.pcp;
            this.php.current.value = this.props.pokemons.php;
            this.pdefence.current.value = this.props.pokemons.pdefence;
            this.pattack.current.value = this.props.pokemons.pattack;
            this.pgeneration.current.value = this.props.pokemons.pgeneration;
            this.ptype1.current.value = this.props.pokemons.ptype1;
            this.ptype2.current.value = this.props.pokemons.ptype2;
        }, 3000);
    }

    updatePokemon(){
        let pokemons = {
            pname : this.pname.current.value,
            pimage : this.pimage,
            pcp : this.pcp.current.value,
            php : this.php.current.value,
            pdefence : this.pdefence.current.value,
            pattack : this.pattack.current.value,
            pgeneration : this.pgeneration.current.value, 
            ptype1 : this.ptype1.current.value,
            ptype2 : this.ptype2.current.value
        }

        this.props.updatePokemon(this.selectedid, pokemons);

        this.setState({msg:'Pokémon Updated Successfully'});
    }

    deletePokemonById(){
        this.props.deletePokemon(this.selectedid);
        this.setState({msg:'Pokémon Deleted Successfully'});
    }

    clearFields(){
        this.pname.current.value = '';
        this.setState({selectedimage: ''});
        this.pcp.current.value = '';
        this.php.current.value = '';
        this.pdefence.current.value = '';
        this.pattack.current.value = '';
        this.pgeneration.current.value = '';
        this.ptype1.current.value = '';
        this.ptype2.current.value = '';
        retrievePokemons();
    }
  
    render() {
       
        let img
        if(!this.state.selectedimage){
            img = <img src={noimage} height={'50px'} width={'50px'} alt='pokepic'/>;
        }
        else{
            img = <img src={'data:image/png;base64,'+this.state.selectedimage} height={'100px'} width={'100px'} alt='pokepic'/>;
        }

        let data = this.props.pokemons;
        let response
        if(!data){
            response = <p><strong>No Data Found</strong></p>
        }else if(Array.isArray(data)===true){
            response = 
            (
                <table className='table table-hover bg-warning text-danger'>
                    <thead>
                        <tr itemScope='col'>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Combat Power (CP)</th>
                            <th>Hit Points (HP)</th>
                            <th>Defence</th>
                            <th>Attack</th>
                            <th>Generation</th>
                            <th>Type 1</th>
                            <th>Type 2</th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.pokemons.map((pokemon, index) => 
                        <tr itemScope='row'  key={pokemon.id}>
                            <td>{index+1}</td>
                            <td>{pokemon.pname}</td>
                            <td><img src={'data:image/png;base64,'+pokemon.pimage} height={"100px"} width={"100px"} alt="pokepic"/></td>
                            <td>{pokemon.pcp}</td>
                            <td>{pokemon.php}</td>
                            <td>{pokemon.pdefence}</td>
                            <td>{pokemon.pattack}</td>
                            <td>{pokemon.pgeneration}</td>
                            <td>{pokemon.ptype1}</td>
                            <td>{pokemon.ptype2}</td>
                            <td>
                                <button className='btn btn-primary m-2 text-warning bg-danger' onClick={()=>this.getPokemonById(pokemon.id)}>Select</button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            )
        }else if(Array.isArray(data)===false){
            response = 
            (
                <table className='table table-hover bg-warning text-danger'>
                    <thead>
                        <tr itemScope='col'>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Combat Power (CP)</th>
                            <th>Hit Points (HP)</th>
                            <th>Defence</th>
                            <th>Attack</th>
                            <th>Generation</th>
                            <th>Type 1</th>
                            <th>Type 2</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr itemScope='row'  key={this.props.pokemons.id}>
                            <td>{1}</td>
                            <td>{this.props.pokemons.pname}</td>
                            <td><img src={'data:image/png;base64,'+this.props.pokemons.pimage} height={"100px"} width={"100px"} alt="pokepic"/></td>
                            <td>{this.props.pokemons.pcp}</td>
                            <td>{this.props.pokemons.php}</td>
                            <td>{this.props.pokemons.pdefence}</td>
                            <td>{this.props.pokemons.pattack}</td>
                            <td>{this.props.pokemons.pgeneration}</td>
                            <td>{this.props.pokemons.ptype1}</td>
                            <td>{this.props.pokemons.ptype2}</td>
                        </tr>
                    </tbody>
                </table>
            )
        }

        return (
            <div className='container'>
                <div className='card bg-warning m-3'>
                    <div className='card-contents m-3 text-danger'>
                        <div className='d-flex row justify-content-center'>
                            <div className='col-auto'>
                                <label htmlFor='pname' className='form-label'>Name</label>
                                <input type='text' className='form-control' id='pname' ref={this.pname}/>
                            </div>
                            <div className='col-auto'>
                                <label htmlFor='generation' className='form-label'>Generation</label>
                                <input type='number' className='form-control' id='generation' ref={this.pgeneration}/>
                            </div>
                            <div className='col-auto'>
                                <label htmlFor='type1' className='form-label'>Type 1</label>
                                <input type='text' className='form-control' id='type1' ref={this.ptype1}/>
                            </div>
                            <div className='col-auto'>
                                <label htmlFor='type2' className='form-label'>Type 2</label>
                                <input type='text' className='form-control' id='type2' ref={this.ptype2}/>
                            </div>
                        </div>
                        <div className='d-flex row justify-content-center'>
                            <div className='col-auto'>
                                <label htmlFor='cp' className='form-label'>Combat Power</label>
                                <input type='number' className='form-control' id='cp' ref={this.pcp}/>
                            </div>
                            <div className='col-auto'>
                                <label htmlFor='hp' className='form-label'>Hit Points</label>
                                <input type='number' className='form-control' id='hp' ref={this.php}/>
                            </div>
                            <div className='col-auto'>
                                <label htmlFor='defence' className='form-label'>Defence</label>
                                <input type='number' className='form-control' id='defence' ref={this.pdefence}/>
                            </div>
                            <div className='col-auto'>
                                <label htmlFor='attack' className='form-label'>Attack</label>
                                <input type='number' className='form-control' id='attack' ref={this.pattack}/>
                            </div>
                        </div>
                        <div className='d-flex row justify-content-center my-5 mx-5 px-3'>
                            <div className='input-group col-auto'>
                                <label className='input-group-text text-danger' htmlFor='image'>Image</label>
                                <input type='file' className='form-control text-danger' id='image' onChange={this.onFileChange}/>
                            </div>
                        </div>
                        <div className='d-flex row justify-content-center'>
                            <div className='col-auto justify-content-left mx-5'>
                                <button className='btn btn-primary text-warning bg-danger' onClick={()=>this.clearFields()}>Clear</button>
                            </div>
                            <div className='col-auto justify-content-left mx-5'>
                                <button className='btn btn-primary text-warning bg-danger' onClick={()=>this.savePokemon()}>Create</button>
                            </div>
                            <div className='col-auto justify-content-center mx-5 bg-danger'>
                                {img}
                            </div>
                            <div className='col-auto justify-content-right mx-5'>
                                <button className='btn btn-primary text-warning bg-danger' onClick={()=>this.updatePokemon()}>Update</button>
                            </div>
                            <div className='col-auto justify-content-right mx-5'>
                                <button className='btn btn-primary text-warning bg-danger'onClick={()=>this.deletePokemonById()}>Delete</button>
                            </div>
                        </div>
                        <div className='d-flex row justify-content-center'>
                            <div className='col-auto'>
                                {this.state.msg}
                            </div>
                        </div>
                    </div>
                </div>
                {response}
            </div>
        )
    }
}

export default connect(mapStateToProps, {createPokemon, findPokemonById, updatePokemon, deletePokemon})(MasterFirestoreComponent)
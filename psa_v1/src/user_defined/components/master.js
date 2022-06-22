import React, { Component } from 'react';
// import { createPokemon } from '../redux/actions/pokemon-actions';

export default class master extends Component {
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
        this.imageString = React.createRef();

        this.state = {msg:''};

        this.onFileChange = this.onFileChange.bind(this);

        this.onFileUpload = this.onFileUpload.bind(this);

        this.savePokemon = this.savePokemon.bind(this);
    }

    onFileChange(event){
        setTimeout(()=>{
        console.log(`event files : ${JSON.stringify(event.target.files[0])}`)
        }, 3000)
        // console.log(`event files : ${event.target} stringified : ${JSON.stringify(event.target.files[0])}`)     
        /*
        if(!event.target.files[0]==null){
        let reader  = new FileReader();
        reader.readAsBinaryString(event.target.files[0]);
        reader.onload = () => {
            this.imageString = btoa(reader.result.toString());
            console.log(`imagestring : ${JSON.stringify(this.imageString)}`)
            }
        }else{
            console.log('null')
        }
        */
    }

    onFileUpload(){
        /*
        console.log(`imagestring : ${this.pimage.current.value}`)
        */
    }

    savePokemon(){
        let pokemons = {
            pname : this.pname.current.value,
            pimage : this.pimage.current.value,
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
  
    render() {
        return (
            <div className='container'>
                <div className='card bg-dark m-3'>
                    <div className='card-contents m-3 text-white'>
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
                                <label className='input-group-text' htmlFor='image'>Image</label>
                                <input type='file' className='form-control' id='image' onChange={this.onFileChange}/>
                                <button className='btn btn-primary' onClick={this.onFileUpload}>Upload</button>
                            </div>
                        </div>
                        <div className='d-flex row justify-content-center'>
                            <div className='col-auto'>
                                <button className='btn btn-primary' onClick={this.savePokemon}>Submit</button>
                            </div>
                        </div>
                        <div className='d-flex row justify-content-center'>
                            <div className='col-auto'>
                                {this.state.msg}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerAUser, loginAUser } from '../redux/actions/auth/auth-actions';


class Home extends Component {
  constructor(props) {
    super(props)

    this.email = React.createRef();
    this.password = React.createRef();

    this.state = { msg: '', isNewUser: true, type: 'New User' }

    this.registerUser = this.registerUser.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.userType = this.userType.bind(this);
  }

  userType() {
    this.setState({ isNewUser: this.isNewUser = !this.isNewUser });
    this.state.isNewUser === false ? this.setState({ type : 'Existing User' }) : this.setState({ type : 'New User' });
  }

  registerUser() {
    let user = {
      email : this.email.current.value,
      password : this.password.current.value,
      isLoggedin: false,
      msg: ''
    }

    this.props.registerAUser(user);
    // this.setState({ msg: 'User registration successful' });
  }

  loginUser() {
    let user = {
      email : this.email.current.value,
      password : this.password.current.value,
      isLoggedin: false,
      msg: ''
    }

    this.props.loginAUser(user);
    // this.setState({ msg: 'User login successful' });
  }

  render() {
    let response

    this.state.isNewUser
    ? response = (
      <div className='row m-3'>
        <h3 className='text-center'>Sign up</h3>
        <div className='col'>
          <input type='text' name='forEmail' className='form-control mb-3' ref={this.email} placeholder='email@example.com'/>
        </div>
        <div className='col'>
          <input type='password' name='forPassword' className='form-control mb-3' ref={this.password} placeholder='Password'/>
        </div>
        <div className='col'>
          <button className='btn btn-danger text-warning' onClick={this.registerUser}>sign up</button>
        </div>
      </div>
    )
    : response = (
      <div className='row m-3'>
        <h3 className='text-center'>Login</h3>
        <div className='col'>
          <input type='text' name='forEmail' className='form-control mb-3' ref={this.email} placeholder='email@example.com'/>
        </div> 
        <div className='col'>
          <input type='password' name='forPassword' className='form-control mb-3' ref={this.password} placeholder='Password'/>
        </div>
        <div className='col'>
          <button className='btn btn-danger text-warning' onClick={this.loginUser}>login</button>
        </div>
      </div>
    )

    return (
      <div className='container bg-warning my-2 p-3'>
        <div className='text-danger'> 
          <h1 className='text-center'>Welcome to The Pokémon Application</h1>
          <p>The Pokémon Application is a display space where Pokémon enthusiasts can upload and share their knowledge with other enthusiasts.</p>
          <p>Kindly sign up with a valid email and password and login. Upon successful login, the following tasks can be performed</p>
          <ul>
            <li>Create, read, update & delete pokémon stats</li>
            <li>Search for events by id, date or venue</li>
          </ul>
        </div>

        <div className='card-center bg bg-danger text-warning p-3'>
          <h2 className='text-center'>Are you a new user?</h2>

          <div className='row justify-content-center d-flex align-items-center'>
            <div className='col-auto'>
              <button className='btn btn-warning text-danger' onClick={this.userType} >click here</button> 
            </div>
            {' '}{this.state.type}
          </div>

          <div className='card bg bg-warning text-danger m-3'>
            {response}
            <p className='text-center'>{this.state.msg}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(null, { registerAUser, loginAUser })(Home);
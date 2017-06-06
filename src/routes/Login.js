import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { PageHeader } from 'react-bootstrap';
import SignUp from './modals/SignUp';
import GeneralForm from './forms/GeneralForm';

import '../stylesheets/login.css';

//Login updates login state and segueys to SignUp
//which updates login and billing if requested
class Login extends React.Component {
  static propTypes = {
    room: PropTypes.object.isRequired,
    login: PropTypes.object.isRequired,
    fetchUser: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,

    modalVisible: PropTypes.bool.isRequired,
    makeModal: PropTypes.func.isRequired
  };

  constructor(props){
    super(props);
    this.state = {
      email: props.login.user.email,
      password: props.login.user.password,
    }
  }

  onEmailChange = (e) => {
    this.state.email = e.target.value;
    //this.state.id = e.target.value.slice(0, e.target.value.indexOf('@'))
    this.setState(this.state);
  }

  onPasswordChange = (e) => {
    this.state.password = e.target.value;
    this.setState(this.state);
  }

  pop = (e) => {
    if(e) e.preventDefault();
    this.props.makeModal();
  }

  render() {
    //determines if next route is welcome or confirmation
    let id = (this.state.email !== undefined) ? this.state.email.split("@") : [];
    let ID = id[0];
    let next = (this.props.room.room) ? "/book/confirmation" : `/welcome/${ID}`;
    //logout button if signed in
    const secondButton = (this.props.login.login) ?
      <button className="btn btn-secondary" onClick={() => this.props.logout({
        login: false,
        user: {}
      })}>
        Logout
      </button> :
      <button className="btn btn-secondary" onClick={this.pop}>
        Sign Up
      </button>;

    return (
      <div className="main-content not-found">
        <PageHeader><small>Login</small></PageHeader>
        <form className="login-form">
          <GeneralForm
            emailValue={this.state.email}
            emailChange={this.onEmailChange}
            passwordValue={this.state.password}
            passwordChange={this.onPasswordChange}
          />

          <button type="submit" className="btn btn-primary">
            <NavLink className="select" to={next} onClick={() =>{
              this.props.fetchUser({
                email:this.state.email,
                password:this.state.password,})
            }}>
              Login
            </NavLink>
          </button>
          {secondButton}
        </form>
        <SignUp
          makeModal={this.props.makeModal}
          modalVisible={this.props.modalVisible}
          updateUser={this.props.updateUser}
          login={this.props.login}
        />
      </div>
    );
  }
}


export default Login;

// this.props.updateLogin({
//   login:true,
//   email:this.state.email,
//   id:this.state.id,
//   password:this.state.password,
// });

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import SignUp from './modals/SignUp';
import GeneralForm from './forms/GeneralForm';

//Login updates login state and segueys to SignUp
//which updates login and billing if requested
class Login extends React.Component {
  static propTypes = {
    updateLogin: PropTypes.func.isRequired,
    login: PropTypes.object.isRequired,
    updateBilling: PropTypes.func.isRequired,
    billing: PropTypes.object.isRequired,

    modalVisible: PropTypes.bool.isRequired,
    makeModal: PropTypes.func.isRequired,
    //determines if room has been selected
    roomRoom: PropTypes.bool.isRequired,

  };

  constructor(props){
    super(props);
    this.state = {
      login: props.login.login,
      email: props.login.email,
      id: props.login.id,
      password: props.login.password,
    }
  }

  onEmailChange = (e) => {
    this.state.email = e.target.value;
    this.state.id = e.target.value.slice(0, e.target.value.indexOf('@'))
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
    const next = (this.props.roomRoom) ? `/book/confirmation` : `/welcome/${this.state.id}`;

    return (
      <div className="main-content not-found">
        <h2>Login</h2>
        <form className="login-form">
          <GeneralForm
            emailValue={this.state.email}
            emailChange={this.onEmailChange}
            passwordValue={this.state.password}
            passwordChange={this.onPasswordChange}
          />
          <button type="submit" className="btn btn-primary">
            <NavLink className="select" to={next} onClick={() =>{
              this.props.updateLogin({
                login:true,
                email:this.state.email,
                id:this.state.id,
                password:this.state.password,
              });
            }}>
              Submit
            </NavLink>
          </button>
          <button className="btn btn-secondary" onClick={this.pop}>
            Sign Up
          </button>
        </form>
        <SignUp
          makeModal={this.props.makeModal}
          modalVisible={this.props.modalVisible}
          updateLogin={this.props.updateLogin}
          updateBilling={this.props.updateBilling}
          login={this.props.login}
          billing={this.props.billing}
        />
      </div>
    );
  }
}


export default Login;

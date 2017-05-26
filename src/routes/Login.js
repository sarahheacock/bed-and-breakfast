import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import SignUp from './SignUp';
//import { browserHistory } from 'react-router';

//const Login = () => (
class Login extends React.Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    logged: PropTypes.object.isRequired,
    modalVisible: PropTypes.bool.isRequired,
    makeModal: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired
  };

  constructor(props){
    super(props);
    this.state = {
      current: props.logged.current,
      email: props.logged.email,
      id: props.logged.email,
      password: props.logged.password,
      vis: props.modalVisible
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
    console.log("sel", this.props.selected);
    const next = (this.props.selected) ? `/book/confirmation` : `/welcome/${this.state.id}`;
    return (
      <div className="main-content not-found">
        <h2>Login</h2>
        <form className="login-form" onSubmit={this.customerLogin}>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter"
              value={this.state.email}
              onChange={this.onEmailChange}
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onPasswordChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            <NavLink className="select" to={next} onClick={() =>{
              console.log("go");
              this.props.login({email:this.state.email, id:this.state.id, password:this.state.password});
            }}>
              Submit
            </NavLink>
          </button>
          <button className="btn btn-secondary" onClick={this.pop}>
            Sign Up
          </button>
        </form>
        <SignUp makeModal={this.props.makeModal} visible={this.props.modalVisible} logged={this.props.logged} login={this.props.login}/>
      </div>
    );
  }
}

//);

export default Login;

// <NavLink className="select" to={`/welcome/:${this.state.name}`}>
//   SignUp
// </NavLink>

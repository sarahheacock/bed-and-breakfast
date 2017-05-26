import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
//import { browserHistory } from 'react-router';
// const log = {
//   current: false,
//   email: '',
//   id: '',
//   password: '',
//   address: {
//     line1: '',
//     line2: '',
//     city: '',
//     state: '',
//     zip: 0,
//     country: ''
//   },
//   credit: {
//     number: 0,
//     expiration: '',
//     cvv: '',
//   }
// }
//const Login = () => (
class SignUp extends React.Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    logged: PropTypes.object.isRequired,
    visible: PropTypes.bool.isRequired,
    makeModal: PropTypes.func.isRequired
  };

  constructor(props){
    super(props);
    this.state = {
      current: props.logged.current,
      email: props.logged.email,
      current: props.logged.current,
      id: props.logged.email,
      password: props.logged.password,
      address: props.logged.address,
      name: props.logged.name,
      credit: props.logged.credit,
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

  onAddressChange = (e) => {
    this.state["address"][e.target.id] = e.target.value;
    this.setState(this.state);
  }

  pop = (e) => {
    if(e) e.preventDefault();
    this.props.makeModal();
  }

  render() {
    return (
      <div className="main-content not-found">
      <Modal show={this.props.visible} >

        <Modal.Header>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
            <label for="exampleInputPassword1">Create Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={this.state.password}
              onChange={this.onPasswordChange}
            />
          </div>
          <div className="form-group">
            <label>Address Line 1</label>
            <input
              type="text"
              className="form-control"
              id="line1"
              placeholder="Street Address"
              value={this.state.address.line1}
              onChange={this.onAddressChange}
            />
          </div>
          <div className="form-group">
            <label>Address Line 2</label>
            <input
              type="text"
              className="form-control"
              id="line2"
              placeholder="Street Address"
              value={this.state.address.line2}
              onChange={this.onAddressChange}
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              placeholder="City"
              value={this.state.address.city}
              onChange={this.onAddressChange}
            />
          </div>
          <div className="form-group">
            <label>State</label>
            <input
              type="text"
              className="form-control"
              id="state"
              placeholder="State"
              value={this.state.address.state}
              onChange={this.onAddressChange}
            />
          </div>
          <div className="form-group">
            <label>Zip</label>
            <input
              type="text"
              className="form-control"
              id="zip"
              placeholder="Zip"
              value={this.state.address.zip}
              onChange={this.onAddressChange}
            />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input
              type="text"
              className="form-control"
              id="country"
              placeholder="Country"
              value={this.state.address.country}
              onChange={this.onAddressChange}
            />
          </div>
          </form>
          </Modal.Body>
          <Modal.Footer>
          <button type="submit" className="btn btn-primary">
            <NavLink className="select" to="/book/confirmation" onClick={() =>
              this.props.login({...this.state, current:true })
            }>
              Submit
            </NavLink>
          </button>
          <button className="btn btn-danger" onClick={this.pop}>
            Cancel
          </button>
          </Modal.Footer>

      </Modal>
      </div>
    );
  }
}

//);

export default SignUp;

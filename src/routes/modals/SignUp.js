import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Modal } from 'react-bootstrap';


import GeneralForm from '../forms/GeneralForm';
import PersonalInfoForm from '../forms/PersonalInfoForm';

//SignUp is a modal that update login and billing state
class SignUp extends React.Component {
  static propTypes = {
    login: PropTypes.object.isRequired,
    updateLogin: PropTypes.func.isRequired,
    billing: PropTypes.object.isRequired,
    updateBilling: PropTypes.func.isRequired,
    makeModal: PropTypes.func.isRequired,
    modalVisible: PropTypes.bool.isRequired
  };

  constructor(props){
    super(props);
    this.state = {
      email: props.login.email,
      id: props.login.id,
      password: props.login.password,
      billing: props.billing,
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
    this.state["billing"][e.target.id] = e.target.value;
    this.setState(this.state);
  }

  pop = (e) => {
    if(e) e.preventDefault();
    this.props.makeModal();
  }

  render() {
    return (
      <div className="main-content not-found">
        <Modal show={this.props.modalVisible} >
          <Modal.Header>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
            <Modal.Body>
              <form className="login-form" onSubmit={this.customerLogin}>
                <GeneralForm
                  emailValue={this.state.email}
                  emailChange={this.onEmailChange}
                  passwordValue={this.state.password}
                  passwordChange={this.onPasswordChange}
                />
                <PersonalInfoForm
                  line1Value={this.state.billing.line1}
                  line2Value={this.state.billing.line2}
                  cityValue={this.state.billing.city}
                  stateValue={this.state.billing.state}
                  zipValue={this.state.billing.zip}
                  countryValue={this.state.billing.country}
                  addressChange={this.onAddressChange}
                />
              </form>
            </Modal.Body>
            <Modal.Footer>
              <button type="submit" className="btn btn-primary" onClick={this.pop}>
                <NavLink className="select" to="/book/confirmation" onClick={() => {
                  this.props.updateLogin({
                    login: true,
                    password: this.state.password,
                    email: this.state.email,
                    id: this.state.id
                  });
                  this.props.updateBilling({
                    ...this.state.billing,
                    billing: true
                  });
                }}>
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


export default SignUp;

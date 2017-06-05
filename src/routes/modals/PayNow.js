import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

import PayForm from '../forms/PayForm';

//PayNow

class PayNow extends React.Component {
  static propTypes = {
    chargeClient: PropTypes.func.isRequired,
    login: PropTypes.object.isRequired,
    modalVisible: PropTypes.bool.isRequired,
    makeModal: PropTypes.func.isRequired,
    room: PropTypes.object.isRequired
  };

  constructor(props){
    super(props);
    this.state = {
      name: '',
      credit: '',
      number: '',
      expiration: {
        month: '',
        year: '',
      },
      cvv: '',
    }
  }

  onCreditChange = (e) => {
    this.state[e.target.id] = e.target.value;
    this.setState(this.state);
  }

  onExpirationChange = (e) => {
    this.state["expiration"][e.target.id] = e.target.value;
    this.setState(this.state);
  }

  //makes modal disappear
  pop = (e) => {
    if(e) e.preventDefault();
    this.props.makeModal();
  }

  //submit button turns modalVisible to false and
  //links back to confirmation page
  //link is currently unecessary
  render() {
    return (
      <div className="main-content not-found">
        <Modal show={this.props.modalVisible} >
          <Modal.Header>
            <Modal.Title>Pay Now</Modal.Title>
          </Modal.Header>
            <Modal.Body>
              <form className="login-form">
                <PayForm
                  nameValue={this.state.name}
                  numberValue={this.state.number}
                  cvvValue={this.state.cvv}
                  monthValue={this.state.expiration.month}
                  yearValue={this.state.expiration.year}
                  change={this.onCreditChange}
                  expChange={this.onExpirationChange}
                />
              </form>
            </Modal.Body>
            <Modal.Footer>
              <button type="submit" className="btn btn-primary" onClick={this.pop}>
                <NavLink className="select" to="/book/confirmation" onClick={() => {
                  this.props.chargeClient({credit:this.state, room:this.props.room, login:this.props.login.user});
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


export default PayNow;

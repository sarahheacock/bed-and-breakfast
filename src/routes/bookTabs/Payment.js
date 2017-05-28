import React from 'react';
import PropTypes from 'prop-types';
import Selected from './Selected';
import Login from '../Login';
import { PageHeader } from 'react-bootstrap';
//import Welcome from '../Welcome';

//Payment provides a login --> login contains signup if needed
const Payment = (props) => {

  return (
    <div className="tab-content">
      <Selected room={props.room}/>
      <Login
        updateLogin={props.updateLogin}
        login={props.login}
        updateBilling={props.updateBilling}
        billing={props.billing}

        modalVisible={props.modalVisible}
        makeModal={props.makeModal}

        roomRoom={props.room.room}
      />
    </div>
  )

};

export default Payment;

Payment.propTypes = {
  room: PropTypes.object.isRequired,
  login: PropTypes.object.isRequired,
  updateLogin: PropTypes.func.isRequired,
  billing: PropTypes.object.isRequired,
  updateBilling: PropTypes.func.isRequired,
  modalVisible: PropTypes.bool.isRequired,
  makeModal: PropTypes.func.isRequired
}

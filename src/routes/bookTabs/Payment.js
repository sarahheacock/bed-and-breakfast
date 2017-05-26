import React from 'react';
import PropTypes from 'prop-types';
import Selected from './Selected';
import Login from '../Login';
import Welcome from '../Welcome';

const Payment = (props) => {

  // let next = (props.logged.current) ?
  //   < :
  //   <Login logged={props.logged} />
  //console.log("sel", props.selectedRoom.current);
  return (
    <div>
      <h2>Payment</h2>
      <Selected selectedRoom={props.selectedRoom}/>
      <Login
        login={props.login}
        logged={props.logged}
        modalVisible={props.modalVisible}
        makeModal={props.makeModal}
        selected={props.selectedRoom.current}
      />
    </div>
  )

};

export default Payment;

Payment.propTypes = {
  selectedRoom: PropTypes.object.isRequired,
  logged: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired,
  modalVisible: PropTypes.bool.isRequired,
  makeModal: PropTypes.func.isRequired
}

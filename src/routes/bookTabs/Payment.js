import React from 'react';
import PropTypes from 'prop-types';
import Selected from './Selected';
import Login from '../Login';

//Payment provides a login --> login contains signup if needed
const Payment = (props) => {

  return (
    <div className="tab-content">
      <Selected room={props.room}/>
      <Login
        fetchUser={props.fetchUser}
        updateUser={props.updateUser}
        logout={props.logout}
        login={props.login}

        modalVisible={props.modalVisible}
        makeModal={props.makeModal}

        room={props.room}
      />
    </div>
  )

};

export default Payment;

Payment.propTypes = {
  room: PropTypes.object.isRequired,
  login: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  fetchUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,

  modalVisible: PropTypes.bool.isRequired,
  makeModal: PropTypes.func.isRequired
}

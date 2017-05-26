import React from 'react';
import PropTypes from 'prop-types';
//import moment from 'moment';

const Payment = (props) => {
  const select = (props.selectedRoom.room !== 'undefined') ? props.selectedRoom.room.name : "";
  return (
    <div>
      <h2>Payment</h2>
      <div>
        <p><b>Arrive:</b> {props.selectedRoom.arrive._d.toString()}</p>
        <p><b>Depart:</b> {props.selectedRoom.depart._d.toString()}</p>
        {select}
      </div>
    </div>
  )

};

export default Payment;

Payment.propTypes = {
  selectedRoom: PropTypes.object.isRequired,
}

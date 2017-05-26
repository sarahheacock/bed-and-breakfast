import React from 'react';
import PropTypes from 'prop-types';
//import moment from 'moment';

const Payment = (props) => {
  const select = (props.selectedRoom.room) ? `${props.selectedRoom.room.name} ${props.selectedRoom.room.cost}` : "";
  console.log(props.selectedRoom.depart);
  return (
    <div>
      <h2>Payment</h2>
      <div>
        <p><b>Arrive:</b> {new Date(props.selectedRoom.arrive).toString()}</p>
        <p><b>Depart:</b> {new Date(props.selectedRoom.depart).toString()}</p>
        {select}
      </div>
    </div>
  )

};

export default Payment;

Payment.propTypes = {
  selectedRoom: PropTypes.object.isRequired,
}

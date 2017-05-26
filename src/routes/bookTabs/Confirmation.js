import React from 'react';
import PropTypes from 'prop-types';
import Selected from './Selected';

const Confirmation = (props) => {

  return (
    <div>
      <h2>Confirmation</h2>
      <Selected selectedRoom={props.selectedRoom}/>
    </div>
  )

};

export default Confirmation;

Confirmation.propTypes = {
  selectedRoom: PropTypes.object.isRequired,
}

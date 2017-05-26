import React from 'react';
import PropTypes from 'prop-types';

const Selected = (props) => {
  const select = (props.selectedRoom.room) ? `${props.selectedRoom.room.name} ${props.selectedRoom.room.cost}` : "";

  return (
    <div>
      <p><b>Arrive:</b> {new Date(props.selectedRoom.arrive).toString()}</p>
      <p><b>Depart:</b> {new Date(props.selectedRoom.depart).toString()}</p>
      {select}
    </div>
  )
};

export default Selected;

Selected.propTypes = {
  selectedRoom: PropTypes.object.isRequired,
}

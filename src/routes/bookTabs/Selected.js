import React from 'react';
import PropTypes from 'prop-types';

const Selected = (props) => {
  //if room has not been selected, display only default room dates
  const select = !(props.room.room) ?  "" :
    `${props.room.name.name} ${props.room.name.cost}`;

  return (
    <div>
      <p><b>Arrive:</b> {new Date(props.room.arrive).toString()}</p>
      <p><b>Depart:</b> {new Date(props.room.depart).toString()}</p>
      {select}
    </div>
  )
};

export default Selected;

Selected.propTypes = {
  room: PropTypes.object.isRequired,
  // INITIAL ROOM STATE
  // {
  //   room: false,
  //   name: '',
  //   arrive: moment().toDate().getTime(),
  //   depart: moment().add(1, 'day').toDate().getTime()
  // }
}

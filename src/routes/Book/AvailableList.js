import React from 'react';
import PropTypes from 'prop-types';
import { Route, NavLink, Redirect } from 'react-router-dom';
import Rooms from '../data/roomList';
import Dates from '../data/dates';

const AvailableList = (props) => {
  const begin = Math.round((props.start - Date.now()) / (24*60*60*1000));
  const end = Math.round((props.leave - Date.now()) / (24*60*60*1000));
  const check = [...new Array(end - Math.abs(begin) + 1)].map((x, i) => Dates[begin + i]);
  console.log(check);


  const result = (begin >= end || end < 0 || begin < 0) ?
    "Invalid Entry" :
    Rooms.map((room) => {
      const lookup = check.reduce((a,b) => {return (b[room["room"]] && a);}, true);
      console.log(lookup);
      return(
        (!lookup) ? "" :
        <div className="well room">
          <img className="room-img" src={room.image} alt={room.name} />
          <h3>{room.name}</h3>
          <p>{room.cost}</p>
          <button className="btn btn-primary"><NavLink className="select" to="/book/payment">Select</NavLink></button>
        </div>
      );
    });

  return (
    <div>
    {result}
    </div>
  );
}

export default AvailableList;

AvailableList.propTypes = {
  start: PropTypes.number.isRequired,
  leave: PropTypes.number.isRequired,
}

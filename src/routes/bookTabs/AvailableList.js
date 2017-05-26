import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
//import moment from 'moment';
import Rooms from '../data/roomList';
import Dates from '../data/dates';

const AvailableList = ({start, leave, selectRoom}) => {
    const begin = Math.round((start - Date.now()) / (24*60*60*1000));
    const end = Math.round((leave - Date.now()) / (24*60*60*1000));
    const check = [...new Array(end - Math.abs(begin) + 1)].map((x, i) => Dates[begin + i]);

    const result = (begin >= end || end < 0 || begin < 0) ?
      "Invalid Entry" :
      Rooms.map((room) => {
        const lookup = check.reduce((a,b) => {return (b[room["room"]] && a);}, true);

        return(
          (!lookup) ? "" :
          <div className="well room">
            <img className="room-img" src={room.image} alt={room.name} />
            <h3>{room.name}</h3>
            <p>{room.cost}</p>
            <button className="btn btn-primary">
              <NavLink onClick={(e) => {
                selectRoom({ "current":true, "room":room, "arrive":check[0].date.getTime(), "depart":check[check.length - 1].date.getTime()})
              }} className="select" to="/book/payment">
                Select
              </NavLink>
            </button>
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
  selectRoom: PropTypes.func.isRequired
}

import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Rooms from '../data/roomList';
//Rooms is an array of rooms at the hotel
// {
//   "room": "room1",
//   "name": "Lakeview",
//   "cost": "$249-259",
//   "image": "https://www.atwoodlake.com/wp-content/uploads/2016/08/WhisperingPines-Rooms-LakeView-1-1500x609.jpg",
// },

import Dates from '../data/dates';
//Dates is an array of 365 for each day of the year
//Date[0] is includes the current date
// [{
//   date: Wed Dec 31 1969 19:39:05 GMT-0500 (EST),
//   room1: true,
//   room2: ...
// },...]


//AvailableList uses dates from datepicker to determine available rooms
//each room has a button to call updateRoom to select a room
const AvailableList = (props) => {

  //begin and end zero the arrive and depart props in order to determine position in Date array
  const begin = Math.round((props.arrive - Date.now()) / (24*60*60*1000));
  const end = Math.round((props.depart - Date.now()) / (24*60*60*1000));

  //const check = [...new Array(end - Math.abs(begin) + 1)].map((x, i) => Dates[begin + i]);
  //check sections off the part of the array of the requested dates
  const check = Dates.splice(begin, end - begin + 1);

  //get rid of incorrect date entries
  const result = (begin >= end || end < 0 || begin < 0) ?
    "Invalid Entry" :
    Rooms.map((room, i) => {
      //use room id for each room to determine if this room is avaible
      const lookup = check.reduce((a,b) => {return (b[room["room"]] && a);}, true);

      return(
        <div key={`available${i}`}>
          {(!lookup) ? "" :
          <div className="well text-center">
            <img className="room-img round" src={room.image} alt={room.name} />
            <h3>{room.name}</h3>
            <p>{room.cost}</p>
            <button className="btn btn-primary">
              <NavLink onClick={(e) => {
                props.updateRoom({
                  "room":true,
                  "name":room,
                  "arrive":check[0].date.getTime(),
                  "depart":check[check.length - 1].date.getTime()})
              }} className="select" to="/book/payment">
                Select
              </NavLink>
            </button>
          </div>}
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
  arrive: PropTypes.number.isRequired,
  depart: PropTypes.number.isRequired,
  updateRoom: PropTypes.func.isRequired
}

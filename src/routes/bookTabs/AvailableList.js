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

  //check sections off the part of the array of the requested dates
  const check = props.searchResults;

  //get rid of incorrect date entries
  const result = (check.length < 1) ?
    "Invalid Entry" :
    Rooms.map((room, i) => {
      //use room id for each room to determine if this room is avaible
      //console.log(new Date(props.depart));
      const lookup = check.reduce((a,b) => {
        return (b[room["name"]] > 0 && a);
      }, true);

      return(
        <div key={`available${i}`}>
          {(!lookup) ? "" :
          <div className="well text-center well-option">
            <img className="room-img round" src={room.image} alt={room.name} />
            <h3>{room.name}</h3>
            <p>{room.cost}</p>
            <button className="btn btn-primary">
              <NavLink onClick={(e) => {
                props.updateRoom({
                  "room":true,
                  "name":room,
                  "guests":props.guests,
                  "arrive":new Date(props.arrive).getTime(),
                  "depart":new Date(props.depart).getTime()})
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
  guests: PropTypes.number.isRequired,
  updateRoom: PropTypes.func.isRequired,
  searchResults: PropTypes.array.isRequired
}




// import React from 'react';
// import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';
//
// import Rooms from '../data/roomList';
// //Rooms is an array of rooms at the hotel
// // {
// //   "room": "room1",
// //   "name": "Lakeview",
// //   "cost": "$249-259",
// //   "image": "https://www.atwoodlake.com/wp-content/uploads/2016/08/WhisperingPines-Rooms-LakeView-1-1500x609.jpg",
// // },
//
//
// import axios from 'axios';
// // {"__v":0,
// // "date":"1970-01-01T00:00:45.678Z",
// // "_id":"593318af8891ed00115cbcff",
// // "free":{
// //   "_id":"593318af8891ed00115cbcfe",
// //   "Lily":3,
// //   "Brandywine":7,
// //   "Lakeview":5
// // }}
//
//
// //AvailableList uses dates from datepicker to determine available rooms
// //each room has a button to call updateRoom to select a room
// class AvailableList extends React.Component{
//   static propTypes = {
//     arrive: PropTypes.number.isRequired,
//     depart: PropTypes.number.isRequired,
//     updateRoom: PropTypes.func.isRequired
//   }
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       "availableList": [],
//       "dateArr": []
//     }
//   }
//
//   componentDidUpdate(){
//     //CREATE AN ARRAY OF DATES OBJECTS
//     console.log("hi");
//     let end = this.props.arrive - (24*60*60*1000);
//     const begin = this.props.depart;
//     let dateArr = [];
//
//     while(end >= begin){
//       dateArr.push(end);
//       end = end - (24*60*60*1000);
//     }
//
//     this.state.dateArr = dateArr;
//     this.setState(this.state);
//
//     //console.log(dateArr);
//
//     //USE ARRAY TO CALL AVAILABILITY FOR THAT DAY
//     dateArr.forEach((date) => {
//       axios.get('https://fathomless-meadow-60353.herokuapp.com/hotel/' + date)
//       .then(response => {
//
//         console.log(response);
//         this.setState((prevState) => {
//           return {
//             "availableList": response.data
//           };
//
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     });
//
//   }
//
//   render(){
//     console.log(this.props.arrive);
//     console.log(this.state);
//     return (
//       <div>
//
//       </div>
//     )
//   }
// }
//
//
//
//
//
// export default AvailableList;

import React from 'react';
import PropTypes from 'prop-types';
import { PageHeader } from 'react-bootstrap';
import Rooms from '../data/roomList';

const Upcoming = (props) => {

  const coming = props.login.user.upcoming;
  const rooms = coming.map((room, index) => {
    const roomImg = Rooms.filter((image) => {
      if(room.room === image.name){
        return image;
      }
    });

    return (
      <div className="well room" key={`${index}upcoming`}>
        <h3 className="text-center" >{room.room}</h3>
        <p className="text-center" ><b>Arrive: </b>{(new Date(room.arrive + 5*60*60*1000)).toString()}</p>
        <p className="text-center" ><b>Depart: </b>{(new Date(room.arrive)).toString()}</p>
        <p className="text-center" ><b>Guests: </b>{room.guests}</p>
        <img className="room-img" src={roomImg[0]["image"]} alt={room.room} />
      </div>
    );
  });

  return (
    <div className="main-content">
      <div>{rooms}</div>
    </div>
  );
}

export default Upcoming;

Upcoming.propTypes = {
  login: PropTypes.object.isRequired,
}

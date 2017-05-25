import React from 'react';
import Rooms from '../data/roomList';

const About = () => {
  let rooms = Rooms.map((room) => (
    <div className="well room">
      <img className="room-img" src={room.image} alt={room.name} />
      <h3>{room.name}</h3>
      <p>{room.cost}</p>
    </div>
  ));

  return (
    <div className="main-content">
      <h2>About</h2>
      <div className="flex-container">
        {rooms}
      </div>
    </div>
  );
}

export default About;

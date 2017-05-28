import React from 'react';
import Rooms from './data/roomList';
import { NavLink } from 'react-router-dom';
import { PageHeader } from 'react-bootstrap';

const About = () => {
  const rooms = Rooms.map((room) => (
    <NavLink className="about" id={room.name} key={room.name} to={`/about/${room.name}`}>
      <div className="well room">
        <img className="room-img" src={room.image} alt={room.name} />
        <h3>{room.name}</h3>
        <p>{room.cost}</p>
      </div>
    </NavLink>
  ));

  return (
    <div className="main-content">
      <PageHeader className="page">About</PageHeader>
      <div className="flex-container">
        {rooms}
      </div>
    </div>
  );

}


export default About;

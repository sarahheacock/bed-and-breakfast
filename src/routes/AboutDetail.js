import React from 'react';
import PropTypes from 'prop-types';
import { PageHeader } from 'react-bootstrap';

import '../stylesheets/aboutDetail.css';

const AboutDetail = (props) => {

  return (
    <div className="main-content">
      <PageHeader>{props.room.name} <small>{props.room.cost}</small></PageHeader>
      <div className="text-center content-center">
        <div className="well detail text-center">
          <img className="detail-img" src={props.room.image} alt={props.room.name} />
          <div className="description">
            <p>{props.room.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutDetail;

AboutDetail.propTypes = {
  room: PropTypes.object.isRequired
}

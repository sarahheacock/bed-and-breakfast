import React from 'react';
import PropTypes from 'prop-types';
import { PageHeader } from 'react-bootstrap';
import '../index.css';

const AboutDetail = (props) => {

  return (
    <div>
      <PageHeader>{props.room.name} <small>{props.room.cost}</small></PageHeader>
      <div className="text-center">
        <div className="well detail text-center">

          <img className="img-fluid detail-img rounded" src={props.room.image} alt={props.room.name} />
          <p>{props.room.description}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutDetail;

AboutDetail.propTypes = {
  room: PropTypes.object.isRequired
}

import React from 'react';
import PropTypes from 'prop-types';
import { PageHeader } from 'react-bootstrap';

const Personal = (props) => {
  return (
    <div className="main-content">
      <div><b>Email: </b>{props.login.user.email}</div>
      <div><b>Billing Address: </b>{props.login.user.billing}</div>
    </div>
  );
}

export default Personal;

Personal.propTypes = {
  login: PropTypes.object.isRequired,
}

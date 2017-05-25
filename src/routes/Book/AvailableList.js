import React from 'react';
import PropTypes from 'prop-types';

import Rooms from '../data/roomList';
import Dates from '../data/dates';

const AvailableList = (props) => {
  const begin = Math.round((props.start - Date.now()) / (24*60*60*1000));
  const end = Math.round((props.leave - Date.now()) / (24*60*60*1000));
  console.log(begin);
  console.log(end);
  const result = (begin >= end || end < 0 || begin < 0) ?
    "Invalid Entry" :
    "yay!"
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

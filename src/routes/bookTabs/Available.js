import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import AvailableList from './AvailableList';
import 'react-datepicker/dist/react-datepicker.css';

class Available extends Component {
  static propTypes = {
    selectRoom: PropTypes.func.isRequired,
    selectedRoom: PropTypes.object.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      arrive: props.selectedRoom.arrive,
      depart: props.selectedRoom.depart,
    };
    // this.handleStart = this.handleStart.bind(this);
    // this.handleLeave = this.handleLeave.bind(this);
  }

  handleStart = (date) => {
    this.setState({
      arrive: date._d.getTime(),
    });
  }


  handleLeave = (date) => {
    this.setState({
      depart: date.toDate().getTime(),
    });
    console.log("date", date.toDate());
  }

  render() {
    return (
      <div>
      <h2>Availability</h2>
      <DatePicker
        selected={moment(this.state.arrive)}
        onChange={this.handleStart}
      />
      <DatePicker
        selected={moment(this.state.depart)}
        onChange={this.handleLeave}
      />
      <AvailableList
        start={this.state.arrive}
        leave={this.state.depart}
        selectRoom={this.props.selectRoom}
      />
      </div>

    );
  }
}

export default Available;

// <DatePicker
//   selected={moment(this.props.selectedRoom.arrive)}
//   onSelect={this.handleStart}
// />
// <DatePicker
//   selected={moment(this.props.selectedRoom.depart)}
//   onChange={this.handleLeave}
// />

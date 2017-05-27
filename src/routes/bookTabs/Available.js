import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import AvailableList from './AvailableList';
import 'react-datepicker/dist/react-datepicker.css';

//selects date from DatePicker and passes date to AvailableList
//AvailableList determines what is actually available and calls updateRoom through click
class Available extends Component {
  static propTypes = {
    updateRoom: PropTypes.func.isRequired,
    room: PropTypes.object.isRequired,
    // INITIAL ROOM STATE
    // {
    //   room: false,
    //   name: '',
    //   arrive: moment().toDate().getTime(),
    //   depart: moment().add(1, 'day').toDate().getTime()
    // }
  }
  constructor(props) {
    super(props);
    this.state = {
      arrive: props.room.arrive,
      depart: props.room.depart,
    };
  }

  handleStart = (date) => {
    this.setState({
      arrive: date.toDate().getTime(),
    });
  }


  handleLeave = (date) => {
    this.setState({
      depart: date.toDate().getTime(),
    });
  }

//selected determined by moment(millisecond).
//This millisecond was initialized in reducer to current date or moment().toDate().getTime()
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
        arrive={this.state.arrive}
        depart={this.state.depart}
        updateRoom={this.props.updateRoom}
      />
      </div>

    );
  }
}

export default Available;

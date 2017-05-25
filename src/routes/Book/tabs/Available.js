import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import AvailableList from '../AvailableList';
import 'react-datepicker/dist/react-datepicker.css';

class Available extends Component {
  // constructor(props) {
  //   this.state = {
  //     startDate: moment()
  //   };
  // }
  componentWillMount() {
    this.setState({
      startDate: moment(),
      leaveDate: moment().add(1, 'day'),
      valid: false
    });
    this.handleStart = this.handleStart.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  handleStart(date) {
    this.setState({
      startDate: date,
    });
    this.handleValid;
  }

  handleLeave(date) {
    this.setState({
      leaveDate: date,
    });
  }



  render() {
    return (
      <div>
      <h2>Availability</h2>
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleStart}
      />
      <DatePicker
        selected={this.state.leaveDate}
        onChange={this.handleLeave}
      />
      <AvailableList start={this.state.startDate._d.getTime()} leave={this.state.leaveDate._d.getTime()} />
      </div>

    );
  }
}
// const Available = () => (
//   <div>
//     <h2>Availability</h2>
//     <Calendar format='MM/DD/YYYY'  />
//     <AvailableList />
//   </div>
// );
//
export default Available;

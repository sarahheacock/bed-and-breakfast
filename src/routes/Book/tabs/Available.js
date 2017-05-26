import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import AvailableList from '../AvailableList';
import 'react-datepicker/dist/react-datepicker.css';

class Available extends Component {
  static propTypes = {
    selectDate: PropTypes.func.isRequired,
    selectRoom: PropTypes.func.isRequired,
    selectedRoom: PropTypes.object.isRequired,
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     startDate: props.selectedRoom.arrive,
  //     leaveDate: props.selectedRoom.depart,
  //   };
  //   //this.handleStart = this.handleStart.bind(this);
  //   // this.handleLeave = this.handleLeave.bind(this);
  // }

  //componentDidUpdate(){
  // changeDate = (date) => {
  //   //if(date) date.preventDefault();
  //   this.props.selectDate(this.state.startDate._d.getTime(), this.state.leaveDate._d.getTime());
  // }

  //handleStart(date) {
  handleStart = (date) => {
    //if(date) e.preventDefault();
    //this.props.selectDate("arrive", date);
    // this.setState({
    //   leaveDate: date,
    // });
    //this.props.selectDate(this.state.startDate._d.getTime(), this.state.leaveDate._d.getTime());
    //this.update();
    this.props.selectDate(date._d.getTime(), this.props.selectedRoom.depart);
  }

  //handleLeave(date) {
  handleLeave = (date) => {
    //if(e) e.preventDefault();
    //this.props.selectDate("depart", date);
    // this.setState({
    //   leaveDate: date,
    // });
    console.log("date", date._d.getTime());
    //console.log("props", this.props.selectedRoom.arrive);
    this.props.selectDate(this.props.selectedRoom.arrive, date._d.getTime());
    //this.update();
  }

  render() {
    return (
      <div>
      <h2>Availability</h2>
      <DatePicker
        selected={moment(this.props.selectedRoom.arrive)}
        onSelect={this.handleStart}

      />
      <DatePicker
        selected={moment(this.props.selectedRoom.depart)}
        onSelect={this.handleLeave}

      />
      <AvailableList
        start={this.props.selectedRoom.arrive}
        leave={this.props.selectedRoom.depart}
        selectRoom={this.props.selectRoom}
      />
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

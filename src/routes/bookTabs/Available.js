import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { PageHeader, ControlLabel, FormGroup, Row, Col } from 'react-bootstrap';

import AvailableList from './AvailableList';


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
      guests: props.room.guests
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

  handleGuests = (e) => {
    this.setState({
      guests: e.target.value,
    });
  }

//selected determined by moment(millisecond).
//This millisecond was initialized in reducer to current date or moment().toDate().getTime()
  render() {
    return (
      <div className="tab-content">

      <form className="room-form" >
      <div class="calendars">
        <Row className="clearfix text-center">
        <FormGroup>
          <ControlLabel>Number of Guests</ControlLabel><br />
          <select
            className="form-control guest-num"
            id="guest-num"
            onChange={this.handleGuests}
            value={this.state.guests}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </FormGroup>


        <FormGroup>
          <ControlLabel>Arrival</ControlLabel><br />
          <DatePicker

            id="arrivalPicker"
            className="form-control date pull-left"
            selected={moment(this.state.arrive)}
            onChange={this.handleStart}
            minDate={moment()}
            maxDate={moment().add(365, "days")}
          />
        </FormGroup>

        <FormGroup>
          <ControlLabel>Departure</ControlLabel><br />
          <DatePicker

            id="departPicker"
            className="form-control date pull-right"
            selected={moment(this.state.depart)}
            onChange={this.handleLeave}
            minDate={moment()}
            maxDate={moment().add(365, "days")}
          />
        </FormGroup>

        </Row>
</div>

      </form>
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

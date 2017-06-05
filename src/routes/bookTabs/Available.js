import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { ControlLabel, FormGroup, Row, Col } from 'react-bootstrap';

import AvailableList from './AvailableList';


//selects date from DatePicker and passes date to AvailableList
//AvailableList determines what is actually available and calls updateRoom through click

class Available extends Component {
  static propTypes = {
    searchResults: PropTypes.array.isRequired,
    fetchSearch: PropTypes.func.isRequired,
    updateRoom: PropTypes.func.isRequired,
    room: PropTypes.object.isRequired,
    // INITIAL ROOM STATE
    // {
    //   room: false,
    //   name: {},
    //   arrive: moment().toDate().getTime(),
    //   depart: moment().add(1, 'day').toDate().getTime()
    // }
  }
  constructor(props) {
    super(props);
    this.state = {
      arrive: props.room.arrive,
      depart: props.room.depart,
      guests: props.room.guests,
      searchResults: props.searchResults,
    };
  }

  handleStart = (date) => {
    this.setState({
      arrive: date.toDate().getTime(),
    }, () => this.props.fetchSearch(this.state.arrive, this.state.depart));
  }


  handleLeave = (date) => {
    this.setState({
      depart: date.toDate().getTime(),
    }, () => this.props.fetchSearch(this.state.arrive, this.state.depart));
  }

  handleGuests = (e) => {
    this.setState({
      guests: e.target.value,
    });
  }

//selected determined by moment(millisecond).
//This millisecond was initialized in reducer to current date or moment().toDate().getTime()
  render() {
    const guestOptions = [...new Array(6)].map((ob, i) => (
      <option value={i} key={`guest${i}`}>
        {i}
      </option>
    ));

    return (
      <div className="tab-content text-center">
        <form className="room-form" >
          <FormGroup>
            <Row className="clearfix text-center">
              <Col sm={4}>
                <ControlLabel>Number of Guests</ControlLabel><br />
              </Col>
              <Col sm={4}>
                <select
                  className="form-control guest-num"
                  id="guest-num"
                  onChange={this.handleGuests}
                  value={this.state.guests}
                >
                  {guestOptions}
                </select>
              </Col>
              </Row>
          </FormGroup>

          <FormGroup>
            <Row className="clearfix text-center">
              <Col sm={4}>
                <ControlLabel>Arrival</ControlLabel>
              </Col>
              <Col sm={4}>
                <DatePicker
                  id="arrivalPicker"
                  className="form-control date pull-left"
                  selected={moment(this.state.arrive)}
                  onChange={this.handleStart}
                  minDate={moment()}
                  maxDate={moment().add(365, "days")}
                />
              </Col>
            </Row>
          </FormGroup>

          <FormGroup>
            <Row>
              <Col sm={4}>
                <ControlLabel>Departure</ControlLabel>
              </Col>
              <Col sm={4}>
                <DatePicker
                  id="departPicker"
                  className="form-control date pull-right"
                  selected={moment(this.state.depart)}
                  onChange={this.handleLeave}
                  minDate={moment()}
                  maxDate={moment().add(365, "days")}
                />
              </Col>
            </Row>
          </FormGroup>
        </form>

        <AvailableList
          arrive={this.state.arrive}
          depart={this.state.depart}
          guests={this.state.guests}
          updateRoom={this.props.updateRoom}
          searchResults={this.props.searchResults}
        />
      </div>

    );
  }
}

export default Available;

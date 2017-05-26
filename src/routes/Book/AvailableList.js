import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Route, NavLink, Redirect } from 'react-router-dom';
import moment from 'moment';
import Rooms from '../data/roomList';
import Dates from '../data/dates';

//const AvailableList = (props) => {
class AvailableList extends Component {
  static propTypes = {
    selectDate: PropTypes.func.isRequired,
    selectRoom: PropTypes.func.isRequired,
    start: PropTypes.number.isRequired,
    leave: PropTypes.number.isRequired,
    selectedRoom: PropTypes.object.isRequired,
  }

  // componentDidUpdate(){
  //   const begin = Math.round((this.props.start - Date.now()) / (24*60*60*1000));
  //   const end = Math.round((this.props.leave - Date.now()) / (24*60*60*1000));
  //    this.props.selectDate(begin, end);
  // }

  render (){
    const begin = Math.round((this.props.start - Date.now()) / (24*60*60*1000));
    const end = Math.round((this.props.leave - Date.now()) / (24*60*60*1000));
    const check = [...new Array(end - Math.abs(begin) + 1)].map((x, i) => Dates[begin + i]);
    //console.log(moment(this.props.leave));


    const result = (begin >= end || end < 0 || begin < 0) ?
      "Invalid Entry" :
      Rooms.map((room) => {
        const lookup = check.reduce((a,b) => {return (b[room["room"]] && a);}, true);
        console.log(lookup);
        return(
          (!lookup) ? "" :
          <div className="well room">
            <img className="room-img" src={room.image} alt={room.name} />
            <h3>{room.name}</h3>
            <p>{room.cost}</p>
            <button className="btn btn-primary">
              <NavLink onClick={() => {this.props.selectRoom(room);}} className="select" to="/book/payment">
                Select
              </NavLink>
            </button>
          </div>
        );
      });

    return (
      <div>
      {result}
      </div>
    );
  }

}

export default AvailableList;

AvailableList.propTypes = {
  start: PropTypes.number.isRequired,
  leave: PropTypes.number.isRequired,
  //selectDate: PropTypes.func.isRequired,
  selectRoom: PropTypes.func.isRequired
}

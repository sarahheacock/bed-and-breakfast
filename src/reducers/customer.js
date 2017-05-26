import * as CustomerActionTypes from '../actiontypes/customer';
import moment from 'moment';

// const obj = {
//   logged: false,
//   selectedRoom: {
//     room: 'undefined',
//     arrive: moment(),
//     depart: moment().add(1, 'day')
//   }
// };
const select = {
  room: false,
  arrive: moment().toDate().getTime(),
  depart: moment().add(1, 'day').toDate().getTime()
}

export default function Customer(state={selectedRoom:select, logged:false}, action){
  switch (action.type) {

    case CustomerActionTypes.SELECT_ROOM: {
      console.log("action", Date(action.room.depart))
      return {
        ...state,
        selectedRoom: action.room
      }
    }

    default:
      return state;
  }
}

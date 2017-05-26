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
  room: 'undefined',
  arrive: moment()._d.getTime(),
  depart: moment().add(1, 'day')._d.getTime()
}

export default function Customer(state={selectedRoom:select, logged:false}, action){
  switch (action.type) {
    case CustomerActionTypes.SELECT_DATE: {
      let newDate = {
        ...state.selectedRoom
      };
      newDate["arrive"] = action.come;
      newDate["depart"] = action.go;
      return {
        ...state,
        selectedRoom: newDate
      }
    }

    case CustomerActionTypes.SELECT_ROOM: {
      let select = {
        ...state.selectedRoom
      };
      select.room = action.room;
      return {
        ...state,
        selectedRoom: select
      }
    }

    default:
      return state;
  }
}

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
// address: props.logged.address,
// name: props.logged.name,
// credit: props.logged.credit,
// expiration: props.logged.expiration,
// cvv: props.logged.expiration

const select = {
  current: false,
  room: '',
  arrive: moment().toDate().getTime(),
  depart: moment().add(1, 'day').toDate().getTime()
}

const log = {
  current: false,
  email: '',
  id: '',
  password: '',
  address: {
    line1: '',
    line2: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  },
  credit: {
    number: '',
    expiration: '',
    cvv: '',
  }
}

export default function Customer(state={selectedRoom:select, logged:log, modalVisible:false}, action){
  switch (action.type) {

    case CustomerActionTypes.SELECT_ROOM: {
      //console.log("action", Date(action.room.depart))
      return {
        ...state,
        selectedRoom: action.room
      }
    }

    case CustomerActionTypes.LOGIN: {
      console.log("action", action.info);
      return {
        ...state,
        logged: {
          ...state.logged,
          current: "true",
          email: action.info.email,
          id: action.info.id,
          password: action.info.password
        }
      }
    }

    case CustomerActionTypes.MAKE_MODAL: {
      // let info = action.info;
      // info.id = action.info.email.slice(0, action.info.email.indexOf('@'));
      return {
        ...state,
        modalVisible: !(state.modalVisible)
      }
    }

    default:
      return state;
  }
}

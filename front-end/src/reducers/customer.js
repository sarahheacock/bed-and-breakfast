import * as CustomerActionTypes from '../actiontypes/customer';
import moment from 'moment';

const select = {
  room: false,
  name: '',
  arrive: moment().toDate().getTime(),
  depart: moment().add(1, 'day').toDate().getTime(),
  guests: 1
};

const log = {
  login: false,
  email: '',
  id: '',
  password: '',
};

const bill = {
  billing: false,
  line1: '',
  line2: '',
  city: '',
  state: '',
  zip: '',
  country: 'United States'
};

const c = {
  credit: false,
  number: '',
  expiration: {
    month: '',
    year: '',
  },
  cvv: '',
  name: '',
};

export default function Customer(state={room:select, billing:bill, modalVisible:false, login:log, credit:c}, action){
  switch (action.type) {

    case CustomerActionTypes.UPDATE_ROOM: {
      return {
        ...state,
        room: action.room
      }
    }

    case CustomerActionTypes.UPDATE_LOGIN: {
      return {
        ...state,
        login: action.login
      }
    }

    case CustomerActionTypes.UPDATE_BILLING: {
      return {
        ...state,
        billing: action.billing
      }
    }

    case CustomerActionTypes.UPDATE_CREDIT: {
      return {
        ...state,
        credit: action.credit
      }
    }

    case CustomerActionTypes.MAKE_MODAL: {
      return {
        ...state,
        modalVisible: !(state.modalVisible)
      }
    }

    default:
      return state;
  }
}
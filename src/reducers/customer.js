import * as CustomerActionTypes from '../actiontypes/customer';
import moment from 'moment';

const temp = new Date().toString().split(' ');
const NOW = new Date(temp[0] + " " + temp[1] + " " + temp[2] + " " + temp[3] + " 10:00:00").getTime();

//==============================================================
//state={} is overwritten by initialState provided in index.js
export default function Customer(state={}, action){
  switch (action.type) {
    case CustomerActionTypes.MAKE_MODAL: {
      return {
        ...state,
        modalVisible: !(state.modalVisible)
      }
    }

    case CustomerActionTypes.UPDATE_ROOM: {
      return {
        ...state,
        room: action.room
      }
    }

    case CustomerActionTypes.LOGOUT: {
      const newLogin = {
        login: false,
        user: {}
      };
      return {
        ...state,
        login: newLogin
      }
    }

    case CustomerActionTypes.FETCH_SEARCH_SUCCESS: {
      return {
        ...state,
        searchResults: action.results
      }
    }

    case CustomerActionTypes.UPDATE_UPCOMING_SUCCESS: {
      const newLogin = {
        login: true,
        user: action.data
      };
      const newRoom = {
        room: false,
        guests: 2,
        name: {},
        arrive: NOW,
        depart: NOW + 24*60*60*1000,
      }
      return {
        ...state,
        login: newLogin,
        room: newRoom,
      }
    }

    case CustomerActionTypes.USER_SUCCESS: {
      const newLogin = {
        login: true,
        user: action.data
      };
      console.log(newLogin);
      return {
        ...state,
        login: newLogin
      }
    }

    default:
      return state;
  }
}

import * as CustomerActionTypes from '../actiontypes/customer';
import moment from 'moment';


//==============================================================
//state={} is overwritten by initialState provided in index.js
export default function Customer(state={}, action){
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

    case CustomerActionTypes.FETCH_SEARCH_SUCCESS: {
      return {
        ...state,
        searchResults: action.results
      }
    }

    case CustomerActionTypes.POST_SEARCH_SUCCESS: {
      return {
        ...state,
        //CHANGE LATER
        searchResults: action.results
      }
    }


    default:
      return state;
  }
}

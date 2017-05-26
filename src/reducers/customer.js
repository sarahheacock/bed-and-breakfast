import * as CustomerActionTypes from '../actiontypes/customer';

const obj = {
  logged: false,
  selectedRoom: null
};

export default function Customer(state={...obj}, action){
  switch (action.type) {
    case CustomerActionTypes.SELECT_ROOM: {
      return {
        ...state,
      }
    }
      
    default:
      return state;
  }
}

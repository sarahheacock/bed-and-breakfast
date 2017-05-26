import * as CustomerActionTypes from '../actiontypes/customer';

export const selectRoom = (room) => {
  return {
    type: CustomerActionTypes.SELECT_ROOM,
    room,
  }
}

export const login = (info) => {
  return {
    type: CustomerActionTypes.LOGIN,
    info,
  }
}

export const makeModal = () => {
  return {
    type: CustomerActionTypes.MAKE_MODAL,
  }
}

// export const selectDate = (come, go) => {
//   return {
//     type: CustomerActionTypes.SELECT_ROOM,
//     come,
//     go
//   }
// }

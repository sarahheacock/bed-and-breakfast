import * as CustomerActionTypes from '../actiontypes/customer';

export const selectRoom = (room) => {
  return {
    type: CustomerActionTypes.SELECT_ROOM,
    room,
  }
}

// export const selectDate = (come, go) => {
//   return {
//     type: CustomerActionTypes.SELECT_ROOM,
//     come,
//     go
//   }
// }

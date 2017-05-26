import * as CustomerActionTypes from '../actiontypes/customer';

export const selectRoom = (room) => {
  return {
    type: CustomerActionTypes.SELECT_ROOM,
    room
  }
}

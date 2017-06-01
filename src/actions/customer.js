import * as CustomerActionTypes from '../actiontypes/customer';

export const updateRoom = (room) => {
  return {
    type: CustomerActionTypes.UPDATE_ROOM,
    room,
  }
}

export const updateLogin = (login) => {
  return {
    type: CustomerActionTypes.UPDATE_LOGIN,
    login,
  }
}

export const updateBilling = (billing) => {
  return {
    type: CustomerActionTypes.UPDATE_BILLING,
    billing,
  }
}

export const updateCredit = (credit) => {
  return {
    type: CustomerActionTypes.UPDATE_CREDIT,
    credit,
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

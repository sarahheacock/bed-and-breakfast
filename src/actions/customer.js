import * as CustomerActionTypes from '../actiontypes/customer';
import axios from 'axios';

const apiUrl = 'https://fathomless-meadow-60353.herokuapp.com/hotel';
// {"__v":0,
// "date":"1970-01-01T00:00:45.678Z",
// "_id":"593318af8891ed00115cbcff",
// "free":{
//   "_id":"593318af8891ed00115cbcfe",
//   "Lily":3,
//   "Brandywine":7,
//   "Lakeview":5
// }}

const userUrl = 'https://sleepy-island-69507.herokuapp.com/user';
// [
//   {
//     "_id": "59318a8af71e81029bbd3223",
//     "email": "Adam",
//     "__v": 1,
//     "upcoming": [
//       {
//         "arrive": 1234567,
//         "depart": 2345677,
//         "guests": 2,
//         "room": "Lily",
//         "_id": "593434f228d27310bc60814a",
//         "createdAt": "2017-06-04T16:27:30.209Z"
//       }
//     ]
//   }
// ]
export const makeModal = () => {
  return {
    type: CustomerActionTypes.MAKE_MODAL,
  }
}

export const updateRoom = (room) => {
  return {
    type: CustomerActionTypes.UPDATE_ROOM,
    room,
  }
}

export const logout = () => {
  return {
    type: CustomerActionTypes.LOGOUT,
  }
}

//=============GET AVAILABLE ROOMS==============================
// Sync Action
// (2) SUCCESS/UPDATE SEARCHRESULTS PROP
export const fetchSearchSuccess = (results) => {
  //console.log("search success");
  return {
    type: CustomerActionTypes.FETCH_SEARCH_SUCCESS,
    results
  }
};
//Async Action
//(1) GET ROOMS FROM DB USING DATES
export const fetchSearch = (arrive, depart) => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  return (dispatch) => {
    //CREATE AN ARRAY OF DATES OBJECTS
    let end = depart - (24*60*60*1000);
    const begin = arrive;
    let dateArr = [];
    let results = [];

    while(end >= begin){
      dateArr.push(end);
      end = end - (24*60*60*1000);
    }

    //USE ARRAY TO CALL AVAILABILITY FOR THAT DAY
    return dateArr.forEach((date) => {
      //returns a promise
      axios.get(`${apiUrl}/${date}`)
      .then(response => {

        results.push(response.data.free);
        //dispatch another action
        //to consume data
        if(results.length === dateArr.length){
          //console.log(dispatch(fetchSearchSuccess(results)));
          dispatch(fetchSearchSuccess(results));
        }
      })
      .catch((error) => {
        console.log(error);
      });
    });
  };
};

//=============RESERVE ROOM=====================================
// (4) SUCCESS UPDATE LOGIN.USER.UPCOMING AND ROOM PROP
export const updateUpcomingSuccess = (data) => {
  return {
    type: CustomerActionTypes.UPDATE_UPCOMING_SUCCESS,
    data
  }
}

// (3) UPDATE CLIENT'S ACCOUNT
export const updateUpcoming = (data) => {
  return (dispatch) => {
    //post("/:userID/:password/upcoming"
    console.log("login", data.login);
      return axios.post(`${userUrl}/${data.login.email}/${data.login.password}/upcoming`, {
        "arrive": data.room.arrive,
        "depart": data.room.depart,
        "guests": data.room.guests,
        "room": data.room.name.name
      })
      .then(response => {
        dispatch(updateUpcomingSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
}


// (2) GET RID OF ROOM IN DB
//Async Action
//room is really room prop that holds the selection
export const updateSearch = (data) => {
  // Returns a dispatcher function
  // that dispatches an action at a later time
  console.log(data.login);
  return (dispatch) => {
    //CREATE AN ARRAY OF DATES OBJECTS
    let end = data.room.depart - (24*60*60*1000);
    const begin = data.room.arrive;
    let dateArr = [];
    let results = [];

    while(end >= begin){
      dateArr.push(end);
      end = end - (24*60*60*1000);
    }

    //USE ARRAY TO CALL AVAILABILITY FOR THAT DAY
    return dateArr.forEach((date) => {
      //returns a promise
      //post("/:availableID/:roomName/reserve-:dir"
      axios.post(`${apiUrl}/${date}/${data.room.name.name}/reserve-reserve`)
      .then(response => {

        results.push(response.data.free);
        //dispatch another action
        //to consume data
        if(results.length === dateArr.length){
          console.log("available post results", results);
          dispatch(updateUpcoming(data));
        }
      })
      .catch((error) => {
        console.log(error);
      });
    });
  };
};


//(1) CHARGE CLIENT
//need to add later
export const chargeClient = (clientInfo) => {
  console.log(clientInfo.login);
  return (dispatch) => {
    return dispatch(updateSearch({room:clientInfo.room, login:clientInfo.login}));
  }
};


//==============LOGIN CLIENT======================================
//(2) SUCCESS/UPDATE LOGIN PROP
export const userSuccess = (data) => {
  return {
    type: CustomerActionTypes.USER_SUCCESS,
    data
  }
}

// (1) GET CLIENT'S ACCOUNT
export const fetchUser = (formData) => {
  return (dispatch) => {
    //get("/:userID/:password/"
      return axios.get(`${userUrl}/${formData.email}/${formData.password}`)
      .then(response => {
        dispatch(userSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
}

//==============CREATE CLIENT=====================================
// (2) SUCCESS/UPDATE LOGIN PROP
// export const updateUserSuccess = (data) => {
//   return {
//     type: CustomerActionTypes.UPDATE_USER_SUCCESS,
//     data
//   }
// }

// (1) UPDATE CLIENT'S ACCOUNT
export const updateUser = (formData) => {
  return (dispatch) => {
    //post("/:userID/:password/upcoming"
      return axios.post(`${userUrl}/`, {
        "email": formData.email,
        "password": formData.password,
        "billing": formData.billing,
      })
      .then(response => {
        console.log(response.data);
        dispatch(userSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
}


//
// export const updateLoginSuccess = (login) => {
//   return {
//     type: CustomerActionTypes.UPDATE_LOGIN_SUCCESS,
//     login,
//   }
// }
//
//
//
// export const updateBilling = (billing) => {
//   return {
//     type: CustomerActionTypes.UPDATE_BILLING,
//     billing,
//   }
// }
//
// export const updateCredit = (credit) => {
//   return {
//     type: CustomerActionTypes.UPDATE_CREDIT,
//     credit,
//   }
// }
//





// Sync Action
// export const postSearchSuccess = (results) => {
//   //console.log("search success");
//   return {
//     type: CustomerActionTypes.POST_SEARCH_SUCCESS,
//     results
//   }
// };

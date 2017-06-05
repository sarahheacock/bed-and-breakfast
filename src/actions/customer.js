import * as CustomerActionTypes from '../actiontypes/customer';
import axios from 'axios';

const apiUrl = 'https://fathomless-meadow-60353.herokuapp.com/hotel';
const userUrl = 'https://sleepy-island-69507.herokuapp.com/user';


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
      return axios.post(`${userUrl}/${data.login._id}/upcoming`, {
        "arrive": data.room.arrive,
        "depart": data.room.depart,
        "guests": data.room.guests,
        "room": data.room.name.name
      })
      .then(response => {
        console.log("response data", response.data);
        dispatch(updateUpcomingSuccess(response.data));
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
      return axios.get(`${userUrl}/authenticate/${formData.email}/${formData.password}`)
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

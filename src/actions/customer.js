import * as CustomerActionTypes from '../actiontypes/customer';
import axios from 'axios';
// {"__v":0,
// "date":"1970-01-01T00:00:45.678Z",
// "_id":"593318af8891ed00115cbcff",
// "free":{
//   "_id":"593318af8891ed00115cbcfe",
//   "Lily":3,
//   "Brandywine":7,
//   "Lakeview":5
// }}



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

// API URL
const apiUrl = 'https://fathomless-meadow-60353.herokuapp.com/hotel/';
// Sync Action
export const fetchSearchSuccess = (results) => {
  //console.log("search success");
  return {
    type: CustomerActionTypes.FETCH_SEARCH_SUCCESS,
    results
  }
};
//Async Action
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
      axios.get(`${apiUrl}${date}`)
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

// Sync Action
export const postSearchSuccess = (results) => {
  //console.log("search success");
  return {
    type: CustomerActionTypes.POST_SEARCH_SUCCESS,
    results
  }
};
//Async Action
export const postSearch = (arrive, depart, roomName) => {
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
      axios.post(`${apiUrl}${date}/${roomName}/reserve-reserve`)
      .then(response => {

        results.push(response.data.free);
        //dispatch another action
        //to consume data
        if(results.length === dateArr.length){
          //console.log(dispatch(fetchSearchSuccess(results)));
          dispatch(postSearchSuccess(results));
        }
      })
      .catch((error) => {
        console.log(error);
      });
    });
  };
};

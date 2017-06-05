import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import axios from 'axios';

import CustomerReducer from './reducers/customer';
import App from './containers/App';
//import registerServiceWorker from './registerServiceWorker';

import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './stylesheets/index.css';

//========================================================================================

const temp = new Date().toString().split(' ');
let NOW = new Date(temp[0] + " " + temp[1] + " " + temp[2] + " " + temp[3] + " 10:00:00").getTime();

const select = {
  room: false,
  name: '',
  arrive: NOW,
  depart: NOW + 24*60*60*1000,
  guests: 2
};

const log = {
  login: false,
  user: {}
};



//=======================================================================
let results = [];

axios.get(`https://fathomless-meadow-60353.herokuapp.com/hotel/${select.arrive}`)
.then(response => {
  results.push(response.data.free);
  //when axios is complete
  if(results.length === 1) {
    const initialState = {
      room:select,
      modalVisible:false,
      login:log,
      searchResults:results
    };

    const store = createStore(
      CustomerReducer, initialState, applyMiddleware(thunk)
    );
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );
  }
})
.catch((error) => {
  console.log(error);
});

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


//redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CustomerActionCreators from '../actions/customer';

import Rooms from '../routes/data/roomList';

//components
import Header from './Header';
import About from '../routes/About';
import AboutDetail from '../routes/AboutDetail';
import Book from '../routes/Book';
import Home from '../routes/Home';
import Login from '../routes/Login';
//import SignUp from '../routes/SignUp';
import Welcome from '../routes/Welcome';
import NotFound from '../routes/NotFound';


class App extends Component {
  static propTypes = {
    room: PropTypes.object.isRequired,
    //billing: PropTypes.object.isRequired,
    login: PropTypes.object.isRequired,
    //credit: PropTypes.object.isRequired,
    modalVisible: PropTypes.bool.isRequired,
    searchResults: PropTypes.array.isRequired
  }

  render(){
    const{ dispatch, room, login, modalVisible, searchResults } = this.props;
    //turns an object whose values are action creators (functions)
    //and wraps in dispatch (what causes state change)
    const makeModal = bindActionCreators(CustomerActionCreators.makeModal, dispatch);
    const updateRoom = bindActionCreators(CustomerActionCreators.updateRoom, dispatch);
    const logout = bindActionCreators(CustomerActionCreators.logout, dispatch);
    const fetchSearch = bindActionCreators(CustomerActionCreators.fetchSearch, dispatch);
    const chargeClient = bindActionCreators(CustomerActionCreators.chargeClient, dispatch);
    const fetchUser = bindActionCreators(CustomerActionCreators.fetchUser, dispatch);
    const updateUser = bindActionCreators(CustomerActionCreators.updateUser, dispatch);


    console.log("login", login);
    console.log("room", room);
    console.log("searchResults", searchResults);

    const roomRoutes = Rooms.map((room) => (
      <Route key={`route${room.name}`} path={`/about/${room.name}`} render={() => (
        <AboutDetail
          room={room}
        />
      )}
      />
    ));

    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Header
            login={login}
          />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            {roomRoutes}
            <Route path="/book" render={ () => (
              <Book
                chargeClient={chargeClient}
                fetchUser={fetchUser}
                updateUser={updateUser}
                logout={logout}
                login={login}

                updateRoom={updateRoom}
                room={room}

                fetchSearch={fetchSearch}
                searchResults={searchResults}

                modalVisible={modalVisible}
                makeModal={makeModal}
              />) }
            />
            <Route path="/login" render={ () => (
              <Login
                fetchUser={fetchUser}
                updateUser={updateUser}
                login={login}
                logout={logout}

                room={room}

                modalVisible={modalVisible}
                makeModal={makeModal}
              />) }
            />

            <Route path="/welcome/:name" render={ () => (
              <Welcome
                login={login}
              />
            )} />

            <Route component={NotFound} />
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => (
  {
    room: state.room,
    login: state.login,
    modalVisible: state.modalVisible,
    searchResults: state.searchResults
  }
);


//mapDispatchToProps(dispatch, [ownProps]): dispatchProps

export default connect(mapStateToProps)(App);

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
    billing: PropTypes.object.isRequired,
    login: PropTypes.object.isRequired,
    credit: PropTypes.object.isRequired,
    modalVisible: PropTypes.bool.isRequired
  }

  render(){
    const{ dispatch, room, billing, login, credit, modalVisible } = this.props;
    const updateRoom = bindActionCreators(CustomerActionCreators.updateRoom, dispatch);
    const updateBilling = bindActionCreators(CustomerActionCreators.updateBilling, dispatch);
    const updateCredit = bindActionCreators(CustomerActionCreators.updateCredit, dispatch);
    const updateLogin = bindActionCreators(CustomerActionCreators.updateLogin, dispatch);
    const makeModal = bindActionCreators(CustomerActionCreators.makeModal, dispatch);
    //const selectDate = bindActionCreators(CustomerActionCreators.selectDate, dispatch);

    console.log("login", login);
    console.log("billing", billing);
    console.log("credit", credit);
    console.log("room", room);

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
                updateLogin={updateLogin}
                login={login}
                updateRoom={updateRoom}
                room={room}
                updateCredit={updateCredit}
                credit={credit}
                updateBilling={updateBilling}
                billing={billing}

                modalVisible={modalVisible}
                makeModal={makeModal}
              />) }
            />
            <Route path="/login" render={ () => (
              <Login
                updateLogin={updateLogin}
                login={login}
                updateBilling={updateBilling}
                billing={billing}

                modalVisible={modalVisible}
                makeModal={makeModal}

                roomRoom={room.room}
              />) }
            />

            <Route path="/welcome/:name" render={ () => (
              <Welcome
                login={login}
                billing={billing}
                room={room}
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
    billing: state.billing,
    login: state.login,
    credit: state.credit,
    modalVisible: state.modalVisible
  }
);

export default connect(mapStateToProps)(App);

// <Route path="/signup" render={ () => (
//   <SignUp
//     login={login}
//     logged={logged}
//   />) }
// />

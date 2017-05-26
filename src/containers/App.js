import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CustomerActionCreators from '../actions/customer';

//components
import Header from './Header';
import About from '../routes/About';
import Book from '../routes/Book';
import Home from '../routes/Home';
import Login from '../routes/Login';
//import SignUp from '../routes/SignUp';
import Welcome from '../routes/Welcome';
import NotFound from '../routes/NotFound';


class App extends Component {
  static propTypes = {
    logged: PropTypes.object.isRequired,
    selectedRoom: PropTypes.object.isRequired,
    modalVisible: PropTypes.bool.isRequired
  }

  render(){
    const{ dispatch, logged, selectedRoom, modalVisible } = this.props;
    const selectRoom = bindActionCreators(CustomerActionCreators.selectRoom, dispatch);
    const login = bindActionCreators(CustomerActionCreators.login, dispatch);
    const makeModal = bindActionCreators(CustomerActionCreators.makeModal, dispatch);
    //const selectDate = bindActionCreators(CustomerActionCreators.selectDate, dispatch);
    console.log("logged", logged);
    console.log("room", selectedRoom);
    return (

      <BrowserRouter>
        <div className="container-fluid">
          <Header logged={logged}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/book" render={ () => (
              <Book
                selectRoom={selectRoom}
                selectedRoom={selectedRoom}
                logged={logged}
                login={login}
                modalVisible={modalVisible}
                makeModal={makeModal}
              />) }
            />
            <Route path="/login" render={ () => (
              <Login
                login={login}
                logged={logged}
                modalVisible={modalVisible}
                makeModal={makeModal}
                selected={selectedRoom.current}
              />) }
            />

            <Route path="/welcome/:name" component={Welcome} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => (
  {
    logged: state.logged,
    selectedRoom: state.selectedRoom,
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

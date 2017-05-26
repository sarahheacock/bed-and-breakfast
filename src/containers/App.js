import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CustomerActionCreators from '../actions/customer';

//components
import Header from '../routes/Header';
import About from '../routes/About';
import Book from '../routes/Book';
import Home from '../routes/Home';
import NotFound from '../routes/NotFound';


class App extends Component {
  static propTypes = {
    logged: PropTypes.bool.isRequired,
    selectedRoom: PropTypes.object.isRequired
  }

  render(){
    const{ dispatch, logged, selectedRoom } = this.props;
    const selectRoom = bindActionCreators(CustomerActionCreators.selectRoom, dispatch);
    //const selectDate = bindActionCreators(CustomerActionCreators.selectDate, dispatch);
console.log("selectedRoom state", selectedRoom);
    return (

      <BrowserRouter>
        <div className="container-fluid">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/book" render={ () => (
              <Book
                selectRoom={selectRoom}
                selectedRoom={selectedRoom}
              />) } />
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
    selectedRoom: state.selectedRoom
  }
);

export default connect(mapStateToProps)(App);

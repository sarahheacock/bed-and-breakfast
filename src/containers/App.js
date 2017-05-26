import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CustomerActionCreators from '../actions/customer';

//components
import Header from '../routes/Header';
import About from '../routes/about/About';
import Book from '../routes/book/Book';
import Home from '../routes/home/Home';
import NotFound from '../routes/NotFound';


class App extends Component {
  static propTypes = {
    logged: PropTypes.bool.isRequired,
    selectedRoom: PropTypes.object.isRequired
  }

  render(){
    const{ dispatch, logged, selectedRoom } = this.props;
    const selectRoom = bindActionCreators(CustomerActionCreators.selectRoom, dispatch);

    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/book" component={Book} />
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

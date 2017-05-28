import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { Nav, NavItem, Tab, Row, Col, PageHeader } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import '../stylesheets/book.css';

//components
import Available from './bookTabs/Available';
import Payment from './bookTabs/Payment';
import Confirmation from './bookTabs/Confirmation';

//holds routes and onther navbar
//if room.room = false, Payment redirects to Available
//if room.room = false or login.login = false, Confirmation redirects to Payment
const Book = (props) => {
  return (
    <div className="main-content">
    <PageHeader>Book Now</PageHeader>
    <div className="text-center">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className="clearfix">

        <Col sm={4}>
          <Nav bsStyle="pills" stacked>
            <LinkContainer to="/book/availability">
              <NavItem className="tab">Availability</NavItem>
            </LinkContainer>
            <LinkContainer to="/book/payment">
              <NavItem className="tab">Payment</NavItem>
            </LinkContainer>
            <LinkContainer to="/book/confirmation">
              <NavItem className="tab">Confirmation</NavItem>
            </LinkContainer>
          </Nav>
        </Col>

        <Col sm={8}>
          <Route exact path="/book/" render={ () =>
            <Redirect to="/book/availability" /> }
          />
          <Route path="/book/availability/" render={ () =>
            <Available
              room={props.room}
              updateRoom={props.updateRoom}
            /> }
          />

          <Route path="/book/payment" render={ () => (props.room.room) ?
            <Payment
              room={props.room}
              login={props.login}
              updateLogin={props.updateLogin}
              billing={props.billing}
              updateBilling={props.updateBilling}
              modalVisible={props.modalVisible}
              makeModal={props.makeModal}
            /> :
            <Redirect to="/book/availability" />}
          />

          <Route path="/book/confirmation" render={ () => (props.room.room && props.login.login) ?
            <Confirmation
              room={props.room}
              credit={props.credit}
              updateCredit={props.updateCredit}
              modalVisible={props.modalVisible}
              makeModal={props.makeModal}
            /> :
            <Redirect to="/book/payment" /> }
          />

        </Col>
      </Row>
      </Tab.Container>
      </div>
    </div>
  );
};




export default Book;

Book.propTypes = {
  login: PropTypes.object.isRequired,
  updateLogin: PropTypes.func.isRequired,
  billing: PropTypes.object.isRequired,
  updateBilling: PropTypes.func.isRequired,
  credit: PropTypes.object.isRequired,
  updateCredit: PropTypes.func.isRequired,
  updateRoom: PropTypes.func.isRequired,
  room: PropTypes.object.isRequired,

  makeModal: PropTypes.func.isRequired,
  modalVisible: PropTypes.bool.isRequired,
};

import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import { Nav, Collapse, Navbar, NavbarBrand, NavItem, Tab, Row, Col } from 'react-bootstrap';

//components
import Available from './tabs/Available';
import Payment from './tabs/Payment';
import Confirmation from './tabs/Confirmation';


const Book = ({match}) => (
  <div className="main-content">
  <h1>Book Now</h1>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    <Row className="clearfix">
    <Col sm={4}>

      <Nav bsStyle="pills" stacked>

        <NavItem className="tab">
          <NavLink to={`${match.url}/availability`}>Availability</NavLink>
        </NavItem>

        <NavItem className="tab">
          <NavLink to={`${match.url}/payment`}>Payment</NavLink>
        </NavItem>

        <NavItem className="tab">
          <NavLink to={`${match.url}/confirmation`}>Confirmation</NavLink>
        </NavItem>
      </Nav>
    </Col>

      <Col sm={8}>
        <Route exact path={match.path} render={ () => <Redirect to={`${match.path}/availability`} />} />
        <Route path={`${match.path}/availability`} render={ () => (<Available />) }/>
        <Route path={`${match.path}/payment`} render={ () => <Payment /> }/>
        <Route path={`${match.path}/confirmation`} render={ () => <Confirmation /> }/>
      </Col>
    </Row>
    </Tab.Container>
  </div>
);

export default Book;

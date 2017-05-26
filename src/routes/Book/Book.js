import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Route, NavLink, Redirect } from 'react-router-dom';
import { Nav, Collapse, Navbar, NavbarBrand, NavItem, Tab, Row, Col } from 'react-bootstrap';

//components
import Available from './tabs/Available';
import Payment from './tabs/Payment';
import Confirmation from './tabs/Confirmation';


//const Book = ({match}) => {
class Book extends Component {
  static propTypes = {
    selectDate: PropTypes.func.isRequired,
    selectRoom: PropTypes.func.isRequired,
    selectedRoom: PropTypes.object.isRequired
    //match: PropTypes.object.isRequired
  }
//console.log({this.props.selectedRoom});
  render(){
    return(
      <div className="main-content">
      <h1>Book Now</h1>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row className="clearfix">
        <Col sm={4}>

          <Nav bsStyle="pills" stacked>

            <NavItem className="tab">
              <NavLink to="/book/availability">Availability</NavLink>
            </NavItem>

            <NavItem className="tab">
              <NavLink to="/book/payment">Payment</NavLink>
            </NavItem>

            <NavItem className="tab">
              <NavLink to="/book/confirmation">Confirmation</NavLink>
            </NavItem>
          </Nav>
        </Col>

          <Col sm={8}>
            <Route exact path="/book/" render={ () => <Redirect to="/book/availability" />} />
            <Route path="/book/availability/" render={ () => (<Available selectDate={this.props.selectDate} selectRoom={this.props.selectRoom} selectedRoom={this.props.selectedRoom}/>) }/>
            <Route path="/book/payment" render={ () => <Payment selectedRoom={this.props.selectedRoom}/> }/>
            <Route path="/book/confirmation" render={ () => <Confirmation /> }/>
          </Col>
        </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default Book;

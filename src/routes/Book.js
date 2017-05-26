import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Route, NavLink, Redirect } from 'react-router-dom';
import { Nav, NavItem, Tab, Row, Col } from 'react-bootstrap';

//components
import Available from './bookTabs/Available';
import Payment from './bookTabs/Payment';
import Confirmation from './bookTabs/Confirmation';


//const Book = ({match}) => {
class Book extends Component {
  static propTypes = {
    //selectDate: PropTypes.func.isRequired,
    selectRoom: PropTypes.func.isRequired,
    selectedRoom: PropTypes.object.isRequired,
    logged: PropTypes.object.isRequired,
    modalVisible: PropTypes.bool.isRequired,
    makeModal: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired
    //match: PropTypes.object.isRequired
  }

  componentDidUpdate() {

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
            <Route path="/book/availability/" render={ () => (<Available selectRoom={this.props.selectRoom} selectedRoom={this.props.selectedRoom}/>) }/>
            <Route path="/book/payment" render={ () => (this.props.selectedRoom.current) ?
              <Payment
                selectedRoom={this.props.selectedRoom}
                login={this.props.login}
                logged={this.props.logged}
                modalVisible={this.props.modalVisible}
                makeModal={this.props.makeModal}
              /> :
              <Redirect to="/book/availability" />}/>
            <Route path="/book/confirmation" render={ () => (this.props.selectedRoom.current) ?  <Confirmation selectedRoom={this.props.selectedRoom} /> : <Redirect to="/book/availability" /> }/>
          </Col>
        </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default Book;

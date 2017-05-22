import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import { Nav, Collapse, Navbar, NavbarBrand, NavItem, Tab, Row, Col } from 'react-bootstrap';


const Book = () => (
  <div className="main-content">
    <h1>Book Now</h1>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
    <Row className="clearfix">
      <Col sm={4}>
        <Nav bsStyle="pills" stacked>
          <NavItem eventKey="first">
            Availability
          </NavItem>
          <NavItem eventKey="second">
            Sign In
          </NavItem>
        </Nav>
      </Col>
      <Col sm={8}>
        <Tab.Content animation>
          <Tab.Pane eventKey="first">
            Tab 1 content
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            Tab 2 content
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
  </div>
);

export default Book;

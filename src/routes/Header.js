import React from 'react';
import { NavLink } from 'react-router-dom';
//import { Navbar } from 'react-bootstrap';

import { Nav, Collapse, Navbar, NavbarBrand, NavItem } from 'react-bootstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="faded">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">{"B&B"}</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav className="ml-auto" navbar>
              <NavItem eventKey={1}>
                <NavLink exact to="/">Home</NavLink>
              </NavItem>
              <NavItem eventKey={2}>
                <NavLink to="/about">About</NavLink>
              </NavItem>
              <NavItem eventKey={3}>
                <NavLink to="/book">Book</NavLink>
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem eventKey={1}>
                <NavLink to="/login">Login</NavLink>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

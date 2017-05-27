import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Nav, Navbar, NavItem } from 'react-bootstrap';

//navigation bar
const Header = (props) => {

  //if logged in or login.login = true, the corner link turns into route to personal page
    let corner = (props.login.login) ?
      <NavLink to={`/welcome/${props.login.id}`}>{props.login.id}</NavLink> :
      <NavLink to="/login">Login</NavLink>;

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
                {corner}
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
}

export default Header;

Header.propTypes = {
  login: PropTypes.object.isRequired
}

import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

//navigation bar
const Header = (props) => {

  //if logged in or login.login = true, the corner link turns into route to personal page
    let corner = (props.login.login) ?
      <LinkContainer to={`/welcome/${props.login.id}`}><NavItem>{props.login.id}</NavItem></LinkContainer> :
      <LinkContainer to="/login"><NavItem>Login</NavItem></LinkContainer>;

    return (
      <div>
        <Navbar color="faded" light>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">{"B&B"}</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav className="ml-auto" navbar>
              <LinkContainer exact to="/">
                <NavItem>Home</NavItem>
              </LinkContainer>
              <LinkContainer to="/about">
                <NavItem>About</NavItem>
              </LinkContainer>
              <LinkContainer to="/book">
                <NavItem>Book</NavItem>
              </LinkContainer>
            </Nav>
            <Nav pullRight>
              {corner}
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

import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
//import { Navbar } from 'react-bootstrap';

import { Nav, Navbar, NavItem } from 'react-bootstrap';

// export default class Header extends React.Component {
//   render() {
const Header = (props) => {
  //console.log({match});
  console.log(props.logged);
    let corner = (props.logged.current) ?
      <NavLink to={`/welcome/${props.logged.id}`}>{props.logged.id}</NavLink> :
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
  //}
}

export default Header;

Header.propTypes = {
  logged: PropTypes.object.isRequired
}
//<NavLink to={`${match.url}/login`}>Login</NavLink>

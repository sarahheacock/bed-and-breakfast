import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect} from 'react-router-dom';
import { Nav, NavItem, Tab, Row, Col, PageHeader } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Upcoming from './welcomeTabs/Upcoming';
import Personal from './welcomeTabs/Personal';

//an Api will be needed to pull out current stuff
const Welcome = (props) => {

  //let name = params[name];
  return (
    <div className="main-content text-center">
      <PageHeader>Welcome {props.login.id}!</PageHeader>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className="clearfix">

        <Col sm={4}>
          <Nav bsStyle="pills" stacked>
            <LinkContainer to={`/welcome/${props.login.id}/upcoming`}>
              <NavItem className="tab">Upcoming Stays</NavItem>
            </LinkContainer>
            <LinkContainer to={`/welcome/${props.login.id}/personal-info`}>
              <NavItem className="tab">Personal Info</NavItem>
            </LinkContainer>
          </Nav>
        </Col>

        <Col sm={8}>
          <Route exact path={`/welcome/${props.login.id}/`} render={ () =>
            <Redirect to={`/welcome/${props.login.id}/upcoming`} /> }
          />

          <Route path={`/welcome/${props.login.id}/upcoming`} render={ () =>
            <Upcoming

            /> }
          />

          <Route path={`/welcome/${props.login.id}/personal-info`} render={ () =>
            <Personal
            /> }
          />

        </Col>
      </Row>
      </Tab.Container>
    </div>
  );
}

export default Welcome;

Welcome.propTypes = {
  login: PropTypes.object.isRequired,
  billing: PropTypes.object.isRequired,
  room: PropTypes.object.isRequired
}

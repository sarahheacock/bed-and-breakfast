import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect} from 'react-router-dom';
import { Nav, NavItem, Tab, Row, Col, PageHeader } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import Upcoming from './welcomeTabs/Upcoming';
import Personal from './welcomeTabs/Personal';

//an Api will be needed to pull out current stuff
const Welcome = (props) => {

  const id = (props.login.user.email !== undefined) ? props.login.user.email.split("@") : [];
  const ID = id[0];
  //let name = params[name];
  return (
    <div className="main-content text-center">
      <PageHeader>Welcome {ID}!</PageHeader>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className="clearfix">

        <Col sm={4}>
          <Nav bsStyle="pills" stacked>
            <LinkContainer to={`/welcome/${ID}/upcoming`}>
              <NavItem className="tab">Upcoming Stays</NavItem>
            </LinkContainer>
            <LinkContainer to={`/welcome/${ID}/personal-info`}>
              <NavItem className="tab">Personal Info</NavItem>
            </LinkContainer>
          </Nav>
        </Col>

        <Col sm={8}>
          <Route exact path={`/welcome/${ID}/`} render={ () =>
            <Redirect to={`/welcome/${ID}/upcoming`} /> }
          />

          <Route path={`/welcome/${ID}/upcoming`} render={ () =>
            <Upcoming

            /> }
          />

          <Route path={`/welcome/${ID}/personal-info`} render={ () =>
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
}

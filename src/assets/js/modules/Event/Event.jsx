import React from 'react';
import PropTypes from 'prop-types';
import LandingPage from 'fed-modules/LandingPage';
import DayView from 'core-partials/display/templates/DayView';
import EventLayout from 'react-module/EventLayout';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

import './style.scss';

/** This is the Event component. */
class Event extends React.Component {
  render() {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={EventLayout}>
            <IndexRoute component={LandingPage} />
            <Route path="demo/:id" component={DayView} />
          </Route>
        </Router>
      </div>
    );
  }
}

Event.defaultProps = {
};

Event.propTypes = {
};

export default Event;

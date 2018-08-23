import React from 'react';
import PropTypes from 'prop-types';
import LandingPage from 'core-partials/display/templates/LandingPage';
import DayView from 'core-partials/display/templates/DayView';
import EventLayout from 'react-module/EventLayout';
import {Provider} from 'react-redux';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import appStore from './Stores/appStore';

import './style.scss';

/** This is the Event component. */
class Event extends React.Component {
  render() {
    const store = appStore({
      reducer: {
        testing: 'hello world',
      },
    });
    return (
      <div>
        <Provider store={store}>
          <Router history={hashHistory}>
            <Route path="/" component={EventLayout}>
              <IndexRoute component={LandingPage} />
              <Route path="demo/:id" component={DayView} />
            </Route>
          </Router>
        </Provider>
      </div>
    );
  }
}

Event.defaultProps = {
};

Event.propTypes = {
};

export default Event;

import React from 'react';
import PropTypes from 'prop-types';
import PageLanding from 'fed-modules/PageLanding';
import DayView from 'fed-modules/PageDayView';
import EventLayout from 'react-module/EventLayout';
import {Provider} from 'react-redux';
import moment from 'moment';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import appStore from './Stores/appStore';
import './semantic.css';

import './style.scss';

/** This is the Event component. */
class Event extends React.Component {
  render() {
    const store = appStore({
      reducer: {
        testing: 'hello world',
        isSearching: false,
        selectedDate: moment().format('YYYYMMDD'),
        minMax: {
          min: moment().subtract(17, 'y').format('YYYYMMDD'),
          max: moment().add(2, 'y').format('YYYYMMDD'),
        },
      },
    });
    return (
      <div>
        <Provider store={store}>
          <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
            <Route path="/" component={EventLayout}>
              <IndexRoute component={PageLanding} />
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

import React from 'react';
import PropTypes from 'prop-types';
import PageLanding from 'fed-modules/PageLanding';
import DayView from 'fed-modules/PageDayView';
import KeyDates from 'fed-modules/PageKeyDates';
import EventLayout from 'react-module/EventLayout';
import {Provider} from 'react-redux';
import { formatDate, addSubtract } from 'js-utils/formatDate';
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
        selectedDate: formatDate({}, 'YYYYMMDD'),
        minMax: {
          min: addSubtract({ amount: -17 }),
          max: addSubtract({ amount: 2 }),
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
              <Route path="key-dates" component={KeyDates} />
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

import React from 'react';
// import PropTypes from 'prop-types';
import PageLanding from 'fed-modules/PageLanding';
import DayView from 'fed-modules/PageDayView';
import KeyDates from 'fed-modules/PageKeyDates';
import SearchResults from 'fed-modules/PageSearchResults';
import CalendarSearch from 'core/Components/CalendarSearch';
import EventLayout from 'react-module/EventLayout';
import {Provider} from 'react-redux';
import { formatDate, addSubtract } from 'js-utils/formatDate';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import theState from 'reducers/state';
import appStore from './Stores/appStore';
import './semantic.css';

import './style.scss';

/** This is the Event component. */
class Event extends React.Component {
  render() {
    const store = appStore({
      reducer: Object.values(theState)[0],
    });
    return (
      <div>
        <Provider store={store}>
          <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
            <Route path="/" component={EventLayout}>
              <IndexRoute component={PageLanding} />
              <Route path="/search" component={PageLanding}>
                <IndexRoute component={CalendarSearch} />
              </Route>
              <Route path="day/:id" component={DayView} />
              <Route path="key-dates" component={KeyDates} />
              <Route path="search-results" component={SearchResults} />
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

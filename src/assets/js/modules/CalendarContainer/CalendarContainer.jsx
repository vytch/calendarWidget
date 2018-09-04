import React from 'react';
import PropTypes from 'prop-types';
import { Router, Route, withRouter, hashHistory } from 'react-router';
import { connect } from 'react-redux';
import CalendarSearch from 'core/Components/CalendarSearch';
import DayView from '../DayView/DayView';
import './style.scss';

/** This is the CalendarContainer component. */
class CalendarContainer extends React.Component {
  render() {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={DayView} />
          <Route path=":search" component={CalendarSearch} />
        </Router>
      </div>
    );
  }
}

CalendarContainer.defaultProps = {
};

CalendarContainer.propTypes = {
  // isSearching: PropTypes.bool.isRequired,
};

export default CalendarContainer;
// export default connect(mapStateToProps)(CalendarContainer);

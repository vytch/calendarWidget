import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CalendarSearch from 'core/Components/CalendarSearch';
import DayView from '../DayView/DayView';
import './style.scss';

/** This is the CalendarContainer component. */
class CalendarContainer extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        {location === '/search' ? <CalendarSearch /> : <DayView />}
      </div>
    );
  }
}

CalendarContainer.defaultProps = {
};

CalendarContainer.propTypes = {
  location: PropTypes.string.isRequired,
};


export default CalendarContainer;

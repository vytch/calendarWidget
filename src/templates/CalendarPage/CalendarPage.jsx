import React from 'react';
import PropTypes from 'prop-types';
import TestHabital from 'core-partials/display/molecules/TestHabital';

/** This is the CalendarPage component. */
class CalendarPage extends React.Component {
  render() {
    return (
      <TestHabital
        component="Event"
      />
    );
  }
}

CalendarPage.defaultProps = {
};

CalendarPage.propTypes = {
};

export default CalendarPage;

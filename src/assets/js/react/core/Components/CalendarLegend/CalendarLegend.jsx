import React from 'react';
// import PropTypes from 'prop-types';
import './style.scss';

/** This is the CalendarLegend component. */
class CalendarLegend extends React.PureComponent {
  render() {
    return (
      /*
        TODO
        - Make this an array or object that gets looped through
        - Make abbreviations global so they apply to calendar and event-list-type
        - auto abbreviate legend titles
      */

      <ul className="legend">
        <li className="legend-item" data-type="JS">Junior School (JS)</li>
        <li className="legend-item" data-type="JSS">Junior Secondary School (JSS)</li>
        <li className="legend-item" data-type="MS">Middle School</li>
        <li className="legend-item" data-type="SS">Senior School</li>
      </ul>
    );
  }
}

CalendarLegend.defaultProps = {
};

CalendarLegend.propTypes = {
};

export default CalendarLegend;


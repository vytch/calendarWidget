import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
        {
          this.props.eventTypes.map(({ type, name }) => {
            return <li key={`legend-${type}-${name}`} className="legend-item" data-type={type}>{name}</li>;
          })
        }
      </ul>
    );
  }
}

CalendarLegend.defaultProps = {
};

CalendarLegend.propTypes = {
  eventTypes: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return {
    eventTypes: state.reducer.eventTypes,
  };
};

export default connect(mapStateToProps)(CalendarLegend);


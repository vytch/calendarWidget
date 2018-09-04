import React from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router';
import { connect } from 'react-redux';
import CalendarSearch from 'core/Components/CalendarSearch';
import DayView from '../DayView/DayView';
import './style.scss';

/** This is the CalendarContainer component. */
class CalendarContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.isSearching ? <CalendarSearch /> : <DayView />}
      </div>
    );
  }
}

CalendarContainer.defaultProps = {
};

CalendarContainer.propTypes = {
  isSearching: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  return {
    isSearching: state.reducer.isSearching,
  };
};

export default connect(mapStateToProps)(CalendarContainer);

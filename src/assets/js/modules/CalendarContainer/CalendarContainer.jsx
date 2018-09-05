import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CalendarSearch from 'core/Components/CalendarSearch';
import DayView from '../DayView/DayView';
import './style.scss';

/** This is the CalendarContainer component. */
class CalendarContainer extends React.Component {
  render() {
    const { location, isSearching } = this.props;
    const searchUrl = location === '/search';
    return (
      <div>
        {isSearching || searchUrl ? <CalendarSearch /> : <DayView />}
      </div>
    );
  }
}

CalendarContainer.defaultProps = {
};

CalendarContainer.propTypes = {
  isSearching: PropTypes.bool.isRequired,
  location: PropTypes.string.isRequired,
};

const mapStateToProps = state => {
  return {
    isSearching: state.reducer.isSearching,
  };
};

export default connect(mapStateToProps)(CalendarContainer);

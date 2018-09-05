import React from 'react';
import PropTypes from 'prop-types';
import FilteredEventList from 'core/Components/FilteredEventList';
import { connect } from 'react-redux';
import './style.scss';

/** This is the PageKeyDates component. */
class PageKeyDates extends React.Component {
  render() {
    const keyEvents = this.props.events.filter(date => date.keyDate);
    console.log(this.props.events);

    return (
      <div className="key-dates">
        <header className="align-center">
          <h1>Key Dates</h1>
        </header>

        <FilteredEventList events={keyEvents} />
      </div>
    );
  }
}

PageKeyDates.defaultProps = {
};

PageKeyDates.propTypes = {
  events: PropTypes.array.isRequired,
};

const mapStateToProps = state => {
  return {
    events: state.reducer.events,
  };
};

export default connect(mapStateToProps)(PageKeyDates);

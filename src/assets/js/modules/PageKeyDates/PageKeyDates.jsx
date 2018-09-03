import React from 'react';
// import PropTypes from 'prop-types';
import FilteredEventList from 'core/Components/FilteredEventList';
import eventData from 'json/events.json';
import './style.scss';

/** This is the PageKeyDates component. */
class PageKeyDates extends React.Component {
  render() {
    const keyEvents = Object.values(eventData.events).filter(date => date.keyDate);

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
};

export default PageKeyDates;

import React from 'react';
import PropTypes from 'prop-types';
import FilteredEventList from 'core/Components/FilteredEventList';
import eventData from 'json/events.json';
import './style.scss';

/** This is the PageKeyDates component. */
class PageKeyDates extends React.Component {
  render() {
    return (
      <div className="key-dates">
        <header className="align-center">
          <h1>Key Dates</h1>
        </header>

        <FilteredEventList events={eventData.events} />
      </div>
    );
  }
}

PageKeyDates.defaultProps = {
};

PageKeyDates.propTypes = {
};

export default PageKeyDates;

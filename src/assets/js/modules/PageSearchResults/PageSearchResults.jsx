import React from 'react';
import PropTypes from 'prop-types';
import FilteredEventList from 'core/Components/FilteredEventList';
import eventData from 'json/events.json';
import './style.scss';

/** This is the PageSearchResults component. */
class PageSearchResults extends React.Component {
  render() {
    return (
      <div>
        <header>
          <h1>Search Results</h1>
        </header>

        <FilteredEventList events={eventData.events} />
      </div>
    );
  }
}

PageSearchResults.defaultProps = {
};

PageSearchResults.propTypes = {
};

export default PageSearchResults;

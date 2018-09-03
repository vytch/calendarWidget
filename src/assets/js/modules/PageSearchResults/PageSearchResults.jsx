import React from 'react';
// import PropTypes from 'prop-types';
import FilteredEventList from 'core/Components/FilteredEventList';
import SearchResultsCriteria from 'core/Components/SearchResultsCriteria';
import eventData from 'json/events.json';
// import { connect } from 'react-redux';
import './style.scss';

/** This is the PageSearchResults component. */
class PageSearchResults extends React.Component {
  render() {
    return (
      <div>
        <header className="search-header align-center">
          <h1>Showing {eventData.events.length} event results</h1>
        </header>

        <SearchResultsCriteria />

        <FilteredEventList events={eventData.events} />
      </div>
    );
  }
}

PageSearchResults.defaultProps = {
};

PageSearchResults.propTypes = {
  // loading: PropTypes.bool.isRequired,
};

// const mapStateToProps = state => {
//   return {
//     loading: state.search.loading,
//   }
// };

export default PageSearchResults;
// export default connect(mapStateToProps)(PageSearchResults);

import React from 'react';
import PropTypes from 'prop-types';
import FilteredEventList from 'core/Components/FilteredEventList';
import SearchResultsCriteria from 'core/Components/SearchResultsCriteria';
import Loader from 'core/Components/Loader';
import eventData from 'json/events.json';
import { connect } from 'react-redux';
import './style.scss';

/** This is the PageSearchResults component. */
class PageSearchResults extends React.Component {
  render() {
    const SearchBody = (
      <div>
        <header className="search-header align-center">
          <h1>Showing {eventData.events.length} event results</h1>
        </header>

        <SearchResultsCriteria />

        <FilteredEventList events={eventData.events} />
      </div>
    );

    const noResults = (
      <header className="search-header align-center">
        <h1>{ this.props.error ? this.props.error : 'Sorry, no events found.'}</h1>
      </header>
    );

    const results = this.props.results.length > 0 ? SearchBody : noResults;
    const isLoading = this.props.loading ? <Loader /> : results;

    return (
      <div>
        { isLoading }
      </div>
    );
  }
}

PageSearchResults.defaultProps = {
  error: null,
};

PageSearchResults.propTypes = {
  loading: PropTypes.bool.isRequired,
  results: PropTypes.array.isRequired,
  error: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    loading: state.reducer.search.loading,
    results: state.reducer.search.searchResults,
    error: state.reducer.search.error,
  };
};

export default connect(mapStateToProps)(PageSearchResults);

import React from 'react';
import PropTypes from 'prop-types';
import FilteredEventList from 'core/Components/FilteredEventList';
import SearchResultsCriteria from 'core/Components/SearchResultsCriteria';
import { getSearchResults } from 'fed-modules/PageSearchResults/Actions/SearchActions';
import Loader from 'core/Components/Loader';
import { connect } from 'react-redux';
import './style.scss';

/** This is the PageSearchResults component. */
class PageSearchResults extends React.Component {
  componentDidMount() {
    const prop = this.props;
    // checks to see if it's loading and if any events have loaded, if not, it's most likely a browser load
    !prop.loading && prop.results.length === 0 ? this._handleSearchRequest() : null;
  }

  _handleSearchRequest() {
    if (this.props.location.query) {
      this.props.getSearchResults(this.props.location.query);
    }
  }

  render() {
    const events = this.props.results;

    const SearchBody = (
      <div>
        <header className="search-header align-center">
          <h1>Showing {events.length} event results</h1>
        </header>

        <SearchResultsCriteria criteria={this.props.location.query} />

        <FilteredEventList events={events} />
      </div>
    );

    const noResults = (
      <header className="search-header align-center">
        <h1>{ this.props.error ? this.props.error : 'Sorry, no events found.'}</h1>
      </header>
    );

    const results = events.length > 0 ? SearchBody : noResults;
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
  getSearchResults: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    loading: state.reducer.search.loading,
    results: state.reducer.search.searchResults,
    error: state.reducer.search.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSearchResults: data => dispatch(getSearchResults(data)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PageSearchResults);

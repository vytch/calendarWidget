import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from 'js-utils/formatDate';
import EventTags from '../EventTags';
import './style.scss';

// TODO: MAKE THIS DYNAMIC
/** This is the SearchResultsCriteria component. */
class SearchResultsCriteria extends React.PureComponent {
  render() {
    const criteria = this.props.criteria;
    const start = formatDate(criteria.start, 'DD-MM-YYYY');
    const end = formatDate(criteria.end, 'DD-MM-YYYY');

    return (
      <ul className="search-criteria flex">
        <li className="search-criteria-item">
          <span className="search-criteria-label">Keywords</span>
          <div className="search-criteria-value">{ criteria.keywords }</div>
        </li>
        <li className="search-criteria-item">
          <span className="search-criteria-label">School</span>
          <EventTags type={'searchCriteria'} tags={criteria.school.split(',')} />
        </li>
        <li className="search-criteria-item">
          <span className="search-criteria-label">Categories</span>
          <div className="search-criteria-value">{ criteria.category }</div>
        </li>
        <li className="search-criteria-item">
          <span className="search-criteria-label">Date range</span>
          <div className="search-criteria-value">
            { start } <span className="accent">to</span> { end }
          </div>
        </li>
      </ul>
    );
  }
}

SearchResultsCriteria.defaultProps = {
};

SearchResultsCriteria.propTypes = {
  criteria: PropTypes.oneOfType([
    PropTypes.string, PropTypes.object,
  ]).isRequired,
};

export default SearchResultsCriteria;


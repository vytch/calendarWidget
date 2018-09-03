import React from 'react';
// import PropTypes from 'prop-types';
import EventTags from '../EventTags';
import './style.scss';

const tags = ['JS', 'JSS', 'MS', 'SS'];

/** This is the SearchResultsCriteria component. */
class SearchResultsCriteria extends React.PureComponent {
  render() {
    return (
      <ul className="search-criteria flex">
        <li className="search-criteria-item">
          <span className="search-criteria-label">Keywords</span>
          <div className="search-criteria-value">Testing</div>
        </li>
        <li className="search-criteria-item">
          <span className="search-criteria-label">School</span>
          <EventTags type={'searchCriteria'} tags={tags} />
        </li>
        <li className="search-criteria-item">
          <span className="search-criteria-label">Categories</span>
          <div className="search-criteria-value">Category Name, Category Name, Category Name</div>
        </li>
        <li className="search-criteria-item">
          <span className="search-criteria-label">Date range</span>
          <div className="search-criteria-value">01-01-2018 <span className="accent">to</span> 31-12-2018</div>
        </li>
      </ul>
    );
  }
}

SearchResultsCriteria.defaultProps = {
};

SearchResultsCriteria.propTypes = {
};

export default SearchResultsCriteria;


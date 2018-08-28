import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** This is the PageKeyDates component. */
class PageKeyDates extends React.Component {
  render() {
    return (
      <div className="key-dates">
        <header className="align-center">
          <p>Date Block</p>
        </header>
      </div>
    );
  }
}

PageKeyDates.defaultProps = {
};

PageKeyDates.propTypes = {
};

export default PageKeyDates;

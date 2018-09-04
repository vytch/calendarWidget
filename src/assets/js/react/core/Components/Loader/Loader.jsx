import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** This is the Loader component. */
class Loader extends React.PureComponent {
  render() {
    return (
      <div className="loader">
        <div className="loader-spinner">
          <div className="loader-dot" />
          <div className="loader-dot" />
          <div className="loader-dot" />
        </div>
      </div>
    );
  }
}

Loader.defaultProps = {
};

Loader.propTypes = {
};

export default Loader;


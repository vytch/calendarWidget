import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** This is the TestHabital component. */
class TestHabital extends React.Component {
  render() {
    return (
      <div data-component={this.props.component} data-props={JSON.stringify(this.props.props)}>
        <div className="loader">
          <div className="loader-spinner">
            <div className="loader-dot" />
            <div className="loader-dot" />
            <div className="loader-dot" />
          </div>
        </div>
      </div>
    );
  }
}

TestHabital.defaultProps = {
  props: {},
};

TestHabital.propTypes = {
  component: PropTypes.string.isRequired,
  props: PropTypes.object,
};

export default TestHabital;

import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** This is the TestHabital component. */
class TestHabital extends React.Component {
  render() {
    return (
      <div data-component={this.props.component} data-props={JSON.stringify(this.props.props)}>Loading...</div>
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

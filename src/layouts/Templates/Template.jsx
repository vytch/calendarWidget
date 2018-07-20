import React from 'react';
import PropTypes from 'prop-types'; // ES6

export default class Template extends React.Component {
  render() {
    return (
      <div className="template-wrapper">
        {this.props.children}
      </div>
    );
  }
}

Template.propTypes = {
  children: PropTypes.element.isRequired,
};

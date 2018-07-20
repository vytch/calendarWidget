import React from 'react';
import PropTypes from 'prop-types';
import {Link } from 'react-router';
import './style.scss';

/** This is the EventLayout component. */
class EventLayout extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/demo/hello">Demo hello</Link></li>
          <li><Link to="/demo/world">Demo world</Link></li>
        </ul>


      </div>
    );
  }
}

EventLayout.defaultProps = {
};

EventLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string, PropTypes.element, PropTypes.array,
  ]).isRequired,
};

export default EventLayout;

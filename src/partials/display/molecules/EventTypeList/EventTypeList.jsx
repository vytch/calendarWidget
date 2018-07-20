import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** This is the EventTypeList component. */
class EventTypeList extends React.Component {
  render() {
    return (
      <ul className="event-list-type">
        <li data-type="typeA">Type A</li>
        <li data-type="typeB">Type B</li>
        <li data-type="typeC">Type C</li>
        <li data-type="typeD">Type D</li>
      </ul>
    );
  }
}

EventTypeList.defaultProps = {
};

EventTypeList.propTypes = {
};

export default EventTypeList;

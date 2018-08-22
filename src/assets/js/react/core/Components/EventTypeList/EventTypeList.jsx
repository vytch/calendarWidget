import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** This is the EventTypeList component. */
class EventTypeList extends React.PureComponent {
  render() {
    return (
      <ul className="event-list-type">
        <li data-type="JS">JS</li>
        <li data-type="JSS">JSS</li>
        <li data-type="MS">MS</li>
        <li data-type="SS">SS</li>
      </ul>
    );
  }
}

EventTypeList.defaultProps = {
};

EventTypeList.propTypes = {
};

export default EventTypeList;


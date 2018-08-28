import React from 'react';
import PropTypes from 'prop-types';
import eventData from 'fed-modules/PageDayView/eventData.json';
import moment from 'moment';
import './style.scss';

/** This is the EventTypeList component. */
class EventTypeList extends React.PureComponent {
  state = {
    events: [],
  }

  // first filter our the current day
  compareDays = event => {
    const startDay = moment(event.start).format('YYYYMMDD');
    const currDay = this.props.day.format('YYYYMMDD');

    return startDay === currDay;
  }

  // then push the tags into current state
  currentTags = ({ tags }) => {
    tags.map(tag => {
      this.state.events.includes(tag) ? null : this.state.events.push(tag);
    });
  };

  componentWillMount() {
    // runs the above functions
    eventData.filter(this.compareDays).map(this.currentTags);
  }

  render() {
    const currentEvents = this.state.events.map(event => <li data-type={event}>{event}</li>);

    return (
      <ul className="event-list-type">
        { currentEvents }
      </ul>
    );
  }
}

EventTypeList.defaultProps = {
};

EventTypeList.propTypes = {
  day: PropTypes.object.isRequired,
};

export default EventTypeList;


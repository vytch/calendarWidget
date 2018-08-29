import React from 'react';
import PropTypes from 'prop-types';
import eventData from 'json/events.json';
import moment from 'moment';
import './style.scss';

/** This is the EventTypeList component. */
class EventTypeList extends React.PureComponent {
  state = {
    events: [],
    currDay: this.props.day.format('YYYYMMDD'),
  }

  // first filter our the current day
  compareDays = event => {
    const startDay = moment(event.start).format('YYYYMMDD');

    return startDay === this.state.currDay;
  }

  // then push the tags into current state
  currentTags = ({ tags }) => {
    tags.map(tag => {
      this.state.events.includes(tag) ? null : this.state.events.push(tag);
    });
  };

  componentWillMount() {
    // runs the above functions
    Object.values(eventData.events).filter(this.compareDays).map(this.currentTags);
  }

  render() {
    const currentEvents = this.state.events.map(event => {
      return <li key={`${this.props.day}-${event}`} data-type={event}>{event}</li>;
    });

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


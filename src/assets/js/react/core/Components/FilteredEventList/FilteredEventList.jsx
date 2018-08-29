import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from 'js-utils/formatDate';
import EventBlock from 'core/Components/EventBlock';
import './style.scss';

/** This is the FilteredEventList component. */
class FilteredEventList extends React.Component {
  state = {
    filteredDays: [],
  }

  componentWillMount() {
    // Get all the single days so there's no duplicates
    Object.values(this.props.events)
      .filter(date => date.keyDate)
      .map(day => {
        const days = this.state.filteredDays;
        const formated = formatDate(day.start, 'MMMM DD YYYY');
        // if it's not in filteredDays state, add it.
        days.includes(formated) ? null : days.push(formated);
      });
  }

  render() {
    // create each section and assigns events to their corresponding days
    const days = this.state.filteredDays.map(day => {
      return (
        <section key={`keyDay-${day}`} className="key-date">
          <h2>{day}</h2>

          {
            Object.values(this.props.events)
              .filter(date => formatDate(date.start, 'MMMM DD YYYY') === day)
              .map(evnt => <EventBlock key={`keyDay-e-${evnt.id}`} {...evnt} />)
          }
        </section>
      );
    });

    return (
      <div className="event-blocks">
        { days }
      </div>
    );
  }
}

FilteredEventList.defaultProps = {
};

FilteredEventList.propTypes = {
  events: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

export default FilteredEventList;

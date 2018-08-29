import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import EventBlock from 'core/Components/EventBlock';
import keyDates from './keyDates.json';
import './style.scss';

/** This is the PageKeyDates component. */
class PageKeyDates extends React.Component {
  state = {
    keyDays: [],
  }

  componentWillMount() {
    // Get all the single days so ther'es no duplicates
    keyDates
      .filter(date => date.keyDate)
      .map(day => {
        const days = this.state.keyDays;
        const formated = moment(day.start).format('MMMM DD YYYY');
        days.includes(formated) ? null : days.push(formated);
      });
  }

  render() {
    // create each section and assigns events to their corresponding days
    const days = this.state.keyDays.map(day => {
      return (
        <section key={`keyDay-${day}`} className="key-date">
          <h2>{day}</h2>

          {
            keyDates
              .filter(date => moment(date.start).format('MMMM DD YYYY') === day)
              .map(evnt => <EventBlock {...evnt} />)
          }
        </section>
      );
    });

    return (
      <div className="key-dates">
        <header className="align-center">
          <p>Key Dates</p>
        </header>

        { days }
      </div>
    );
  }
}

PageKeyDates.defaultProps = {
};

PageKeyDates.propTypes = {
};

export default PageKeyDates;

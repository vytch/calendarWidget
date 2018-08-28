import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import EventBlock from 'core/Components/EventBlock';
import keyDates from './keyDates.json';
import './style.scss';

/** This is the PageKeyDates component. */
class PageKeyDates extends React.Component {
  render() {
    const keyEvents = keyDates.filter(date => date.keyDate);

    const days = keyDates.map(day => {
      return (
        <section key={`keyDate-${day.id}`} className="key-date">
          <h2>{moment(day.start).format('MMMM DD YYYY')}</h2>

          <EventBlock {...day} />
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

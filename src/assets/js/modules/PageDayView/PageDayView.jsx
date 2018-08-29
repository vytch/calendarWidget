import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import EventBlock from 'core/Components/EventBlock';
import Button from 'core/Components/Button';
import DayPagination from 'core/Components/DayPagination';
import eventData from 'json/events.json';
import { formatDate } from 'js-utils/formatDate';
import CalendarBackButton from 'core/Components/CalendarBackButton';
import './style.scss';

/** This is the PageDayView component. */
class PageDayView extends React.Component {
  render() {
    const currentDay = formatDate(this.props.params.id, 'YYYYMMDD');
    // const currentDay = moment(this.props.params.id).format('YYYYMMDD');
    const todaysEvents = Object.values(eventData.events).filter(evnt => {
      const eventTime = formatDate(evnt.start, 'YYYYMMDD');

      return eventTime === currentDay;
    });

    return (
      // TODO:
      // Calculate school terms
      <div className="view-current-day">
        <header className="align-center">
          <h1>{ formatDate(this.props.params.id, 'DD MMMM YYYY') }</h1>
          <p>Week 22 (Term 3)</p>
        </header>

        { todaysEvents.map(e => <EventBlock key={`event-${e.id}`} {...e} />) }

        <DayPagination {...this.props} />
      </div>
    );
  }
}

PageDayView.defaultProps = {
  params: {},
};

PageDayView.propTypes = {
  params: PropTypes.object,
  router: PropTypes.object.isRequired,
};

export default withRouter(PageDayView);

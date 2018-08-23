import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import moment from 'moment';
import EventBlock from 'core/Components/EventBlock';
import Button from 'core/Components/Button';
import DayPagination from 'core/Components/DayPagination';
import './style.scss';
import eventData from './eventData.json';

/** This is the PageDayView component. */
class PageDayView extends React.Component {
  render() {
    const todaysEvents = eventData.filter(evnt => {
      const eventTime = moment(evnt.start).format('YYYYMMDD');
      const currentDay = moment(this.props.params.id).format('YYYYMMDD');

      return eventTime === currentDay;
    });

    return (
      // TODO:
      // Calculate school terms
      <div className="view-current-day">
        <header className="align-center">
          <h1>{ moment(this.props.params.id).format('DD MMMM YYYY') }</h1>
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
};

export default withRouter(PageDayView);

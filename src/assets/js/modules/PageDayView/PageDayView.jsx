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
  componentDidMount = () => {
    // const filteredEvents = eventData.filter()
    console.log(moment(eventData.start).format('DD MM YYYY HH:MM'));
  }

  render() {
    return (
      // TODO:
      // Make use of calendar routing
      // Calculate school terms
      <div className="view-current-day">
        <header className="align-center">
          <h1>{ moment(this.props.params.id).format('DD MMMM YYYY') }</h1>
          <p>Week 22 (Term 3)</p>
        </header>

        { eventData.map(event => {
          const props = event;
          return <EventBlock key={`event-${event.id}`} {...props} />;
        }) }

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

import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import EventBlock from 'core/Components/EventBlock';
import Button from 'core/Components/Button';
import DayPagination from 'core/Components/DayPagination';
import './style.scss';

const eventData = [
  {
    id: '1',
    name: 'Name of the event',
    start: '2018082311:00', //YYYYMMDDHH:MM
    end: '',
    allDay: true,
    location: 'Location Name',
    categories: ['Category name', 'Category name', 'Category name'],
    tags: ['JS', 'JSS', 'MS', 'SS'],
    important: false,
  },
  {
    id: '2',
    name: 'Name of the event',
    start: '201808239:00', //YYYYMMDDHH:MM
    end: '2018082310:00:',
    allDay: false,
    location: 'Location Name',
    categories: ['Category name', 'Category name', 'Category name'],
    tags: ['JS', 'SS'],
    important: true,
  },
  {
    id: '3',
    name: 'Name of the event',
    start: '2018082311:00', //YYYYMMDDHH:MM
    end: '',
    allDay: true,
    location: 'Location Name',
    categories: ['Category name', 'Category name', 'Category name'],
    tags: ['JS', 'JSS', 'SS'],
    important: false,
  },
  {
    id: '4',
    name: 'Name of the event',
    start: '2018082311:00', //YYYYMMDDHH:MM
    end: '',
    allDay: true,
    location: 'Location Name',
    categories: ['Category name', 'Category name', 'Category name'],
    tags: ['JSS'],
    important: false,
  },
  {
    id: '5',
    name: 'Name of the event',
    start: '2018082311:00', //YYYYMMDDHH:MM
    end: '',
    allDay: true,
    location: 'Location Name',
    categories: ['Category name', 'Category name', 'Category name'],
    tags: ['MS', 'SS'],
    important: false,
  },
];

/** This is the PageDayView component. */
class PageDayView extends React.Component {
  render() {
    console.log(this.props);
    return (
      // TODO:
      // Make use of calendar routing
      // Calculate school terms
      // Check current date
      <div className="view-current-day">
        <header className="align-center">
          <h1>15 June 2018</h1>
          <p>Week 22 (Term 3)</p>
        </header>

        { eventData.map(event => {
          const props = event;
          return <EventBlock key={`event-${event.id}`} {...props} />;
        }) }

        {/* TODO Create function to progress to next / prev day */}
        <DayPagination />
      </div>
    );
  }
}

PageDayView.defaultProps = {
};

PageDayView.propTypes = {
};

export default withRouter(PageDayView);

import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import EventBlock from 'core/Components/EventBlock';
import DayPagination from 'core/Components/DayPagination';
import { formatDate, addSubtract } from 'js-utils/formatDate';
import { connect } from 'react-redux';
import './style.scss';

/** This is the PageDayView component. */
class PageDayView extends React.Component {
  checkTerms() {
    let currentTerm = null;

    this.props.terms.map(({term, start, end}) => {
      const date = this.props.params.id;
      const rangeStart = formatDate(start, 'YYYYMMDD');
      const rangeEnd = formatDate(end, 'YYYYMMDD');

      if (date >= rangeStart && date <= rangeEnd) {
        currentTerm = `Term ${term}`;
      } else if (!currentTerm) {
        currentTerm = 'School Holidays';
      }
    });

    return currentTerm;
  }

  routeChange = str => {
    this.props.router.push(`/day/${str}`);
  }

  _handleKeyPress = e => {

  }

  _handleClick = (id, direction) => {
    return direction === 'next'
      ? this.routeChange(addSubtract({ date: id, amount: 1, type: 'd' }))
      : this.routeChange(addSubtract({ date: id, amount: -1, type: 'd' }));
  }

  render() {
    const { id } = this.props.params;
    const currentDay = formatDate(this.props.params.id, 'YYYYMMDD');

    // Filter out the relevant events to the current day only
    const todaysEvents = Object.values(this.props.events).filter(evnt => {
      const eventTime = formatDate(evnt.start, 'YYYYMMDD');
      return eventTime === currentDay;
    });

    // Event default content
    let events = (
      <div className="no-events align-center">
        <h3>There are no events listed on this day.</h3>
      </div>
    );

    // If events apply for that current day
    if (todaysEvents.length) {
      events = todaysEvents.map(e => <EventBlock key={`event-${e.id}`} {...e} />);
    }

    // IF incorrect URL params are supplied, this is the default content...
    let PageView = (
      <div className="align-center">
        <h2>Incorrect Date Supplied</h2>
        <p>The URL supplied is incorrect. Please use the date format: YYYYMMDD to load content for the corresponding day.</p>
      </div>
    );

    // The actual content to be rendered IF the page params are met
    if (formatDate(id, 'YYYYMMDD') === id) {
      PageView = (
        <div>
          <header className="view-current-day-header align-center">
            <button className="btn-arrows btn-transparent" type="button" onClick={() => this._handleClick(id, 'prev')}>
              <svg className="svg-arrows" viewBox="0 0 8 14">
                <path
                  className="svg-black"
                  d="M7.2,13.8c-0.1,0.1-0.1,0.1-0.3,0.1c-0.1,0-0.2,0-0.3-0.1L0.2,7.2C0.1,7.2,0,7.1,0,7s0-0.2,0.1-0.3l6.5-6.6
                  C6.8,0.1,6.9,0.1,7,0.1s0.2,0,0.3,0.1l0.6,0.6C7.9,0.9,8,1,8,1.1s0,0.2-0.1,0.3L2.2,7l5.7,5.7C7.9,12.7,8,12.8,8,12.9s0,0.2-0.1,0.3
                  L7.2,13.8z"
                />
              </svg>
            </button>

            <div>
              <h1>{formatDate(id, 'DD MMMM YYYY')}</h1>
              <p>Week {formatDate(id, 'w')} ({this.checkTerms()})</p>
            </div>

            <button className="btn-arrows btn-transparent" type="button" onClick={() => this._handleClick(id, 'next')}>
              <svg className="svg-arrows" viewBox="0 0 8 14">
                <path
                  className="svg-black"
                  d="M0.8,0.2C0.9,0.1,0.9,0.1,1,0.1s0.2,0,0.3,0.1l6.5,6.6C7.9,6.8,8,6.9,8,7s0,0.2-0.1,0.3l-6.5,6.6 c-0.1,0.1-0.2,0.1-0.3,0.1s-0.2,0-0.3-0.1l-0.6-0.6C0.1,13.1,0,13,0,12.9s0-0.2,0.1-0.3L5.8,7L0.2,1.3C0.1,1.3,0,1.2,0,1.1 s0-0.2,0.1-0.3L0.8,0.2z"
                />
              </svg>
            </button>
          </header>

          { events }

          <DayPagination {...this.props} onHandleClick={this._handleClick} routeChange={this.routeChange} />
        </div>
      );
    }

    this.checkTerms();

    return (
      // TODO:
      // Calculate school terms
      <div className="view-current-day">
        { PageView }
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
  events: PropTypes.oneOfType([
    PropTypes.array, PropTypes.object,
  ]).isRequired,
  terms: PropTypes.oneOfType([
    PropTypes.array, PropTypes.object,
  ]).isRequired,
};

const mapStateToProps = state => {
  return {
    events: state.reducer.events,
    terms: state.reducer.terms,
  };
};

export default withRouter(connect(mapStateToProps)(PageDayView));

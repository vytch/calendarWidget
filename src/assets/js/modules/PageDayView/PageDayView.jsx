import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import EventBlock from 'core/Components/EventBlock';
import DayPagination from 'core/Components/DayPagination';
import eventData from 'json/events.json';
import { formatDate, addSubtract } from 'js-utils/formatDate';
import { connect } from 'react-redux';
import './style.scss';

/** This is the PageDayView component. */
class PageDayView extends React.Component {
  _handleClick = (id, direction) => {
    return direction === 'next'
      ? this.routeChange(addSubtract({ date: id, amount: 1, type: 'd' }))
      : this.routeChange(addSubtract({ date: id, amount: -1, type: 'd' }));
  }

  render() {
    const currentDay = formatDate(this.props.params.id, 'YYYYMMDD');
    // const currentDay = moment(this.props.params.id).format('YYYYMMDD');
    const todaysEvents = Object.values(this.props.events).filter(evnt => {
      const eventTime = formatDate(evnt.start, 'YYYYMMDD');

      return eventTime === currentDay;
    });

    let events = (
      <div className="no-events align-center">
        <h3>There are no events listed on this day.</h3>
      </div>
    );

    if (todaysEvents.length) {
      events = todaysEvents.map(e => <EventBlock key={`event-${e.id}`} {...e} />);
    }

    return (
      // TODO:
      // Calculate school terms
      <div className="view-current-day">
        <header className="view-current-day-header align-center">
          <button className="btn-arrows btn-transparent" type="button" disabled="false" onClick={e => this._handleClick(e, 'prev')}>
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
            <h1>{formatDate(this.props.params.id, 'DD MMMM YYYY')}</h1>
            <p>Week 22 (Term 3)</p>
          </div>

          <button className="btn-arrows btn-transparent" type="button" disabled="false" onClick={e => this._handleClick(e, 'next')}>
            <svg className="svg-arrows" viewBox="0 0 8 14">
              <path
                className="svg-black"
                d="M0.8,0.2C0.9,0.1,0.9,0.1,1,0.1s0.2,0,0.3,0.1l6.5,6.6C7.9,6.8,8,6.9,8,7s0,0.2-0.1,0.3l-6.5,6.6 c-0.1,0.1-0.2,0.1-0.3,0.1s-0.2,0-0.3-0.1l-0.6-0.6C0.1,13.1,0,13,0,12.9s0-0.2,0.1-0.3L5.8,7L0.2,1.3C0.1,1.3,0,1.2,0,1.1 s0-0.2,0.1-0.3L0.8,0.2z"
              />
            </svg>
          </button>
        </header>

        { events }

        <DayPagination {...this.props} onClick={this._handleClick} />
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
};

const mapStateToProps = state => {
  return {
    events: state.reducer.events,
  };
};

export default withRouter(connect(mapStateToProps)(PageDayView));

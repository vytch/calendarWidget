import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import moment from 'moment';
import EventBlock from 'core/Components/EventBlock';
import Button from 'core/Components/Button';
import DayPagination from 'core/Components/DayPagination';
import IconButton from 'core/Components/IconButton';
import eventData from 'json/events.json';
import './style.scss';

/** This is the PageDayView component. */
class PageDayView extends React.Component {
  state = {
    currentDay: moment(this.props.params.id).format('YYYYMMDD'),
  }

  render() {
    const todaysEvents = Object.values(eventData.events).filter(evnt => {
      const eventTime = moment(evnt.start).format('YYYYMMDD');

      return eventTime === this.state.currentDay;
    });

    return (
      // TODO:
      // Calculate school terms
      <div className="view-current-day">
        <IconButton classes="btn-back" onClick={() => this._handleSearchState()}>
          <svg x="0px" y="0px" viewBox="0 0 18 20">
            <path
              className="svg-icon"
              d="M15.9,2.5c0.5,0,1,0.2,1.3,0.5s0.5,0.8,0.5,1.3v13.8c0,0.5-0.2,1-0.5,1.3S16.4,20,15.9,20H2.1
              c-0.5,0-1-0.2-1.3-0.5s-0.5-0.8-0.5-1.3V4.4c0-0.5,0.2-1,0.5-1.3s0.8-0.5,1.3-0.5H4v-2c0-0.1,0-0.2,0.1-0.3S4.3,0,4.5,0h0.3
              C4.9,0,5,0,5.1,0.1s0.1,0.2,0.1,0.3v2h7.5v-2c0-0.1,0-0.2,0.1-0.3S13.1,0,13.2,0h0.3c0.1,0,0.2,0,0.3,0.1S14,0.3,14,0.5v2H15.9z
              M2.1,3.8c-0.2,0-0.3,0.1-0.4,0.2S1.5,4.2,1.5,4.4v1.9h15V4.4c0-0.2-0.1-0.3-0.2-0.4s-0.3-0.2-0.4-0.2H2.1z M15.9,18.8
              c0.2,0,0.3-0.1,0.4-0.2s0.2-0.3,0.2-0.4V7.5h-15v10.6c0,0.2,0.1,0.3,0.2,0.4s0.3,0.2,0.4,0.2H15.9z M6,12.5c0.1,0,0.2,0,0.3-0.1
              s0.1-0.2,0.1-0.3v-1.6c0-0.1,0-0.2-0.1-0.3S6.2,10,6,10H4.5c-0.1,0-0.2,0-0.3,0.1S4,10.3,4,10.5V12c0,0.1,0,0.2,0.1,0.3
              s0.2,0.1,0.3,0.1H6z M6,16.3c0.1,0,0.2,0,0.3-0.1s0.1-0.2,0.1-0.3v-1.6c0-0.1,0-0.2-0.1-0.3S6.2,13.8,6,13.8H4.5
              c-0.1,0-0.2,0-0.3,0.1S4,14.1,4,14.2v1.6c0,0.1,0,0.2,0.1,0.3s0.2,0.1,0.3,0.1H6z M9.8,12.5c0.1,0,0.2,0,0.3-0.1s0.1-0.2,0.1-0.3
              v-1.6c0-0.1,0-0.2-0.1-0.3S9.9,10,9.8,10H8.2c-0.1,0-0.2,0-0.3,0.1s-0.1,0.2-0.1,0.3V12c0,0.1,0,0.2,0.1,0.3s0.2,0.1,0.3,0.1H9.8z
              M9.8,16.3c0.1,0,0.2,0,0.3-0.1s0.1-0.2,0.1-0.3v-1.6c0-0.1,0-0.2-0.1-0.3s-0.2-0.1-0.3-0.1H8.2c-0.1,0-0.2,0-0.3,0.1
              s-0.1,0.2-0.1,0.3v1.6c0,0.1,0,0.2,0.1,0.3s0.2,0.1,0.3,0.1H9.8z M13.5,12.5c0.1,0,0.2,0,0.3-0.1S14,12.2,14,12v-1.6
              c0-0.1,0-0.2-0.1-0.3S13.7,10,13.5,10H12c-0.1,0-0.2,0-0.3,0.1s-0.1,0.2-0.1,0.3V12c0,0.1,0,0.2,0.1,0.3s0.2,0.1,0.3,0.1H13.5z
              M13.5,16.3c0.1,0,0.2,0,0.3-0.1s0.1-0.2,0.1-0.3v-1.6c0-0.1,0-0.2-0.1-0.3s-0.2-0.1-0.3-0.1H12c-0.1,0-0.2,0-0.3,0.1
              s-0.1,0.2-0.1,0.3v1.6c0,0.1,0,0.2,0.1,0.3s0.2,0.1,0.3,0.1H13.5z"
            />
          </svg>
        </IconButton>

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

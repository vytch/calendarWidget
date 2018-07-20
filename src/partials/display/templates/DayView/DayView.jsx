import React from 'react';
import PropTypes from 'prop-types';
import {withRouter } from 'react-router';
import EventTypeList from 'core-partials/display/molecules/EventTypeList';
import moment from 'moment';
import cx from 'classnames';
//
import { Calendar } from 'react-calendar-component';
import './style.scss';

/** This is the DayView component. */
class DayView extends React.Component {
  constructor() {
    super();
    this.state = {
      date: moment(),
    };
    this._handleDatePicked = this.setDate.bind(this);
    // this._handleHeader = this.onRenderHeader.bind(this);
  }
  setDate(date) {
    const str = date.format('YYYYMMDD');
    this.props.router.push(`/demo/${str}`);
  }
  onRenderDay({ day, classNames, onPickDate }) {
    return (
      <div
        role="button"
        key={day.format()}
        className={cx(
          'Calendar-grid-item',
          day.isSame(moment(), 'day') && 'Calendar-grid-item--current',
          classNames,
        )}
        onKeyPress={() => onPickDate(day)}
        onClick={() => onPickDate(day)}
      >
        {day.format('D')}
        <EventTypeList />
      </div>
    );
  }
  onRenderHeader({ date, onPrevMonth, onNextMonth }) {
    return (
      <div>
        <div className="Calendar-header">
          <button type="button" onClick={onPrevMonth}>«</button>
          <div className="Calendar-header-currentDate">
            {date.format('MMMM YYYY')}
          </div>
          <button type="button" onClick={onNextMonth}>»</button>
        </div>
        <div className="Calendar-grid">
          <div className="Calendar-grid-item">S</div>
          <div className="Calendar-grid-item">M</div>
          <div className="Calendar-grid-item">T</div>
          <div className="Calendar-grid-item">W</div>
          <div className="Calendar-grid-item">T</div>
          <div className="Calendar-grid-item">F</div>
          <div className="Calendar-grid-item">S</div>
        </div>
      </div>
    );

  }
  formatDate(str) {
    return moment(str, 'YYYYMMDD').format('ddd Do MMM YYYY');
  }
  render() {
    return (
      <div>
        <h2>Day view: {this.formatDate(this.props.params.id)}</h2>

        <Calendar
          onChangeMonth={date => this.setState({ date })}
          date={this.state.date}
          renderDay={this.onRenderDay}
          renderHeader={this.onRenderHeader}
          onPickDate={this._handleDatePicked}
        />
      </div>
    );
  }
}

DayView.defaultProps = {
  router: {},
};

DayView.propTypes = {
  router: PropTypes.object,
  params: PropTypes.object.isRequired,
};

export default withRouter(DayView);

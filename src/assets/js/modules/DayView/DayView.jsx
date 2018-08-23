import React from 'react';
import PropTypes from 'prop-types';
import {withRouter } from 'react-router';
import EventTypeList from 'core/Components/EventTypeList';
import CalendarLegend from 'core/Components/CalendarLegend';
import moment from 'moment';
import cx from 'classnames';
import Button from 'core/Components/Button';
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
    this._handleSwitchView = this.handleCalendarView.bind(this);
    // this._handleHeader = this.onRenderHeader.bind(this);
  }

  handleCalendarView() {
    // switch from Calendar to search fields
    return this.props.switchView();
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
      <header>
        <div className="Calendar-header">
          <button type="button" onClick={onPrevMonth}>«</button>
          <h3 className="Calendar-header-currentDate">
            {date.format('MMMM YYYY')}
          </h3>
          <button type="button" onClick={onNextMonth}>»</button>
        </div>
        <div className="Calendar-grid Calendar-grid-days">
          <div className="Calendar-grid-item">S</div>
          <div className="Calendar-grid-item">M</div>
          <div className="Calendar-grid-item">T</div>
          <div className="Calendar-grid-item">W</div>
          <div className="Calendar-grid-item">T</div>
          <div className="Calendar-grid-item">F</div>
          <div className="Calendar-grid-item">S</div>
        </div>
      </header>
    );

  }
  formatDate(str) {
    return moment(str, 'YYYYMMDD').format('ddd Do MMM YYYY');
  }
  render() {
    return (
      <div>
        <h3>MLC Calendar of events</h3>

        <Calendar
          onChangeMonth={date => this.setState({ date })}
          date={this.state.date}
          renderDay={this.onRenderDay}
          renderHeader={this.onRenderHeader}
          onPickDate={this._handleDatePicked}
        />

        <CalendarLegend />

        {/* TODO: Make this a footer actions component */}
        <footer className="Calendar-actions">
          <Button label={'View Key Dates'} btnClass={'btn-primary'} />
          <Button label={'Search For Events'} btnClass={'btn-primary'} onClick={this.handleCalendarView()} />
        </footer>
      </div>
    );
  }
}

DayView.defaultProps = {
  router: {},
  switchView: null,
};

DayView.propTypes = {
  router: PropTypes.object,
  switchView: PropTypes.func,
};

export default withRouter(DayView);

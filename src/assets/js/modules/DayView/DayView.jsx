import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {withRouter } from 'react-router';
import EventTypeList from 'core/Components/EventTypeList';
import CalendarLegend from 'core/Components/CalendarLegend';
import moment from 'moment';
import cx from 'classnames';
import Button from 'core/Components/Button';
import DayViewDropDown from 'core/Components/DayViewDropDown';
import { Calendar } from 'react-calendar-component';
// import { Dropdown, Header } from 'semantic-ui-react';
import './style.scss';
import { setIsSearching, updateMonthYear } from '../CalendarContainer/Actions/CalendarActions';

/** This is the DayView component. */
class DayView extends React.Component {
  constructor() {
    super();
    this.state = {
      date: moment(),
    };
  }

  _handleSearchState = () => {
    this.props.dispatch(setIsSearching());
  }

  _handleDatePicked = date => {
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
        <EventTypeList day={day} />
      </div>
    );
  }

  _handleChangeMonth = nextDate => {
    const date = moment(nextDate).format('YYYYMMDD');
    const {min, max} = this.props.minMax;

    // If not in range, don't do anything.
    if (date >= max || date <= min) { return false; };

    this.props.dispatch(updateMonthYear(date));
  }

  onRenderHeader({ date, onPrevMonth, onNextMonth }) {
    return (
      <header>
        <div className="Calendar-header">
          <button type="button" onClick={onPrevMonth}>
            <svg className="svg-arrows" viewBox="0 0 8 14">
              <path
                className="svg-black"
                d="M7.2,13.8c-0.1,0.1-0.1,0.1-0.3,0.1c-0.1,0-0.2,0-0.3-0.1L0.2,7.2C0.1,7.2,0,7.1,0,7s0-0.2,0.1-0.3l6.5-6.6
                C6.8,0.1,6.9,0.1,7,0.1s0.2,0,0.3,0.1l0.6,0.6C7.9,0.9,8,1,8,1.1s0,0.2-0.1,0.3L2.2,7l5.7,5.7C7.9,12.7,8,12.8,8,12.9s0,0.2-0.1,0.3
                L7.2,13.8z"
              />
            </svg>
          </button>

          <h3 className="Calendar-header-currentDate">
            <DayViewDropDown />
          </h3>

          <button type="button" onClick={onNextMonth}>
            <svg className="svg-arrows" viewBox="0 0 8 14">
              <path
                className="svg-black"
                d="M0.8,0.2C0.9,0.1,0.9,0.1,1,0.1s0.2,0,0.3,0.1l6.5,6.6C7.9,6.8,8,6.9,8,7s0,0.2-0.1,0.3l-6.5,6.6 c-0.1,0.1-0.2,0.1-0.3,0.1s-0.2,0-0.3-0.1l-0.6-0.6C0.1,13.1,0,13,0,12.9s0-0.2,0.1-0.3L5.8,7L0.2,1.3C0.1,1.3,0,1.2,0,1.1 s0-0.2,0.1-0.3L0.8,0.2z"
              />
            </svg>
          </button>
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
          onChangeMonth={date => this._handleChangeMonth(date._d)}
          date={moment(this.props.selectedDate)}
          renderDay={this.onRenderDay}
          renderHeader={this.onRenderHeader}
          onPickDate={this._handleDatePicked}
        />

        <CalendarLegend />

        <footer className="Calendar-actions">
          <Button label={'View Key Dates'} btnClass={'btn-primary'}>
            <svg className="btn-icon-sm" x="0px" y="0px" viewBox="0 0 16 16">
              <path
                className="svg-white"
                d="M10.5,2.5c0.9,0,2.1-0.3,3.4-0.9c0.3-0.1,0.7-0.2,1-0.1s0.6,0.3,0.8,0.5S16,2.6,16,3v7.5c0,0.3-0.1,0.5-0.2,0.7
                  s-0.3,0.4-0.5,0.5c-1.3,0.8-2.6,1.3-4,1.3c-0.5,0-1.1-0.1-1.6-0.2c-0.3-0.1-0.8-0.2-1.4-0.4c-0.5-0.1-0.8-0.3-1.1-0.3
                  C6.9,12,6.6,12,6.3,12c-0.8,0-1.6,0.1-2.2,0.3c-0.5,0.1-1.1,0.3-1.8,0.7v2.6c0,0.1,0,0.3-0.1,0.4S1.9,16,1.8,16H1.3
                  c-0.1,0-0.3,0-0.4-0.1s-0.1-0.2-0.1-0.4V2.8C0.5,2.7,0.4,2.5,0.2,2.3S0,1.8,0,1.5c0-0.4,0.2-0.8,0.5-1.1S1.2,0,1.6,0
                  C2,0,2.3,0.2,2.5,0.4S3,1,3,1.3C3,1.5,3,1.8,3,2c0.8-0.3,1.6-0.5,2.5-0.5C6,1.5,6.5,1.6,7,1.7c0.3,0.1,0.8,0.2,1.4,0.4
                  c0.5,0.1,0.8,0.3,1.1,0.3C9.9,2.5,10.2,2.5,10.5,2.5z M14.5,10.5V3c-0.6,0.3-1.2,0.5-1.9,0.7C11.8,3.9,11.1,4,10.5,4
                  c-0.4,0-0.9-0.1-1.3-0.2C8.9,3.8,8.5,3.7,8,3.5S7.1,3.2,6.8,3.2C6.3,3.1,5.9,3,5.5,3C4.8,3,4.2,3.1,3.6,3.3C3.1,3.5,2.7,3.7,2.3,4
                  v7.3c0.5-0.2,1.1-0.4,1.8-0.5s1.5-0.2,2.2-0.2c0.4,0,0.9,0.1,1.3,0.2c0.3,0.1,0.7,0.2,1.2,0.3s0.9,0.3,1.2,0.3
                  c0.5,0.1,0.9,0.2,1.3,0.2c0.6,0,1.2-0.1,1.8-0.3C13.7,11,14.1,10.8,14.5,10.5z"
              />
            </svg>
          </Button>

          <Button label={'Search For Events'} btnClass={'btn-primary'} onClick={() => this._handleSearchState()}>
            <svg className="btn-icon-sm" viewBox="0 0 16 16">
              <path
                className="svg-white"
                d="M15.9,14.7c0.1,0.1,0.1,0.1,0.1,0.3s0,0.2-0.1,0.3l-0.7,0.7C15.1,16,15,16,14.9,16s-0.2,0-0.3-0.1l-3.8-3.8
                c-0.1-0.1-0.1-0.2-0.1-0.3v-0.4c-0.6,0.5-1.2,0.9-2,1.2S7.3,13,6.5,13c-1.2,0-2.3-0.3-3.3-0.9s-1.8-1.4-2.4-2.4S0,7.7,0,6.5
                s0.3-2.3,0.9-3.3s1.4-1.8,2.4-2.4S5.3,0,6.5,0s2.3,0.3,3.3,0.9s1.8,1.4,2.4,2.4S13,5.3,13,6.5c0,0.8-0.1,1.6-0.4,2.3s-0.7,1.4-1.2,2
                h0.4c0.1,0,0.2,0,0.3,0.1L15.9,14.7z M6.5,11.5c0.9,0,1.7-0.2,2.5-0.7s1.4-1.1,1.8-1.8s0.7-1.6,0.7-2.5S11.3,4.8,10.8,4
                S9.8,2.6,9,2.2S7.4,1.5,6.5,1.5S4.8,1.7,4,2.2S2.6,3.2,2.2,4S1.5,5.6,1.5,6.5S1.7,8.2,2.2,9s1.1,1.4,1.8,1.8S5.6,11.5,6.5,11.5z"
              />
            </svg>
          </Button>
        </footer>
      </div>
    );
  }
}

DayView.defaultProps = {
  router: {},
};

DayView.propTypes = {
  router: PropTypes.object,
  selectedDate: PropTypes.string.isRequired,
  minMax: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    selectedDate: state.reducer.selectedDate,
    minMax: state.reducer.minMax,
  };
};

export default withRouter(connect(mapStateToProps)(DayView));

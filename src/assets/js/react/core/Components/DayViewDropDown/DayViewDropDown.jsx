import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Header } from 'semantic-ui-react';
import { formatDate, addSubtract } from 'js-utils/formatDate';
import { connect } from 'react-redux';
import { updateMonthYear } from 'fed-modules/CalendarContainer/Actions/CalendarActions.js';
import './style.scss';

const options = [
  {
    key: 'c-m-january',
    text: 'January',
    value: '01',
    content: 'January',
  },
  {
    key: 'c-m-february',
    text: 'February',
    value: '02',
    content: 'February',
  },
  {
    key: 'c-m-march',
    text: 'March',
    value: '03',
    content: 'March',
  },
  {
    key: 'c-m-april',
    text: 'April',
    value: '04',
    content: 'April',
  },
  {
    key: 'c-m-may',
    text: 'May',
    value: '05',
    content: 'May',
  },
  {
    key: 'c-m-june',
    text: 'June',
    value: '06',
    content: 'June',
  },
  {
    key: 'c-m-july',
    text: 'July',
    value: '07',
    content: 'July',
  },
  {
    key: 'c-m-august',
    text: 'August',
    value: '08',
    content: 'August',
  },
  {
    key: 'c-m-september',
    text: 'September',
    value: '09',
    content: 'September',
  },
  {
    key: 'c-m-october',
    text: 'October',
    value: '10',
    content: 'October',
  },
  {
    key: 'c-m-november',
    text: 'November',
    value: '11',
    content: 'November',
  },
  {
    key: 'c-m-december',
    text: 'December',
    value: '12',
    content: 'December',
  },
];

/** This is the DayViewDropDown component. */
class DayViewDropDown extends React.PureComponent {
  _handleYearChange = (e, direction) => {
    e.preventDefault();
    e.stopPropagation();

    const addYear = addSubtract({
      date: this.props.selectedDate,
      amount: 1,
    });

    const subtractYear = addSubtract({
      date: this.props.selectedDate,
      amount: -1,
    });

    direction === 'next'
      ? this.props.dispatch(updateMonthYear(addYear))
      : this.props.dispatch(updateMonthYear(subtractYear));
  }

  // Updates calendar with selected month from dropdown
  _handleMonthChange = (e, month) => {
    const date = this.props.selectedDate;
    const year = formatDate(date, 'YYYY');
    const day = formatDate(date, 'DD');

    this.props.dispatch(updateMonthYear(`${year}${month}${day}`));
  }

  render() {
    const selectedDate = this.props.selectedDate;
    const {min, max} = this.props.minMax;

    // The trigger is the date displayed above the calendar
    const trigger = (
      <span>
        { formatDate(selectedDate, 'MMMM YYYY') }
      </span>
    );

    const isMin = selectedDate <= min ? true : false;
    const isMax = selectedDate >= max ? true : false;

    const yearSelector = (
      <div className="year-selector">
        <button type="button" disabled={isMin} onClick={e => this._handleYearChange(e, 'prev')}>
          <svg className="svg-arrows" viewBox="0 0 8 14">
            <path
              className="svg-black"
              d="M7.2,13.8c-0.1,0.1-0.1,0.1-0.3,0.1c-0.1,0-0.2,0-0.3-0.1L0.2,7.2C0.1,7.2,0,7.1,0,7s0-0.2,0.1-0.3l6.5-6.6
              C6.8,0.1,6.9,0.1,7,0.1s0.2,0,0.3,0.1l0.6,0.6C7.9,0.9,8,1,8,1.1s0,0.2-0.1,0.3L2.2,7l5.7,5.7C7.9,12.7,8,12.8,8,12.9s0,0.2-0.1,0.3
              L7.2,13.8z"
            />
          </svg>
        </button>

        <span className="year-selected">{ formatDate(selectedDate, 'YYYY') }</span>

        <button type="button" disabled={isMax} onClick={e => this._handleYearChange(e, 'next')}>
          <svg className="svg-arrows" viewBox="0 0 8 14">
            <path
              className="svg-black"
              d="M0.8,0.2C0.9,0.1,0.9,0.1,1,0.1s0.2,0,0.3,0.1l6.5,6.6C7.9,6.8,8,6.9,8,7s0,0.2-0.1,0.3l-6.5,6.6 c-0.1,0.1-0.2,0.1-0.3,0.1s-0.2,0-0.3-0.1l-0.6-0.6C0.1,13.1,0,13,0,12.9s0-0.2,0.1-0.3L5.8,7L0.2,1.3C0.1,1.3,0,1.2,0,1.1 s0-0.2,0.1-0.3L0.8,0.2z"
            />
          </svg>
        </button>
      </div>
    );

    return (
      <Header>
        <Header.Content>
          <Dropdown
            inline
            trigger={trigger}
            header={yearSelector}
            options={options}
            defaultValue={options[0].value}
            onChange={(e, {value}) => this._handleMonthChange(e, value)}
          />
        </Header.Content>
      </Header>
    );
  }
}

DayViewDropDown.defaultProps = {
};

DayViewDropDown.propTypes = {
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

export default connect(mapStateToProps)(DayViewDropDown);


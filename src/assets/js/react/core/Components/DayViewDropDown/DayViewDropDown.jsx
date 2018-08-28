import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Header } from 'semantic-ui-react';
import moment from 'moment';
import { connect } from 'react-redux';
import { updateMonthYear } from 'fed-modules/CalendarContainer/Actions/CalendarActions.js';
import Button from '../Button';
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

    const addYear = moment(this.props.selectedDate).add(1, 'y').format('YYYYMMDD');
    const subtractYear = moment(this.props.selectedDate).subtract(1, 'y').format('YYYYMMDD');

    direction === 'next'
      ? this.props.dispatch(updateMonthYear(addYear))
      : this.props.dispatch(updateMonthYear(subtractYear));
  }

  // Updates calendar with selected month from dropdown
  _handleMonthChange = (e, month) => {
    const year = moment(this.props.selectedDate).format('YYYY');
    const day = moment(this.props.selectedDate).format('DD');

    this.props.dispatch(updateMonthYear(`${year}${month}${day}`));
  }

  render() {
    const selectedDate = this.props.selectedDate;
    const {min, max} = this.props.minMax;

    // The trigger is the date displayed above the calendar
    const trigger = (
      <span>
        { moment(selectedDate).format('MMMM YYYY') }
      </span>
    );

    const isMin = selectedDate <= min ? true : false;
    const isMax = selectedDate >= max ? true : false;

    const yearSelector = (
      <div className="test">
        <Button disabled={isMin} label="<" onClick={e => this._handleYearChange(e, 'prev')} />
        <span>{moment(selectedDate).format('YYYY')}</span>
        <Button disabled={isMax} label=">" onClick={e => this._handleYearChange(e, 'next')} />
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


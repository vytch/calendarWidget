import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setIsSearching } from 'fed-modules/CalendarContainer/Actions/SearchActions.js';
import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import CheckboxGroup from '../CheckboxGroup';
import Button from '../Button';
import IconButton from '../IconButton';
import './style.scss';

const cbOptions = [
  {
    name: 'search-types',
    value: 'JS',
    label: 'Junior School (JS)',
    checked: true,
  },
  {
    name: 'search-types',
    value: 'JSS',
    label: 'Junior Secondary School (JSS)',
    checked: true,
  },
  {
    name: 'search-types',
    value: 'MS',
    label: 'Middle School (JS)',
    checked: true,
  },
  {
    name: 'search-types',
    value: 'SS',
    label: 'Secondary School (JS)',
    checked: true,
  },
];

/** This is the CalendarSearch component. */
class CalendarSearch extends React.Component {
  _handleSearchState = () => {
    this.props.dispatch(setIsSearching());
  }

  render() {
    const options = [
      {key: 'option-1', text: 'Option 1', value: 'option-1'},
      {key: 'option-2', text: 'Option 2', value: 'option-2'},
      {key: 'option-3', text: 'Option 3', value: 'option-3'},
      {key: 'option-4', text: 'Option 4', value: 'option-4'},
      {key: 'option-5', text: 'Option 5', value: 'option-5'},
    ];

    return (
      <div className="calendar-search form">
        <h3>
          <IconButton onClick={() => this._handleSearchState()}>
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
          Search for events
        </h3>

        {/* TODO: Create form components */}
        <div className="form-group">
          <label htmlFor="search-keywords">Keywords</label>
          <input id="search-keywords" name="search-keywords" type="text" />
        </div>

        <CheckboxGroup label={'School'} options={cbOptions} />

        <div className="form-group">
          <Dropdown placeholder="Skills" fluid multiple selection options={options} />
        </div>

        <div className="form-group">
          <label htmlFor="search-category">Category</label>
          <select name="search-category" id="search-category">
            <option value="Option 1">Option 1</option>
            <option value="Option 2">Option 2</option>
            <option value="Option 3">Option 3</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="search-dates">Keywords</label>
          {/* TODO: Calculate 20yr range for min max valus */}
          <input type="date" name="search-dates" id="search-dates" />
        </div>

        <footer className="form-actions">
          <Button label={'Search Events'} />
        </footer>
      </div>
    );
  }
}

CalendarSearch.defaultProps = {
};

CalendarSearch.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(CalendarSearch);

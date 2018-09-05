import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setIsSearching } from 'fed-modules/CalendarContainer/Actions/CalendarActions';
import { getSearchResults } from 'fed-modules/PageSearchResults/Actions/SearchActions';
import { Dropdown } from 'semantic-ui-react';
import { formatDate } from 'js-utils/formatDate';
import Loader from 'core/Components/Loader';
import daterangepicker from 'daterangepicker';
import $ from 'jquery';
import CheckboxGroup from '../CheckboxGroup';
import Button from '../Button';
import IconButton from '../IconButton';
import './style.scss';

const cbOptions = [
  {
    name: 'school',
    value: 'JS',
    label: 'Junior School (JS)',
    checked: true,
  },
  {
    name: 'school',
    value: 'JSS',
    label: 'Junior Secondary School (JSS)',
    checked: true,
  },
  {
    name: 'school',
    value: 'MS',
    label: 'Middle School (JS)',
    checked: true,
  },
  {
    name: 'school',
    value: 'SS',
    label: 'Secondary School (JS)',
    checked: true,
  },
];

/** This is the CalendarSearch component. */
class CalendarSearch extends React.Component {
  constructor() {
    super();
    this.selector = '';
    this.state = {
      form: {
        keywords: [],
        school: [...cbOptions.map(e => e.value)],
        category: [],
        start: formatDate(new Date(), 'YYYYMMDD'),
        end: formatDate(new Date(), 'YYYYMMDD'),
      },
    };
  }

  // Keeps the search view open if searching
  _handleSearchState = () => this.props.router.push('/');

  // used for semanticUI
  _handleCategorySelection = (e, { value }) =>  this.updateFormState('category', value);

  _handleInputValues = event => {
    const _e = event.target;
    const name = _e.name;
    let value = _e.value;
    let checkboxValues = this.state.form.school;

    // If checkbox - we need different values
    if (_e.type === 'checkbox') {
      const filteredValues = checkboxValues.filter(e => e !== value);
      _e.checked ? checkboxValues.push(value) : checkboxValues = filteredValues;
      value = checkboxValues;
    }

    // sort keywords into arrays
    if (name === 'keywords') {
      value = value.includes(',') ? value.split('  ').join(' ').split(',') : [value.trim()];
    }

    this.updateFormState(name, value);
  }

  _handleSubmit() {
    /*the 'serialize' adds a search query to the param so if the
      page is refreshed / URL is shared, it still works. */
    const form = this.state.form;
    const serialize = Object.entries(form).map(([key, val]) => `${key}=${val}`).join('&');
    this.props.getSearchResults(form);
    this.props.router.push(`search-results?${serialize}`);
  }

  updateFormState = (name, val) => {
    this.setState(prevState => ({
      ...prevState,
      form: {
        ...prevState.form,
        [name]: val,
      },
    }));
  }

  componentDidMount = () => {
    const el = this.selector;
    $(el).daterangepicker({}, (start, end) => {
      // this callback function runs on change
      this.setState(prevState => ({
        ...prevState,
        form: {
          ...prevState.form,
          start: start.format('YYYYMMDD'),
          end: end.format('YYYYMMDD'),
        },
      }));
    });
  }

  render() {
    const { keywords, category } = this.state.form;
    const dropdown = this.props.categoryLoading
      ? <Loader />
      : <Dropdown fluid multiple selection options={this.props.categories} onChange={this._handleCategorySelection} value={category} />;

    return (
      <form className="calendar-search form">
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
          <input id="search-keywords" name="keywords" type="text" value={keywords} onChange={this._handleInputValues} />
        </div>

        <CheckboxGroup label={'School'} options={cbOptions} onChange={this._handleInputValues} />

        <div className="form-group">
          <label htmlFor="search-category">Category</label>
          { dropdown }
        </div>

        <div className="form-group">
          <label htmlFor="search-dates">Date</label>
          {/* TODO: Calculate 20yr range for min max valus */}
          <input ref={n => this.selector = n} type="input" name="range" id="search-dates" />
        </div>

        <footer className="form-actions">
          {/* TODO: Make this an api request */}
          {/* <Link to="/search-results"> */}
          <Button label={'Search Events'} onClick={() => this._handleSubmit()} />
          {/* </Link> */}
        </footer>
      </form>
    );
  }
}

CalendarSearch.defaultProps = {
};

CalendarSearch.propTypes = {
  router: PropTypes.object.isRequired,
  getSearchResults: PropTypes.func.isRequired,
  categories: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  categoryLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  return {
    categories: state.reducer.categories,
    categoryLoading: state.reducer.categoryLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSearchResults: data => dispatch(getSearchResults(data)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CalendarSearch));

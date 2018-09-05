module.exports = [
    {
        "name": "Button",
        "description": "This is the Button component.",
        "props": {
            "onClick": {
                "type": { "name": "func" },
                "required": false,
                "description": "",
                "defaultValue": { "value": "() => { }", "computed": false }
            },
            "label": {
                "type": { "name": "string" },
                "required": false,
                "description": "",
                "defaultValue": { "value": "'Button Label'", "computed": false }
            },
            "btnClass": {
                "type": { "name": "string" },
                "required": false,
                "description": "",
                "defaultValue": { "value": "null", "computed": false }
            },
            "children": {
                "type": {
                    "name": "union",
                    "value": [ { "name": "element" }, { "name": "string" } ]
                },
                "required": false,
                "description": "",
                "defaultValue": { "value": "null", "computed": false }
            },
            "disabled": {
                "type": { "name": "bool" },
                "required": false,
                "description": "",
                "defaultValue": { "value": "false", "computed": false }
            }
        },
        "code": "import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport './style.scss';\r\n\r\n/** This is the Button component. */\r\nclass Button extends React.PureComponent {\r\n  _handleClick = e => {\r\n    this.props.onClick(e);\r\n  }\r\n\r\n  render() {\r\n    const classes = this.props.btnClass ? ['btn', this.props.btnClass] : ['btn'];\r\n\r\n    return (\r\n      // TODO: Add icons\r\n      <button\r\n        type=\"button\"\r\n        className={classes.join(' ')}\r\n        onClick={this._handleClick}\r\n        disabled={this.props.disabled}\r\n      >\r\n        { this.props.children }\r\n        { this.props.label }\r\n      </button>\r\n    );\r\n  }\r\n}\r\n\r\nButton.defaultProps = {\r\n  onClick: () => { },\r\n  label: 'Button Label',\r\n  btnClass: null,\r\n  children: null,\r\n  disabled: false,\r\n};\r\n\r\nButton.propTypes = {\r\n  onClick: PropTypes.func,\r\n  label: PropTypes.string,\r\n  btnClass: PropTypes.string,\r\n  children: PropTypes.oneOfType([\r\n    PropTypes.element,\r\n    PropTypes.string,\r\n  ]),\r\n  disabled: PropTypes.bool,\r\n};\r\n\r\nexport default Button;\r\n",
        "examples": []
    },
    {
        "name": "CalendarBackButton",
        "description": "This is the CalendarBackButton component.",
        "props": {
            "router": {
                "type": { "name": "object" },
                "required": true,
                "description": ""
            }
        },
        "code": "import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport { withRouter } from 'react-router';\r\nimport IconButton from 'core/Components/IconButton';\r\n\r\n/** This is the CalendarBackButton component. */\r\nclass CalendarBackButton extends React.PureComponent {\r\n  _handleRouteBack() {\r\n    this.props.router.push('/');\r\n  }\r\n\r\n  render() {\r\n    return (\r\n      <IconButton classes=\"btn-back\" onClick={() => this._handleRouteBack()}>\r\n        <svg x=\"0px\" y=\"0px\" viewBox=\"0 0 18 20\">\r\n          <path\r\n            className=\"svg-icon\"\r\n            d=\"M15.9,2.5c0.5,0,1,0.2,1.3,0.5s0.5,0.8,0.5,1.3v13.8c0,0.5-0.2,1-0.5,1.3S16.4,20,15.9,20H2.1\r\n            c-0.5,0-1-0.2-1.3-0.5s-0.5-0.8-0.5-1.3V4.4c0-0.5,0.2-1,0.5-1.3s0.8-0.5,1.3-0.5H4v-2c0-0.1,0-0.2,0.1-0.3S4.3,0,4.5,0h0.3\r\n            C4.9,0,5,0,5.1,0.1s0.1,0.2,0.1,0.3v2h7.5v-2c0-0.1,0-0.2,0.1-0.3S13.1,0,13.2,0h0.3c0.1,0,0.2,0,0.3,0.1S14,0.3,14,0.5v2H15.9z\r\n            M2.1,3.8c-0.2,0-0.3,0.1-0.4,0.2S1.5,4.2,1.5,4.4v1.9h15V4.4c0-0.2-0.1-0.3-0.2-0.4s-0.3-0.2-0.4-0.2H2.1z M15.9,18.8\r\n            c0.2,0,0.3-0.1,0.4-0.2s0.2-0.3,0.2-0.4V7.5h-15v10.6c0,0.2,0.1,0.3,0.2,0.4s0.3,0.2,0.4,0.2H15.9z M6,12.5c0.1,0,0.2,0,0.3-0.1\r\n            s0.1-0.2,0.1-0.3v-1.6c0-0.1,0-0.2-0.1-0.3S6.2,10,6,10H4.5c-0.1,0-0.2,0-0.3,0.1S4,10.3,4,10.5V12c0,0.1,0,0.2,0.1,0.3\r\n            s0.2,0.1,0.3,0.1H6z M6,16.3c0.1,0,0.2,0,0.3-0.1s0.1-0.2,0.1-0.3v-1.6c0-0.1,0-0.2-0.1-0.3S6.2,13.8,6,13.8H4.5\r\n            c-0.1,0-0.2,0-0.3,0.1S4,14.1,4,14.2v1.6c0,0.1,0,0.2,0.1,0.3s0.2,0.1,0.3,0.1H6z M9.8,12.5c0.1,0,0.2,0,0.3-0.1s0.1-0.2,0.1-0.3\r\n            v-1.6c0-0.1,0-0.2-0.1-0.3S9.9,10,9.8,10H8.2c-0.1,0-0.2,0-0.3,0.1s-0.1,0.2-0.1,0.3V12c0,0.1,0,0.2,0.1,0.3s0.2,0.1,0.3,0.1H9.8z\r\n            M9.8,16.3c0.1,0,0.2,0,0.3-0.1s0.1-0.2,0.1-0.3v-1.6c0-0.1,0-0.2-0.1-0.3s-0.2-0.1-0.3-0.1H8.2c-0.1,0-0.2,0-0.3,0.1\r\n            s-0.1,0.2-0.1,0.3v1.6c0,0.1,0,0.2,0.1,0.3s0.2,0.1,0.3,0.1H9.8z M13.5,12.5c0.1,0,0.2,0,0.3-0.1S14,12.2,14,12v-1.6\r\n            c0-0.1,0-0.2-0.1-0.3S13.7,10,13.5,10H12c-0.1,0-0.2,0-0.3,0.1s-0.1,0.2-0.1,0.3V12c0,0.1,0,0.2,0.1,0.3s0.2,0.1,0.3,0.1H13.5z\r\n            M13.5,16.3c0.1,0,0.2,0,0.3-0.1s0.1-0.2,0.1-0.3v-1.6c0-0.1,0-0.2-0.1-0.3s-0.2-0.1-0.3-0.1H12c-0.1,0-0.2,0-0.3,0.1\r\n            s-0.1,0.2-0.1,0.3v1.6c0,0.1,0,0.2,0.1,0.3s0.2,0.1,0.3,0.1H13.5z\"\r\n          />\r\n        </svg>\r\n      </IconButton>\r\n    );\r\n  }\r\n}\r\n\r\nCalendarBackButton.defaultProps = {\r\n};\r\n\r\nCalendarBackButton.propTypes = {\r\n  router: PropTypes.object.isRequired,\r\n};\r\n\r\nexport default withRouter(CalendarBackButton);\r\n\r\n",
        "examples": []
    },
    {
        "name": "CalendarLegend",
        "description": "This is the CalendarLegend component.",
        "props": {
            "eventTypes": {
                "type": { "name": "array" },
                "required": true,
                "description": ""
            }
        },
        "code": "import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport { connect } from 'react-redux';\r\nimport './style.scss';\r\n\r\n/** This is the CalendarLegend component. */\r\nclass CalendarLegend extends React.PureComponent {\r\n  render() {\r\n    return (\r\n      /*\r\n        TODO\r\n        - Make this an array or object that gets looped through\r\n        - Make abbreviations global so they apply to calendar and event-list-type\r\n        - auto abbreviate legend titles\r\n      */\r\n\r\n      <ul className=\"legend\">\r\n        {\r\n          this.props.eventTypes.map(({ type, name }) => {\r\n            return <li key={`legend-${type}-${name}`} className=\"legend-item\" data-type={type}>{name}</li>;\r\n          })\r\n        }\r\n      </ul>\r\n    );\r\n  }\r\n}\r\n\r\nCalendarLegend.defaultProps = {\r\n};\r\n\r\nCalendarLegend.propTypes = {\r\n  eventTypes: PropTypes.array.isRequired,\r\n};\r\n\r\nconst mapStateToProps = state => {\r\n  return {\r\n    eventTypes: state.reducer.eventTypes,\r\n  };\r\n};\r\n\r\nexport default connect(mapStateToProps)(CalendarLegend);\r\n\r\n",
        "examples": []
    },
    {
        "name": "CalendarSearch",
        "description": "This is the CalendarSearch component.",
        "props": {
            "router": {
                "type": { "name": "object" },
                "required": true,
                "description": ""
            },
            "getSearchResults": {
                "type": { "name": "func" },
                "required": true,
                "description": ""
            },
            "categories": {
                "type": {
                    "name": "union",
                    "value": [ { "name": "array" }, { "name": "object" } ]
                },
                "required": true,
                "description": ""
            },
            "categoryLoading": {
                "type": { "name": "bool" },
                "required": true,
                "description": ""
            }
        },
        "code": "import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport { connect } from 'react-redux';\r\nimport { withRouter } from 'react-router';\r\nimport { setIsSearching } from 'fed-modules/CalendarContainer/Actions/CalendarActions';\r\nimport { getSearchResults } from 'fed-modules/PageSearchResults/Actions/SearchActions';\r\nimport { Dropdown } from 'semantic-ui-react';\r\nimport { formatDate } from 'js-utils/formatDate';\r\nimport Loader from 'core/Components/Loader';\r\nimport daterangepicker from 'daterangepicker';\r\nimport $ from 'jquery';\r\nimport CheckboxGroup from '../CheckboxGroup';\r\nimport Button from '../Button';\r\nimport IconButton from '../IconButton';\r\nimport './style.scss';\r\n\r\nconst cbOptions = [\r\n  {\r\n    name: 'school',\r\n    value: 'JS',\r\n    label: 'Junior School (JS)',\r\n    checked: true,\r\n  },\r\n  {\r\n    name: 'school',\r\n    value: 'JSS',\r\n    label: 'Junior Secondary School (JSS)',\r\n    checked: true,\r\n  },\r\n  {\r\n    name: 'school',\r\n    value: 'MS',\r\n    label: 'Middle School (JS)',\r\n    checked: true,\r\n  },\r\n  {\r\n    name: 'school',\r\n    value: 'SS',\r\n    label: 'Secondary School (JS)',\r\n    checked: true,\r\n  },\r\n];\r\n\r\n/** This is the CalendarSearch component. */\r\nclass CalendarSearch extends React.Component {\r\n  constructor() {\r\n    super();\r\n    this.selector = '';\r\n    this.state = {\r\n      form: {\r\n        keywords: [],\r\n        school: [...cbOptions.map(e => e.value)],\r\n        category: [],\r\n        start: formatDate(new Date(), 'YYYYMMDD'),\r\n        end: formatDate(new Date(), 'YYYYMMDD'),\r\n      },\r\n    };\r\n  }\r\n\r\n  // Keeps the search view open if searching\r\n  _handleSearchState = () => this.props.router.push('/');\r\n\r\n  // used for semanticUI\r\n  _handleCategorySelection = (e, { value }) =>  this.updateFormState('category', value);\r\n\r\n  _handleInputValues = event => {\r\n    const _e = event.target;\r\n    const name = _e.name;\r\n    let value = _e.value;\r\n    let checkboxValues = this.state.form.school;\r\n\r\n    // If checkbox - we need different values\r\n    if (_e.type === 'checkbox') {\r\n      const filteredValues = checkboxValues.filter(e => e !== value);\r\n      _e.checked ? checkboxValues.push(value) : checkboxValues = filteredValues;\r\n      value = checkboxValues;\r\n    }\r\n\r\n    // sort keywords into arrays\r\n    if (name === 'keywords') {\r\n      value = value.includes(',') ? value.split('  ').join(' ').split(',') : [value.trim()];\r\n    }\r\n\r\n    this.updateFormState(name, value);\r\n  }\r\n\r\n  _handleSubmit() {\r\n    /*the 'serialize' adds a search query to the param so if the\r\n      page is refreshed / URL is shared, it still works. */\r\n    const form = this.state.form;\r\n    const serialize = Object.entries(form).map(([key, val]) => `${key}=${val}`).join('&');\r\n    this.props.getSearchResults(form);\r\n    this.props.router.push(`search-results?${serialize}`);\r\n  }\r\n\r\n  updateFormState = (name, val) => {\r\n    this.setState(prevState => ({\r\n      ...prevState,\r\n      form: {\r\n        ...prevState.form,\r\n        [name]: val,\r\n      },\r\n    }));\r\n  }\r\n\r\n  componentDidMount = () => {\r\n    const el = this.selector;\r\n    $(el).daterangepicker({}, (start, end) => {\r\n      // this callback function runs on change\r\n      this.setState(prevState => ({\r\n        ...prevState,\r\n        form: {\r\n          ...prevState.form,\r\n          start: start.format('YYYYMMDD'),\r\n          end: end.format('YYYYMMDD'),\r\n        },\r\n      }));\r\n    });\r\n  }\r\n\r\n  render() {\r\n    const { keywords, category } = this.state.form;\r\n    const dropdown = this.props.categoryLoading\r\n      ? <Loader />\r\n      : <Dropdown fluid multiple selection options={this.props.categories} onChange={this._handleCategorySelection} value={category} />;\r\n\r\n    return (\r\n      <form className=\"calendar-search form\">\r\n        <h3>\r\n          <IconButton onClick={() => this._handleSearchState()}>\r\n            <svg x=\"0px\" y=\"0px\" viewBox=\"0 0 18 20\">\r\n              <path\r\n                className=\"svg-icon\"\r\n                d=\"M15.9,2.5c0.5,0,1,0.2,1.3,0.5s0.5,0.8,0.5,1.3v13.8c0,0.5-0.2,1-0.5,1.3S16.4,20,15.9,20H2.1\r\n                c-0.5,0-1-0.2-1.3-0.5s-0.5-0.8-0.5-1.3V4.4c0-0.5,0.2-1,0.5-1.3s0.8-0.5,1.3-0.5H4v-2c0-0.1,0-0.2,0.1-0.3S4.3,0,4.5,0h0.3\r\n                C4.9,0,5,0,5.1,0.1s0.1,0.2,0.1,0.3v2h7.5v-2c0-0.1,0-0.2,0.1-0.3S13.1,0,13.2,0h0.3c0.1,0,0.2,0,0.3,0.1S14,0.3,14,0.5v2H15.9z\r\n                M2.1,3.8c-0.2,0-0.3,0.1-0.4,0.2S1.5,4.2,1.5,4.4v1.9h15V4.4c0-0.2-0.1-0.3-0.2-0.4s-0.3-0.2-0.4-0.2H2.1z M15.9,18.8\r\n                c0.2,0,0.3-0.1,0.4-0.2s0.2-0.3,0.2-0.4V7.5h-15v10.6c0,0.2,0.1,0.3,0.2,0.4s0.3,0.2,0.4,0.2H15.9z M6,12.5c0.1,0,0.2,0,0.3-0.1\r\n                s0.1-0.2,0.1-0.3v-1.6c0-0.1,0-0.2-0.1-0.3S6.2,10,6,10H4.5c-0.1,0-0.2,0-0.3,0.1S4,10.3,4,10.5V12c0,0.1,0,0.2,0.1,0.3\r\n                s0.2,0.1,0.3,0.1H6z M6,16.3c0.1,0,0.2,0,0.3-0.1s0.1-0.2,0.1-0.3v-1.6c0-0.1,0-0.2-0.1-0.3S6.2,13.8,6,13.8H4.5\r\n                c-0.1,0-0.2,0-0.3,0.1S4,14.1,4,14.2v1.6c0,0.1,0,0.2,0.1,0.3s0.2,0.1,0.3,0.1H6z M9.8,12.5c0.1,0,0.2,0,0.3-0.1s0.1-0.2,0.1-0.3\r\n                v-1.6c0-0.1,0-0.2-0.1-0.3S9.9,10,9.8,10H8.2c-0.1,0-0.2,0-0.3,0.1s-0.1,0.2-0.1,0.3V12c0,0.1,0,0.2,0.1,0.3s0.2,0.1,0.3,0.1H9.8z\r\n                M9.8,16.3c0.1,0,0.2,0,0.3-0.1s0.1-0.2,0.1-0.3v-1.6c0-0.1,0-0.2-0.1-0.3s-0.2-0.1-0.3-0.1H8.2c-0.1,0-0.2,0-0.3,0.1\r\n                s-0.1,0.2-0.1,0.3v1.6c0,0.1,0,0.2,0.1,0.3s0.2,0.1,0.3,0.1H9.8z M13.5,12.5c0.1,0,0.2,0,0.3-0.1S14,12.2,14,12v-1.6\r\n                c0-0.1,0-0.2-0.1-0.3S13.7,10,13.5,10H12c-0.1,0-0.2,0-0.3,0.1s-0.1,0.2-0.1,0.3V12c0,0.1,0,0.2,0.1,0.3s0.2,0.1,0.3,0.1H13.5z\r\n                M13.5,16.3c0.1,0,0.2,0,0.3-0.1s0.1-0.2,0.1-0.3v-1.6c0-0.1,0-0.2-0.1-0.3s-0.2-0.1-0.3-0.1H12c-0.1,0-0.2,0-0.3,0.1\r\n                s-0.1,0.2-0.1,0.3v1.6c0,0.1,0,0.2,0.1,0.3s0.2,0.1,0.3,0.1H13.5z\"\r\n              />\r\n            </svg>\r\n          </IconButton>\r\n          Search for events\r\n        </h3>\r\n\r\n        {/* TODO: Create form components */}\r\n        <div className=\"form-group\">\r\n          <label htmlFor=\"search-keywords\">Keywords</label>\r\n          <input id=\"search-keywords\" name=\"keywords\" type=\"text\" value={keywords} onChange={this._handleInputValues} />\r\n        </div>\r\n\r\n        <CheckboxGroup label={'School'} options={cbOptions} onChange={this._handleInputValues} />\r\n\r\n        <div className=\"form-group\">\r\n          <label htmlFor=\"search-category\">Category</label>\r\n          { dropdown }\r\n        </div>\r\n\r\n        <div className=\"form-group\">\r\n          <label htmlFor=\"search-dates\">Date</label>\r\n          {/* TODO: Calculate 20yr range for min max valus */}\r\n          <input ref={n => this.selector = n} type=\"input\" name=\"range\" id=\"search-dates\" />\r\n        </div>\r\n\r\n        <footer className=\"form-actions\">\r\n          {/* TODO: Make this an api request */}\r\n          {/* <Link to=\"/search-results\"> */}\r\n          <Button label={'Search Events'} onClick={() => this._handleSubmit()} />\r\n          {/* </Link> */}\r\n        </footer>\r\n      </form>\r\n    );\r\n  }\r\n}\r\n\r\nCalendarSearch.defaultProps = {\r\n};\r\n\r\nCalendarSearch.propTypes = {\r\n  router: PropTypes.object.isRequired,\r\n  getSearchResults: PropTypes.func.isRequired,\r\n  categories: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,\r\n  categoryLoading: PropTypes.bool.isRequired,\r\n};\r\n\r\nconst mapStateToProps = state => {\r\n  return {\r\n    categories: state.reducer.categories,\r\n    categoryLoading: state.reducer.categoryLoading,\r\n  };\r\n};\r\n\r\nconst mapDispatchToProps = dispatch => {\r\n  return {\r\n    getSearchResults: data => dispatch(getSearchResults(data)),\r\n  };\r\n};\r\n\r\nexport default withRouter(connect(mapStateToProps, mapDispatchToProps)(CalendarSearch));\r\n",
        "examples": []
    },
    {
        "name": "CheckboxGroup",
        "description": "This is the CheckboxGroup component.",
        "props": {
            "onChange": {
                "type": { "name": "func" },
                "required": false,
                "description": "",
                "defaultValue": { "value": "() => {}", "computed": false }
            },
            "label": {
                "type": { "name": "string" },
                "required": false,
                "description": "",
                "defaultValue": { "value": "'Label'", "computed": false }
            },
            "options": {
                "type": { "name": "array" },
                "required": true,
                "description": ""
            }
        },
        "code": "import React from 'react';\r\nimport PropTypes from 'prop-types';\r\n\r\n/** This is the CheckboxGroup component. */\r\nclass CheckboxGroup extends React.PureComponent {\r\n  _handleChange = event => {\r\n    this.props.onChange(event);\r\n  }\r\n\r\n  render() {\r\n    const checkboxOptions = this.props.options.map(({ name, value, label, checked }) => {\r\n      return (\r\n        <label key={`${name}+${value}`}>\r\n          <input name={name} value={value} type=\"checkbox\" defaultChecked={checked} onChange={this._handleChange} />\r\n          <span className=\"icon\" /> { label }\r\n        </label>\r\n      );\r\n    });\r\n\r\n    return (\r\n      <div className=\"form-group checkbox-group\">\r\n        <p className=\"form-label\">{ this.props.label }</p>\r\n        <div className=\"checkbox-options\">\r\n          {checkboxOptions}\r\n        </div>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nCheckboxGroup.defaultProps = {\r\n  onChange: () => {},\r\n  label: 'Label',\r\n};\r\n\r\nCheckboxGroup.propTypes = {\r\n  onChange: PropTypes.func,\r\n  label: PropTypes.string,\r\n  options: PropTypes.array.isRequired,\r\n};\r\n\r\nexport default CheckboxGroup;\r\n\r\n",
        "examples": []
    },
    {
        "name": "DayPagination",
        "description": "This is the DayPagination component.",
        "props": {
            "params": {
                "type": { "name": "object" },
                "required": false,
                "description": "",
                "defaultValue": { "value": "{}", "computed": false }
            },
            "router": {
                "type": { "name": "object" },
                "required": false,
                "description": "",
                "defaultValue": { "value": "{}", "computed": false }
            }
        },
        "code": "import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport { addSubtract } from 'js-utils/formatDate';\r\nimport { withRouter } from 'react-router';\r\nimport Button from '../Button';\r\nimport './style.scss';\r\n\r\n/** This is the DayPagination component. */\r\nclass DayPagination extends React.PureComponent {\r\n  routeChange = str => {\r\n    this.props.router.push(`/day/${str}`);\r\n  }\r\n\r\n  _handleClick = (id, direction) => {\r\n    return direction === 'next'\r\n      ? this.routeChange(addSubtract({ date: id, amount: 1, type: 'd' }))\r\n      : this.routeChange(addSubtract({ date: id, amount: -1, type: 'd' }));\r\n  }\r\n\r\n  render() {\r\n    return (\r\n      <div className=\"footer-pagination\">\r\n        <Button label={'Previous Day'} onClick={() => this._handleClick(this.props.params.id, 'prev')} />\r\n        <Button label={'Next Day'} onClick={() => this._handleClick(this.props.params.id, 'next')} />\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nDayPagination.defaultProps = {\r\n  params: {},\r\n  router: {},\r\n};\r\n\r\nDayPagination.propTypes = {\r\n  params: PropTypes.object,\r\n  router: PropTypes.object,\r\n};\r\n\r\nexport default withRouter(DayPagination);\r\n\r\n",
        "examples": []
    },
    {
        "name": "DayViewDropDown",
        "description": "This is the DayViewDropDown component.",
        "props": {
            "selectedDate": {
                "type": { "name": "string" },
                "required": true,
                "description": ""
            },
            "minMax": {
                "type": { "name": "object" },
                "required": true,
                "description": ""
            },
            "dispatch": {
                "type": { "name": "func" },
                "required": true,
                "description": ""
            }
        },
        "code": "import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport { Dropdown, Header } from 'semantic-ui-react';\r\nimport { formatDate, addSubtract } from 'js-utils/formatDate';\r\nimport { connect } from 'react-redux';\r\nimport { updateMonthYear } from 'fed-modules/CalendarContainer/Actions/CalendarActions.js';\r\nimport './style.scss';\r\n\r\nconst options = [\r\n  {\r\n    key: 'c-m-january',\r\n    text: 'January',\r\n    value: '01',\r\n    content: 'January',\r\n  },\r\n  {\r\n    key: 'c-m-february',\r\n    text: 'February',\r\n    value: '02',\r\n    content: 'February',\r\n  },\r\n  {\r\n    key: 'c-m-march',\r\n    text: 'March',\r\n    value: '03',\r\n    content: 'March',\r\n  },\r\n  {\r\n    key: 'c-m-april',\r\n    text: 'April',\r\n    value: '04',\r\n    content: 'April',\r\n  },\r\n  {\r\n    key: 'c-m-may',\r\n    text: 'May',\r\n    value: '05',\r\n    content: 'May',\r\n  },\r\n  {\r\n    key: 'c-m-june',\r\n    text: 'June',\r\n    value: '06',\r\n    content: 'June',\r\n  },\r\n  {\r\n    key: 'c-m-july',\r\n    text: 'July',\r\n    value: '07',\r\n    content: 'July',\r\n  },\r\n  {\r\n    key: 'c-m-august',\r\n    text: 'August',\r\n    value: '08',\r\n    content: 'August',\r\n  },\r\n  {\r\n    key: 'c-m-september',\r\n    text: 'September',\r\n    value: '09',\r\n    content: 'September',\r\n  },\r\n  {\r\n    key: 'c-m-october',\r\n    text: 'October',\r\n    value: '10',\r\n    content: 'October',\r\n  },\r\n  {\r\n    key: 'c-m-november',\r\n    text: 'November',\r\n    value: '11',\r\n    content: 'November',\r\n  },\r\n  {\r\n    key: 'c-m-december',\r\n    text: 'December',\r\n    value: '12',\r\n    content: 'December',\r\n  },\r\n];\r\n\r\n/** This is the DayViewDropDown component. */\r\nclass DayViewDropDown extends React.PureComponent {\r\n  _handleYearChange = (e, direction) => {\r\n    e.preventDefault();\r\n    e.stopPropagation();\r\n\r\n    const addYear = addSubtract({\r\n      date: this.props.selectedDate,\r\n      amount: 1,\r\n    });\r\n\r\n    const subtractYear = addSubtract({\r\n      date: this.props.selectedDate,\r\n      amount: -1,\r\n    });\r\n\r\n    direction === 'next'\r\n      ? this.props.dispatch(updateMonthYear(addYear))\r\n      : this.props.dispatch(updateMonthYear(subtractYear));\r\n  }\r\n\r\n  // Updates calendar with selected month from dropdown\r\n  _handleMonthChange = (e, month) => {\r\n    const date = this.props.selectedDate;\r\n    const year = formatDate(date, 'YYYY');\r\n    const day = formatDate(date, 'DD');\r\n\r\n    this.props.dispatch(updateMonthYear(`${year}${month}${day}`));\r\n  }\r\n\r\n  render() {\r\n    const selectedDate = this.props.selectedDate;\r\n    const {min, max} = this.props.minMax;\r\n\r\n    // The trigger is the date displayed above the calendar\r\n    const trigger = (\r\n      <span>\r\n        { formatDate(selectedDate, 'MMMM YYYY') }\r\n      </span>\r\n    );\r\n\r\n    const isMin = selectedDate <= min ? true : false;\r\n    const isMax = selectedDate >= max ? true : false;\r\n\r\n    const yearSelector = (\r\n      <div className=\"year-selector\">\r\n        <button type=\"button\" disabled={isMin} onClick={e => this._handleYearChange(e, 'prev')}>\r\n          <svg className=\"svg-arrows\" viewBox=\"0 0 8 14\">\r\n            <path\r\n              className=\"svg-black\"\r\n              d=\"M7.2,13.8c-0.1,0.1-0.1,0.1-0.3,0.1c-0.1,0-0.2,0-0.3-0.1L0.2,7.2C0.1,7.2,0,7.1,0,7s0-0.2,0.1-0.3l6.5-6.6\r\n              C6.8,0.1,6.9,0.1,7,0.1s0.2,0,0.3,0.1l0.6,0.6C7.9,0.9,8,1,8,1.1s0,0.2-0.1,0.3L2.2,7l5.7,5.7C7.9,12.7,8,12.8,8,12.9s0,0.2-0.1,0.3\r\n              L7.2,13.8z\"\r\n            />\r\n          </svg>\r\n        </button>\r\n\r\n        <span className=\"year-selected\">{ formatDate(selectedDate, 'YYYY') }</span>\r\n\r\n        <button type=\"button\" disabled={isMax} onClick={e => this._handleYearChange(e, 'next')}>\r\n          <svg className=\"svg-arrows\" viewBox=\"0 0 8 14\">\r\n            <path\r\n              className=\"svg-black\"\r\n              d=\"M0.8,0.2C0.9,0.1,0.9,0.1,1,0.1s0.2,0,0.3,0.1l6.5,6.6C7.9,6.8,8,6.9,8,7s0,0.2-0.1,0.3l-6.5,6.6 c-0.1,0.1-0.2,0.1-0.3,0.1s-0.2,0-0.3-0.1l-0.6-0.6C0.1,13.1,0,13,0,12.9s0-0.2,0.1-0.3L5.8,7L0.2,1.3C0.1,1.3,0,1.2,0,1.1 s0-0.2,0.1-0.3L0.8,0.2z\"\r\n            />\r\n          </svg>\r\n        </button>\r\n      </div>\r\n    );\r\n\r\n    return (\r\n      <Header>\r\n        <Header.Content>\r\n          <Dropdown\r\n            inline\r\n            trigger={trigger}\r\n            header={yearSelector}\r\n            options={options}\r\n            defaultValue={options[0].value}\r\n            onChange={(e, {value}) => this._handleMonthChange(e, value)}\r\n          />\r\n        </Header.Content>\r\n      </Header>\r\n    );\r\n  }\r\n}\r\n\r\nDayViewDropDown.defaultProps = {\r\n};\r\n\r\nDayViewDropDown.propTypes = {\r\n  selectedDate: PropTypes.string.isRequired,\r\n  minMax: PropTypes.object.isRequired,\r\n  dispatch: PropTypes.func.isRequired,\r\n};\r\n\r\nconst mapStateToProps = state => {\r\n  return {\r\n    selectedDate: state.reducer.selectedDate,\r\n    minMax: state.reducer.minMax,\r\n  };\r\n};\r\n\r\nexport default connect(mapStateToProps)(DayViewDropDown);\r\n\r\n",
        "examples": []
    },
    {
        "name": "EventBlock",
        "description": "This is the EventBlock component.",
        "props": {
            "rootCategories": {
                "type": { "name": "array" },
                "required": true,
                "description": ""
            },
            "name": {
                "type": { "name": "string" },
                "required": false,
                "description": "",
                "defaultValue": { "value": "null", "computed": false }
            },
            "start": {
                "type": { "name": "string" },
                "required": false,
                "description": "",
                "defaultValue": { "value": "null", "computed": false }
            },
            "end": {
                "type": { "name": "string" },
                "required": false,
                "description": "",
                "defaultValue": { "value": "null", "computed": false }
            },
            "allDay": {
                "type": { "name": "bool" },
                "required": false,
                "description": "",
                "defaultValue": { "value": "null", "computed": false }
            },
            "location": {
                "type": { "name": "string" },
                "required": false,
                "description": "",
                "defaultValue": { "value": "null", "computed": false }
            },
            "categories": {
                "type": {
                    "name": "union",
                    "value": [ { "name": "array" }, { "name": "string" } ]
                },
                "required": false,
                "description": "",
                "defaultValue": { "value": "'No categories assigned'", "computed": false }
            },
            "tags": {
                "type": {
                    "name": "union",
                    "value": [ { "name": "array" }, { "name": "string" } ]
                },
                "required": false,
                "description": "",
                "defaultValue": { "value": "'No tags assigned'", "computed": false }
            },
            "important": {
                "type": { "name": "bool" },
                "required": false,
                "description": "",
                "defaultValue": { "value": "false", "computed": false }
            },
            "url": {
                "type": { "name": "string" },
                "required": false,
                "description": "",
                "defaultValue": { "value": "null", "computed": false }
            },
            "ics": {
                "type": { "name": "string" },
                "required": false,
                "description": "",
                "defaultValue": { "value": "null", "computed": false }
            }
        },
        "code": "import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport EventTags from 'core/Components/EventTags';\r\nimport { formatDate } from 'js-utils/formatDate';\r\nimport { connect } from 'react-redux';\r\n// import 'core/Components/Button/style.scss';\r\nimport './style.scss';\r\n\r\n/** This is the EventBlock component. */\r\nclass EventBlock extends React.PureComponent {\r\n  render() {\r\n    const svgCategory = (\r\n      <svg x=\"0px\" y=\"0px\" viewBox=\"0 0 20 20\" className=\"svgCategory\">\r\n        <path\r\n          className=\"svg-black\"\r\n          d=\"M17,3.8c0.4,0.4,0.5,0.8,0.5,1.3v13c0,0.5-0.2,1-0.5,1.3S16.1,20,15.6,20H4.4c-0.5,0-1-0.2-1.3-0.5\r\n          s-0.5-0.8-0.5-1.3V1.9c0-0.5,0.2-1,0.5-1.3S3.9,0,4.4,0h8c0.5,0,1,0.2,1.3,0.5L17,3.8z M15.6,18.8c0.2,0,0.3-0.1,0.4-0.2\r\n          s0.2-0.3,0.2-0.4V6.3h-4.1c-0.3,0-0.5-0.1-0.7-0.3s-0.3-0.4-0.3-0.7V1.3H4.4C4.2,1.3,4,1.3,3.9,1.4S3.8,1.7,3.8,1.9v16.3\r\n          c0,0.2,0.1,0.3,0.2,0.4s0.3,0.2,0.4,0.2H15.6z M16.1,4.7l-3.3-3.3c-0.1-0.1-0.2-0.1-0.3-0.2V5h3.8C16.2,4.9,16.1,4.8,16.1,4.7z\"\r\n        />\r\n      </svg>\r\n    );\r\n\r\n    const svgClock = (\r\n      <svg x=\"0px\" y=\"0px\" viewBox=\"0 0 20 20\" className=\"svgClock\">\r\n        <path\r\n          className=\"svg-black\"\r\n          d=\"M10,0.3c1.7,0,3.4,0.4,4.8,1.3s2.7,2.1,3.5,3.5s1.3,3.1,1.3,4.8s-0.4,3.4-1.3,4.8s-2.1,2.7-3.5,3.5\r\n          s-3.1,1.3-4.8,1.3s-3.4-0.4-4.8-1.3s-2.7-2.1-3.5-3.5S0.3,11.7,0.3,10s0.4-3.4,1.3-4.8s2.1-2.7,3.5-3.5S8.3,0.3,10,0.3z M18.4,10\r\n          c0-1.5-0.4-2.9-1.1-4.2s-1.8-2.3-3.1-3.1S11.5,1.6,10,1.6S7.1,1.9,5.8,2.7S3.5,4.5,2.7,5.8S1.6,8.5,1.6,10s0.4,2.9,1.1,4.2\r\n          s1.8,2.3,3.1,3.1s2.7,1.1,4.2,1.1s2.9-0.4,4.2-1.1s2.3-1.8,3.1-3.1S18.4,11.5,18.4,10z M12.6,13.4c0.1,0.1,0.2,0.1,0.4,0.1\r\n          s0.2-0.1,0.3-0.2l0.3-0.5c0.1-0.1,0.1-0.2,0.1-0.3s-0.1-0.2-0.2-0.3l-2.8-2V4.5c0-0.1,0-0.2-0.1-0.3s-0.2-0.1-0.3-0.1H9.7\r\n          c-0.1,0-0.2,0-0.3,0.1S9.3,4.4,9.3,4.5v6.3c0,0.2,0.1,0.3,0.2,0.4L12.6,13.4z\"\r\n        />\r\n      </svg>\r\n    );\r\n\r\n    const svgLandmark = (\r\n      <svg x=\"0px\" y=\"0px\" viewBox=\"0 0 20 20\" className=\"svgLandmark\">\r\n        <path\r\n          className=\"svg-black\"\r\n          d=\"M10,0c1.4,0,2.6,0.3,3.8,1s2.1,1.6,2.7,2.7s1,2.4,1,3.8c0,0.8-0.1,1.6-0.3,2.2s-0.6,1.4-1.2,2.4\r\n          c-0.4,0.7-1.3,1.9-2.6,3.8l-2.6,3.8C10.6,19.9,10.3,20,10,20s-0.6-0.1-0.8-0.4l-2.6-3.8C5.3,14,4.4,12.7,4,12.1\r\n          c-0.6-0.9-1-1.7-1.2-2.4S2.5,8.3,2.5,7.5c0-1.4,0.3-2.6,1-3.8S5.1,1.7,6.3,1S8.6,0,10,0z M10,18.5l2.4-3.5c1.3-1.8,2.1-3,2.5-3.6\r\n          c0.5-0.9,0.9-1.6,1.1-2.1s0.3-1.2,0.3-1.9c0-0.8-0.2-1.6-0.5-2.4s-0.8-1.4-1.4-2s-1.3-1.1-2-1.4S10.8,1.3,10,1.3S8.4,1.4,7.6,1.7\r\n          s-1.4,0.8-2,1.4s-1.1,1.3-1.4,2S3.8,6.7,3.8,7.5c0,0.7,0.1,1.3,0.3,1.9s0.5,1.2,1.1,2.1c0.4,0.6,1.2,1.8,2.5,3.6\r\n          C8.6,16.4,9.4,17.6,10,18.5z M10,3.8c1,0,1.9,0.4,2.7,1.1s1.1,1.6,1.1,2.7s-0.4,1.9-1.1,2.7S11,11.3,10,11.3s-1.9-0.4-2.7-1.1\r\n          S6.3,8.5,6.3,7.5s0.4-1.9,1.1-2.7S9,3.8,10,3.8z M10,10c0.7,0,1.3-0.2,1.8-0.7s0.7-1.1,0.7-1.8s-0.2-1.3-0.7-1.8S10.7,5,10,5\r\n          S8.7,5.2,8.2,5.7S7.5,6.8,7.5,7.5s0.2,1.3,0.7,1.8S9.3,10,10,10z\"\r\n        />\r\n      </svg>\r\n    );\r\n\r\n    const svgFlag = (\r\n      <svg x=\"0px\" y=\"0px\" viewBox=\"0 0 12 12\" className=\"icon-flag\">\r\n        <path\r\n          className=\"svg-white\"\r\n          d=\"M8.1,2.3c0.8,0,1.7-0.3,2.7-0.8c0.2-0.1,0.5-0.1,0.7,0s0.4,0.4,0.4,0.6v5.7c0,0.3-0.1,0.5-0.3,0.6\r\n          c-0.9,0.6-1.9,1-2.9,1c-0.4,0-0.8,0-1.2-0.1c-0.2,0-0.6-0.1-1-0.3C6.2,8.9,5.9,8.9,5.7,8.8C5.4,8.7,5.1,8.7,4.8,8.7\r\n          c-1,0-1.9,0.2-2.7,0.5v2.2c0,0.2-0.1,0.3-0.2,0.4S1.8,12,1.6,12H1.2c-0.2,0-0.3-0.1-0.4-0.2s-0.2-0.2-0.2-0.4v-9\r\n          C0.5,2.3,0.3,2.1,0.2,1.9S0.1,1.5,0.1,1.3c0-0.4,0.1-0.7,0.4-0.9S1.1,0,1.5,0c0.3,0,0.6,0.1,0.9,0.4s0.4,0.5,0.4,0.8\r\n          c0,0.2,0,0.4-0.1,0.6c0.5-0.2,1-0.3,1.6-0.3c0.4,0,0.8,0,1.2,0.1c0.2,0.1,0.6,0.2,1,0.3c0.4,0.1,0.7,0.2,0.8,0.3\r\n          C7.6,2.3,7.8,2.3,8.1,2.3z\"\r\n        />\r\n      </svg>\r\n    );\r\n\r\n    const categoryNames = [];\r\n    const { name, start, end, allDay, location, categories, tags, important, url, ics } = this.props;\r\n    const isImportant = important\r\n      ? <div className=\"event-alert\"><div className=\"icon icon-sm\">{ svgFlag }</div>Important Date</div>\r\n      : null;\r\n\r\n    // Compare the category values and get the actual name instead from Category data\r\n    const actualCategories = categories\r\n      .map(cat1 => this.props.rootCategories.filter(rootCat => {\r\n        return cat1 === rootCat.value;\r\n      })[0])\r\n      .map(names => categoryNames.push(Object.values(names)[1]));\r\n\r\n    const footer = (\r\n      <footer className=\"event-block-footer\">\r\n        <a className=\"event-block-link\" href={url} target=\"_blank\">More information</a>\r\n      </footer>\r\n    );\r\n\r\n    const eventFooter = url ? footer : null;\r\n\r\n    return (\r\n      <div className=\"event-block\">\r\n        { isImportant }\r\n        <header>\r\n          <h2 className=\"event-title\">{ name }</h2>\r\n        </header>\r\n\r\n        <div className=\"event-body col-3\">\r\n          <ul className=\"event-meta\">\r\n            <li className=\"event-item\">\r\n              <div className=\"icon\">{ svgClock }</div>\r\n              { allDay ? 'All Day' : `${formatDate(start, 'h:mma')} - ${formatDate(end, 'h:mma')}` }\r\n            </li>\r\n\r\n            <li className=\"event-item\">\r\n              <div className=\"icon\">{ svgLandmark }</div>\r\n              { location }\r\n            </li>\r\n\r\n            <li className=\"event-item event-item-categories\">\r\n              <div className=\"icon\">{ svgCategory }</div>\r\n              { categoryNames.join(', ') }\r\n            </li>\r\n          </ul>\r\n\r\n          <EventTags type={'eventResults'} tags={tags} />\r\n\r\n          <div className=\"event-actions\">\r\n            <a href={ics} target=\"_blank\" className=\"btn btn-secondary\">Add to calendar</a>\r\n            {/* <Button label={'Add to calendar'} btnClass={'btn-secondary'} /> */}\r\n          </div>\r\n        </div>\r\n\r\n        { eventFooter }\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nEventBlock.defaultProps = {\r\n  name: null,\r\n  start: null,\r\n  end: null,\r\n  allDay: null,\r\n  location: null,\r\n  categories: 'No categories assigned',\r\n  tags: 'No tags assigned',\r\n  important: false,\r\n  url: null,\r\n  ics: null,\r\n};\r\n\r\nEventBlock.propTypes = {\r\n  rootCategories: PropTypes.array.isRequired,\r\n  name: PropTypes.string,\r\n  start: PropTypes.string,\r\n  end: PropTypes.string,\r\n  allDay: PropTypes.bool,\r\n  location: PropTypes.string,\r\n  categories: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),\r\n  tags: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),\r\n  important: PropTypes.bool,\r\n  url: PropTypes.string,\r\n  ics: PropTypes.string,\r\n};\r\n\r\nconst mapStateToProps = state => {\r\n  return {\r\n    rootCategories: state.reducer.categories,\r\n  };\r\n};\r\n\r\nexport default connect(mapStateToProps)(EventBlock);\r\n\r\n",
        "examples": []
    },
    {
        "name": "EventTags",
        "description": "This is the EventTags component.",
        "props": {
            "tags": {
                "type": {
                    "name": "union",
                    "value": [ { "name": "array" }, { "name": "string" } ]
                },
                "required": true,
                "description": ""
            },
            "type": {
                "type": { "name": "string" },
                "required": true,
                "description": ""
            }
        },
        "code": "import React from 'react';\r\nimport PropTypes from 'prop-types';\r\n\r\n/** This is the EventTags component. */\r\nclass EventTags extends React.PureComponent {\r\n  render() {\r\n    let i = 0;\r\n    const tags = this.props.tags.map(tag => {\r\n      return (\r\n        // Type refers to where it's used, to prevent duplicate keys if re-used in the same module / page.\r\n        <li key={`e-${this.props.type}-${i += 1}-${tag}`} className=\"event-tag\" data-type={tag}>\r\n          <div className=\"event-tag-indicator\" />\r\n          {tag}\r\n        </li>\r\n      );\r\n    });\r\n\r\n    return (\r\n      <ul className=\"event-tags\">\r\n        { tags }\r\n      </ul>\r\n    );\r\n  }\r\n}\r\n\r\nEventTags.defaultProps = {\r\n};\r\n\r\nEventTags.propTypes = {\r\n  tags: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,\r\n  type: PropTypes.string.isRequired,\r\n};\r\n\r\nexport default EventTags;\r\n\r\n",
        "examples": []
    },
    {
        "name": "EventTypeList",
        "description": "This is the EventTypeList component.",
        "props": {
            "day": {
                "type": { "name": "object" },
                "required": true,
                "description": ""
            },
            "events": {
                "type": { "name": "array" },
                "required": true,
                "description": ""
            }
        },
        "code": "import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport { connect } from 'react-redux';\r\nimport { formatDate } from 'js-utils/formatDate';\r\nimport './style.scss';\r\n\r\n/** This is the EventTypeList component. */\r\nclass EventTypeList extends React.PureComponent {\r\n  state = {\r\n    events: [],\r\n    currDay: formatDate(this.props.day, 'YYYYMMDD'),\r\n  }\r\n\r\n  // first filter our the current day\r\n  compareDays = event => {\r\n    const startDay = formatDate(event.start, 'YYYYMMDD');\r\n\r\n    return startDay === this.state.currDay;\r\n  }\r\n\r\n  // then push the tags into current state\r\n  currentTags = ({ tags }) => {\r\n    tags.map(tag => {\r\n      this.state.events.includes(tag) ? null : this.state.events.push(tag);\r\n    });\r\n  };\r\n\r\n  componentWillMount() {\r\n    // runs the above functions\r\n    this.props.events.filter(this.compareDays).map(this.currentTags);\r\n  }\r\n\r\n  render() {\r\n    const currentEvents = this.state.events.map(event => {\r\n      return <li key={`${this.props.day}-${event}`} data-type={event}>{event}</li>;\r\n    });\r\n\r\n    return (\r\n      <ul className=\"event-list-type\">\r\n        { currentEvents }\r\n      </ul>\r\n    );\r\n  }\r\n}\r\n\r\nEventTypeList.defaultProps = {\r\n};\r\n\r\nEventTypeList.propTypes = {\r\n  day: PropTypes.object.isRequired,\r\n  events: PropTypes.array.isRequired,\r\n};\r\n\r\nconst mapStateToProps = state => {\r\n  return {\r\n    events: state.reducer.events,\r\n  };\r\n};\r\n\r\nexport default connect(mapStateToProps)(EventTypeList);\r\n\r\n",
        "examples": []
    },
    {
        "name": "FilteredEventList",
        "description": "This is the FilteredEventList component.",
        "props": {
            "events": {
                "type": {
                    "name": "union",
                    "value": [ { "name": "object" }, { "name": "array" } ]
                },
                "required": true,
                "description": ""
            }
        },
        "code": "import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport { formatDate } from 'js-utils/formatDate';\r\nimport EventBlock from 'core/Components/EventBlock';\r\nimport './style.scss';\r\n\r\n/** This is the FilteredEventList component. */\r\nclass FilteredEventList extends React.Component {\r\n  state = {\r\n    filteredDays: [],\r\n  }\r\n\r\n  componentWillMount() {\r\n    // Get all the single days so there's no duplicates\r\n    Object.values(this.props.events)\r\n      .map(day => {\r\n        const days = this.state.filteredDays;\r\n        const formated = formatDate(day.start, 'MMMM DD YYYY');\r\n        // if it's not in filteredDays state, add it.\r\n        days.includes(formated) ? null : days.push(formated);\r\n      });\r\n  }\r\n\r\n  render() {\r\n    // create each section and assigns events to their corresponding days\r\n    console.log('[EVENTS]', this.state.filteredDays);\r\n    const days = this.state.filteredDays.map(day => {\r\n      return (\r\n        <section key={`keyDay-${day}`} className=\"key-date\">\r\n          <h2 className=\"key-date-title\">{day}</h2>\r\n\r\n          {\r\n            Object.values(this.props.events)\r\n              .filter(date => formatDate(date.start, 'MMMM DD YYYY') === day)\r\n              .map(evnt => <EventBlock key={`keyDay-e-${evnt.id}`} {...evnt} />)\r\n          }\r\n        </section>\r\n      );\r\n    });\r\n\r\n    return (\r\n      <div className=\"event-blocks\">\r\n        { days }\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nFilteredEventList.defaultProps = {\r\n};\r\n\r\nFilteredEventList.propTypes = {\r\n  events: PropTypes.oneOfType([\r\n    PropTypes.object,\r\n    PropTypes.array,\r\n  ]).isRequired,\r\n};\r\n\r\nexport default FilteredEventList;\r\n",
        "examples": []
    },
    {
        "name": "Header",
        "description": "This is the Header component.",
        "props": {
            "title": {
                "type": { "name": "string" },
                "required": false,
                "description": "",
                "defaultValue": { "value": "'Calendar'", "computed": false }
            }
        },
        "code": "import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport './style.scss';\r\n\r\n/** This is the Header component. */\r\nclass Header extends React.PureComponent {\r\n  render() {\r\n    return (\r\n      <header className=\"header\">\r\n        <h1>{ this.props.title }</h1>\r\n\r\n        <div className=\"header-divider\">\r\n          <svg viewBox=\"0 0 1201 112\">\r\n            <path className=\"header-divider-svg\" d=\"M-50,0h480.5C501.4,4.6,558.3,27.2,601,68c37.7-40.4,95.6-63.1,173.7-68H1253v112H-50V0z\" />\r\n          </svg>\r\n        </div>\r\n      </header>\r\n    );\r\n  }\r\n}\r\n\r\nHeader.defaultProps = {\r\n  title: 'Calendar',\r\n};\r\n\r\nHeader.propTypes = {\r\n  title: PropTypes.string.isRequired,\r\n};\r\n\r\nexport default Header;\r\n\r\n",
        "examples": []
    },
    {
        "name": "IconButton",
        "description": "This is the IconButton component.",
        "props": {
            "onClick": {
                "type": { "name": "func" },
                "required": false,
                "description": "",
                "defaultValue": { "value": "() => { }", "computed": false }
            },
            "children": {
                "type": {
                    "name": "union",
                    "value": [ { "name": "element" }, { "name": "string" } ]
                },
                "required": false,
                "description": "",
                "defaultValue": { "value": "null", "computed": false }
            },
            "hasBg": {
                "type": { "name": "bool" },
                "required": false,
                "description": "",
                "defaultValue": { "value": "true", "computed": false }
            },
            "classes": {
                "type": {
                    "name": "union",
                    "value": [ { "name": "array" }, { "name": "string" } ]
                },
                "required": false,
                "description": "",
                "defaultValue": { "value": "null", "computed": false }
            }
        },
        "code": "import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport './style.scss';\r\n\r\n/** This is the IconButton component. */\r\nclass IconButton extends React.PureComponent {\r\n  state = {\r\n    classes: ['btn-icon'],\r\n  }\r\n\r\n  _handleClick = e => {\r\n    this.props.onClick(e);\r\n  }\r\n\r\n  componentWillMount() {\r\n    this.props.hasBg ? null : this.state.classes.push('btn-transparent');\r\n    this.props.classes ? this.state.classes.push(this.props.classes) : null;\r\n  }\r\n\r\n  render() {\r\n    return (\r\n      // TODO: Add icons\r\n      <button\r\n        type=\"button\"\r\n        className={this.state.classes.join(' ')}\r\n        onClick={this._handleClick}\r\n      >\r\n        { this.props.children }\r\n      </button>\r\n    );\r\n  }\r\n}\r\n\r\nIconButton.defaultProps = {\r\n  onClick: () => { },\r\n  children: null,\r\n  hasBg: true,\r\n  classes: null,\r\n};\r\n\r\nIconButton.propTypes = {\r\n  onClick: PropTypes.func,\r\n  children: PropTypes.oneOfType([\r\n    PropTypes.element,\r\n    PropTypes.string,\r\n  ]),\r\n  hasBg: PropTypes.bool,\r\n  classes: PropTypes.oneOfType([\r\n    PropTypes.array,\r\n    PropTypes.string,\r\n  ]),\r\n};\r\n\r\nexport default IconButton;\r\n\r\n",
        "examples": []
    },
    {
        "name": "Input",
        "description": "This is the Input component.",
        "code": "import React from 'react';\r\nimport PropTypes from 'prop-types';\r\n\r\n/** This is the Input component. */\r\nclass Input extends React.PureComponent {\r\n  render() {\r\n    return (\r\n      <div>Input</div>\r\n    );\r\n  }\r\n}\r\n\r\nInput.defaultProps = {\r\n};\r\n\r\nInput.propTypes = {\r\n};\r\n\r\nexport default Input;\r\n\r\n",
        "examples": []
    },
    {
        "name": "IntroCopy",
        "description": "This is the IntroCopy component.",
        "props": {
            "title": {
                "type": { "name": "string" },
                "required": false,
                "description": "",
                "defaultValue": { "value": "'Intro Title'", "computed": false }
            },
            "content": {
                "type": { "name": "string" },
                "required": false,
                "description": "",
                "defaultValue": { "value": "'Content'", "computed": false }
            }
        },
        "code": "import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport './style.scss';\r\n\r\n/** This is the IntroCopy component. */\r\nclass IntroCopy extends React.PureComponent {\r\n  createMarkUp() {\r\n    return {__html: this.props.content};\r\n  }\r\n\r\n  render() {\r\n    return (\r\n      <article>\r\n        <header>\r\n          <h2>{ this.props.title }</h2>\r\n        </header>\r\n\r\n        <div dangerouslySetInnerHTML={this.createMarkUp()} />\r\n      </article>\r\n    );\r\n  }\r\n}\r\n\r\nIntroCopy.defaultProps = {\r\n  title: 'Intro Title',\r\n  content: 'Content',\r\n};\r\n\r\nIntroCopy.propTypes = {\r\n  title: PropTypes.string,\r\n  content: PropTypes.string,\r\n};\r\n\r\nexport default IntroCopy;\r\n\r\n",
        "examples": []
    },
    {
        "name": "Loader",
        "description": "This is the Loader component.",
        "code": "import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport './style.scss';\r\n\r\n/** This is the Loader component. */\r\nclass Loader extends React.PureComponent {\r\n  render() {\r\n    return (\r\n      <div className=\"loader\">\r\n        <div className=\"loader-spinner\">\r\n          <div className=\"loader-dot\" />\r\n          <div className=\"loader-dot\" />\r\n          <div className=\"loader-dot\" />\r\n        </div>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nLoader.defaultProps = {\r\n};\r\n\r\nLoader.propTypes = {\r\n};\r\n\r\nexport default Loader;\r\n\r\n",
        "examples": []
    },
    {
        "name": "SearchBackButton",
        "description": "This is the SearchBackButton component.",
        "props": {
            "router": {
                "type": { "name": "object" },
                "required": true,
                "description": ""
            }
        },
        "code": "import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport { withRouter } from 'react-router';\r\nimport IconButton from 'core/Components/IconButton';\r\n\r\n/** This is the SearchBackButton component. */\r\nclass SearchBackButton extends React.PureComponent {\r\n  _handleRouteBack() {\r\n    this.props.router.push('/');\r\n  }\r\n\r\n  render() {\r\n    return (\r\n      <IconButton classes=\"btn-back\" onClick={() => this._handleRouteBack()}>\r\n        <svg className=\"searchIcon\" viewBox=\"0 0 16 16\">\r\n          <path\r\n            className=\"svg-white\"\r\n            d=\"M15.9,14.7c0.1,0.1,0.1,0.1,0.1,0.3s0,0.2-0.1,0.3l-0.7,0.7C15.1,16,15,16,14.9,16s-0.2,0-0.3-0.1l-3.8-3.8\r\n            c-0.1-0.1-0.1-0.2-0.1-0.3v-0.4c-0.6,0.5-1.2,0.9-2,1.2S7.3,13,6.5,13c-1.2,0-2.3-0.3-3.3-0.9s-1.8-1.4-2.4-2.4S0,7.7,0,6.5\r\n            s0.3-2.3,0.9-3.3s1.4-1.8,2.4-2.4S5.3,0,6.5,0s2.3,0.3,3.3,0.9s1.8,1.4,2.4,2.4S13,5.3,13,6.5c0,0.8-0.1,1.6-0.4,2.3s-0.7,1.4-1.2,2\r\n            h0.4c0.1,0,0.2,0,0.3,0.1L15.9,14.7z M6.5,11.5c0.9,0,1.7-0.2,2.5-0.7s1.4-1.1,1.8-1.8s0.7-1.6,0.7-2.5S11.3,4.8,10.8,4\r\n            S9.8,2.6,9,2.2S7.4,1.5,6.5,1.5S4.8,1.7,4,2.2S2.6,3.2,2.2,4S1.5,5.6,1.5,6.5S1.7,8.2,2.2,9s1.1,1.4,1.8,1.8S5.6,11.5,6.5,11.5z\"\r\n          />\r\n        </svg>\r\n      </IconButton>\r\n    );\r\n  }\r\n}\r\n\r\nSearchBackButton.defaultProps = {\r\n};\r\n\r\nSearchBackButton.propTypes = {\r\n  router: PropTypes.object.isRequired,\r\n};\r\n\r\nexport default withRouter(SearchBackButton);\r\n\r\n",
        "examples": []
    },
    {
        "name": "SearchResultsCriteria",
        "description": "This is the SearchResultsCriteria component.",
        "props": {
            "criteria": {
                "type": {
                    "name": "union",
                    "value": [ { "name": "string" }, { "name": "object" } ]
                },
                "required": true,
                "description": ""
            }
        },
        "code": "import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport { formatDate } from 'js-utils/formatDate';\r\nimport EventTags from '../EventTags';\r\nimport './style.scss';\r\n\r\n// TODO: MAKE THIS DYNAMIC\r\n/** This is the SearchResultsCriteria component. */\r\nclass SearchResultsCriteria extends React.PureComponent {\r\n  render() {\r\n    const criteria = this.props.criteria;\r\n    const start = formatDate(criteria.start, 'DD-MM-YYYY');\r\n    const end = formatDate(criteria.end, 'DD-MM-YYYY');\r\n\r\n    return (\r\n      <ul className=\"search-criteria flex\">\r\n        <li className=\"search-criteria-item\">\r\n          <span className=\"search-criteria-label\">Keywords</span>\r\n          <div className=\"search-criteria-value\">{ criteria.keywords }</div>\r\n        </li>\r\n        <li className=\"search-criteria-item\">\r\n          <span className=\"search-criteria-label\">School</span>\r\n          <EventTags type={'searchCriteria'} tags={criteria.school.split(',')} />\r\n        </li>\r\n        <li className=\"search-criteria-item\">\r\n          <span className=\"search-criteria-label\">Categories</span>\r\n          <div className=\"search-criteria-value\">{ criteria.category }</div>\r\n        </li>\r\n        <li className=\"search-criteria-item\">\r\n          <span className=\"search-criteria-label\">Date range</span>\r\n          <div className=\"search-criteria-value\">\r\n            { start } <span className=\"accent\">to</span> { end }\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    );\r\n  }\r\n}\r\n\r\nSearchResultsCriteria.defaultProps = {\r\n};\r\n\r\nSearchResultsCriteria.propTypes = {\r\n  criteria: PropTypes.oneOfType([\r\n    PropTypes.string, PropTypes.object,\r\n  ]).isRequired,\r\n};\r\n\r\nexport default SearchResultsCriteria;\r\n\r\n",
        "examples": []
    }
]
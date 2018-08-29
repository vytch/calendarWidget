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
        "code": "import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport './style.scss';\r\n\r\n/** This is the CalendarLegend component. */\r\nclass CalendarLegend extends React.PureComponent {\r\n  render() {\r\n    return (\r\n      /*\r\n        TODO\r\n        - Make this an array or object that gets looped through\r\n        - Make abbreviations global so they apply to calendar and event-list-type\r\n        - auto abbreviate legend titles\r\n      */\r\n\r\n      <ul className=\"legend\">\r\n        <li className=\"legend-item\" data-type=\"JS\">Junior School (JS)</li>\r\n        <li className=\"legend-item\" data-type=\"JSS\">Junior Secondary School (JSS)</li>\r\n        <li className=\"legend-item\" data-type=\"MS\">Middle School</li>\r\n        <li className=\"legend-item\" data-type=\"SS\">Senior School</li>\r\n      </ul>\r\n    );\r\n  }\r\n}\r\n\r\nCalendarLegend.defaultProps = {\r\n};\r\n\r\nCalendarLegend.propTypes = {\r\n};\r\n\r\nexport default CalendarLegend;\r\n\r\n",
        "examples": []
    },
    {
        "name": "CalendarSearch",
        "description": "This is the CalendarSearch component.",
        "props": {
            "dispatch": {
                "type": { "name": "func" },
                "required": true,
                "description": ""
            }
        },
        "code": "import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport { connect } from 'react-redux';\r\nimport { setIsSearching } from 'fed-modules/CalendarContainer/Actions/CalendarActions.js';\r\nimport { Dropdown } from 'semantic-ui-react';\r\nimport daterangepicker from 'daterangepicker';\r\nimport $ from 'jquery';\r\nimport CheckboxGroup from '../CheckboxGroup';\r\nimport Button from '../Button';\r\nimport IconButton from '../IconButton';\r\n\r\nimport './style.scss';\r\n\r\nconst cbOptions = [\r\n  {\r\n    name: 'search-types',\r\n    value: 'JS',\r\n    label: 'Junior School (JS)',\r\n    checked: true,\r\n  },\r\n  {\r\n    name: 'search-types',\r\n    value: 'JSS',\r\n    label: 'Junior Secondary School (JSS)',\r\n    checked: true,\r\n  },\r\n  {\r\n    name: 'search-types',\r\n    value: 'MS',\r\n    label: 'Middle School (JS)',\r\n    checked: true,\r\n  },\r\n  {\r\n    name: 'search-types',\r\n    value: 'SS',\r\n    label: 'Secondary School (JS)',\r\n    checked: true,\r\n  },\r\n];\r\n\r\n/** This is the CalendarSearch component. */\r\nclass CalendarSearch extends React.Component {\r\n  constructor() {\r\n    super();\r\n    this.selector = '';\r\n  }\r\n\r\n  _handleSearchState = () => {\r\n    this.props.dispatch(setIsSearching());\r\n  }\r\n\r\n  componentDidMount = () => {\r\n    const el = this.selector;\r\n    console.log(el);\r\n    $(this.selector).daterangepicker({}, (start, end) => {\r\n      // TODO: This will be the submitted date data\r\n      console.log(`${start.format('YYYYMMDD')} ${end.format('YYYYMMDD')}`);\r\n    });\r\n  }\r\n\r\n  render() {\r\n    const options = [\r\n      {key: 'option-1', text: 'Option 1', value: 'option-1'},\r\n      {key: 'option-2', text: 'Option 2', value: 'option-2'},\r\n      {key: 'option-3', text: 'Option 3', value: 'option-3'},\r\n      {key: 'option-4', text: 'Option 4', value: 'option-4'},\r\n      {key: 'option-5', text: 'Option 5', value: 'option-5'},\r\n    ];\r\n\r\n    return (\r\n      <div className=\"calendar-search form\">\r\n        <h3>\r\n          <IconButton onClick={() => this._handleSearchState()}>\r\n            <svg x=\"0px\" y=\"0px\" viewBox=\"0 0 18 20\">\r\n              <path\r\n                className=\"svg-icon\"\r\n                d=\"M15.9,2.5c0.5,0,1,0.2,1.3,0.5s0.5,0.8,0.5,1.3v13.8c0,0.5-0.2,1-0.5,1.3S16.4,20,15.9,20H2.1\r\n                c-0.5,0-1-0.2-1.3-0.5s-0.5-0.8-0.5-1.3V4.4c0-0.5,0.2-1,0.5-1.3s0.8-0.5,1.3-0.5H4v-2c0-0.1,0-0.2,0.1-0.3S4.3,0,4.5,0h0.3\r\n                C4.9,0,5,0,5.1,0.1s0.1,0.2,0.1,0.3v2h7.5v-2c0-0.1,0-0.2,0.1-0.3S13.1,0,13.2,0h0.3c0.1,0,0.2,0,0.3,0.1S14,0.3,14,0.5v2H15.9z\r\n                M2.1,3.8c-0.2,0-0.3,0.1-0.4,0.2S1.5,4.2,1.5,4.4v1.9h15V4.4c0-0.2-0.1-0.3-0.2-0.4s-0.3-0.2-0.4-0.2H2.1z M15.9,18.8\r\n                c0.2,0,0.3-0.1,0.4-0.2s0.2-0.3,0.2-0.4V7.5h-15v10.6c0,0.2,0.1,0.3,0.2,0.4s0.3,0.2,0.4,0.2H15.9z M6,12.5c0.1,0,0.2,0,0.3-0.1\r\n                s0.1-0.2,0.1-0.3v-1.6c0-0.1,0-0.2-0.1-0.3S6.2,10,6,10H4.5c-0.1,0-0.2,0-0.3,0.1S4,10.3,4,10.5V12c0,0.1,0,0.2,0.1,0.3\r\n                s0.2,0.1,0.3,0.1H6z M6,16.3c0.1,0,0.2,0,0.3-0.1s0.1-0.2,0.1-0.3v-1.6c0-0.1,0-0.2-0.1-0.3S6.2,13.8,6,13.8H4.5\r\n                c-0.1,0-0.2,0-0.3,0.1S4,14.1,4,14.2v1.6c0,0.1,0,0.2,0.1,0.3s0.2,0.1,0.3,0.1H6z M9.8,12.5c0.1,0,0.2,0,0.3-0.1s0.1-0.2,0.1-0.3\r\n                v-1.6c0-0.1,0-0.2-0.1-0.3S9.9,10,9.8,10H8.2c-0.1,0-0.2,0-0.3,0.1s-0.1,0.2-0.1,0.3V12c0,0.1,0,0.2,0.1,0.3s0.2,0.1,0.3,0.1H9.8z\r\n                M9.8,16.3c0.1,0,0.2,0,0.3-0.1s0.1-0.2,0.1-0.3v-1.6c0-0.1,0-0.2-0.1-0.3s-0.2-0.1-0.3-0.1H8.2c-0.1,0-0.2,0-0.3,0.1\r\n                s-0.1,0.2-0.1,0.3v1.6c0,0.1,0,0.2,0.1,0.3s0.2,0.1,0.3,0.1H9.8z M13.5,12.5c0.1,0,0.2,0,0.3-0.1S14,12.2,14,12v-1.6\r\n                c0-0.1,0-0.2-0.1-0.3S13.7,10,13.5,10H12c-0.1,0-0.2,0-0.3,0.1s-0.1,0.2-0.1,0.3V12c0,0.1,0,0.2,0.1,0.3s0.2,0.1,0.3,0.1H13.5z\r\n                M13.5,16.3c0.1,0,0.2,0,0.3-0.1s0.1-0.2,0.1-0.3v-1.6c0-0.1,0-0.2-0.1-0.3s-0.2-0.1-0.3-0.1H12c-0.1,0-0.2,0-0.3,0.1\r\n                s-0.1,0.2-0.1,0.3v1.6c0,0.1,0,0.2,0.1,0.3s0.2,0.1,0.3,0.1H13.5z\"\r\n              />\r\n            </svg>\r\n          </IconButton>\r\n          Search for events\r\n        </h3>\r\n\r\n        {/* TODO: Create form components */}\r\n        <div className=\"form-group\">\r\n          <label htmlFor=\"search-keywords\">Keywords</label>\r\n          <input id=\"search-keywords\" name=\"search-keywords\" type=\"text\" />\r\n        </div>\r\n\r\n        <CheckboxGroup label={'School'} options={cbOptions} />\r\n\r\n        <div className=\"form-group\">\r\n          <label htmlFor=\"search-category\">Category</label>\r\n          <Dropdown fluid multiple selection options={options} />\r\n        </div>\r\n\r\n        <div className=\"form-group\">\r\n          <label htmlFor=\"search-dates\">Date</label>\r\n          {/* TODO: Calculate 20yr range for min max valus */}\r\n          <input ref={n => this.selector = n} type=\"input\" name=\"search-dates\" id=\"search-dates\" />\r\n        </div>\r\n\r\n        <footer className=\"form-actions\">\r\n          <Button label={'Search Events'} />\r\n        </footer>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nCalendarSearch.defaultProps = {\r\n};\r\n\r\nCalendarSearch.propTypes = {\r\n  dispatch: PropTypes.func.isRequired,\r\n};\r\n\r\nexport default connect()(CalendarSearch);\r\n",
        "examples": []
    },
    {
        "name": "CheckboxGroup",
        "description": "This is the CheckboxGroup component.",
        "props": {
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
        "code": "import React from 'react';\r\nimport PropTypes from 'prop-types';\r\n\r\n/** This is the CheckboxGroup component. */\r\nclass CheckboxGroup extends React.PureComponent {\r\n  render() {\r\n    const checkboxOptions = this.props.options.map(({ name, value, label, checked }) => {\r\n      return (\r\n        <label key={`${name}+${value}`}>\r\n          <input name={name} value={value} type=\"checkbox\" defaultChecked={checked} />\r\n          <span className=\"icon\"></span> { label }\r\n        </label>\r\n      );\r\n    });\r\n\r\n    return (\r\n      <div className=\"form-group checkbox-group\">\r\n        <p className=\"form-label\">{ this.props.label }</p>\r\n        <div className=\"checkbox-options\">\r\n          {checkboxOptions}\r\n        </div>\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nCheckboxGroup.defaultProps = {\r\n  label: 'Label',\r\n};\r\n\r\nCheckboxGroup.propTypes = {\r\n  label: PropTypes.string,\r\n  options: PropTypes.array.isRequired,\r\n};\r\n\r\nexport default CheckboxGroup;\r\n\r\n",
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
        "code": "import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport { addSubtract } from 'js-utils/formatDate';\r\nimport { withRouter } from 'react-router';\r\nimport Button from '../Button';\r\nimport './style.scss';\r\n\r\n/** This is the DayPagination component. */\r\nclass DayPagination extends React.PureComponent {\r\n  routeChange = str => {\r\n    this.props.router.push(`/demo/${str}`);\r\n  }\r\n\r\n  _handleClick = (id, direction) => {\r\n    return direction === 'next'\r\n      ? this.routeChange(addSubtract({ date: id, amount: 1, type: 'd' }))\r\n      : this.routeChange(addSubtract({ date: id, amount: -1, type: 'd' }));\r\n  }\r\n\r\n  render() {\r\n    return (\r\n      <div className=\"footer-pagination\">\r\n        <Button label={'Previous Day'} onClick={() => this._handleClick(this.props.params.id, 'prev')} />\r\n        <Button label={'Next Day'} onClick={() => this._handleClick(this.props.params.id, 'next')} />\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nDayPagination.defaultProps = {\r\n  params: {},\r\n  router: {},\r\n};\r\n\r\nDayPagination.propTypes = {\r\n  params: PropTypes.object,\r\n  router: PropTypes.object,\r\n};\r\n\r\nexport default withRouter(DayPagination);\r\n\r\n",
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
        "code": "import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport { Dropdown, Header } from 'semantic-ui-react';\r\nimport { formatDate, addSubtract } from 'js-utils/formatDate';\r\nimport { connect } from 'react-redux';\r\nimport { updateMonthYear } from 'fed-modules/CalendarContainer/Actions/CalendarActions.js';\r\nimport Button from '../Button';\r\nimport './style.scss';\r\n\r\nconst options = [\r\n  {\r\n    key: 'c-m-january',\r\n    text: 'January',\r\n    value: '01',\r\n    content: 'January',\r\n  },\r\n  {\r\n    key: 'c-m-february',\r\n    text: 'February',\r\n    value: '02',\r\n    content: 'February',\r\n  },\r\n  {\r\n    key: 'c-m-march',\r\n    text: 'March',\r\n    value: '03',\r\n    content: 'March',\r\n  },\r\n  {\r\n    key: 'c-m-april',\r\n    text: 'April',\r\n    value: '04',\r\n    content: 'April',\r\n  },\r\n  {\r\n    key: 'c-m-may',\r\n    text: 'May',\r\n    value: '05',\r\n    content: 'May',\r\n  },\r\n  {\r\n    key: 'c-m-june',\r\n    text: 'June',\r\n    value: '06',\r\n    content: 'June',\r\n  },\r\n  {\r\n    key: 'c-m-july',\r\n    text: 'July',\r\n    value: '07',\r\n    content: 'July',\r\n  },\r\n  {\r\n    key: 'c-m-august',\r\n    text: 'August',\r\n    value: '08',\r\n    content: 'August',\r\n  },\r\n  {\r\n    key: 'c-m-september',\r\n    text: 'September',\r\n    value: '09',\r\n    content: 'September',\r\n  },\r\n  {\r\n    key: 'c-m-october',\r\n    text: 'October',\r\n    value: '10',\r\n    content: 'October',\r\n  },\r\n  {\r\n    key: 'c-m-november',\r\n    text: 'November',\r\n    value: '11',\r\n    content: 'November',\r\n  },\r\n  {\r\n    key: 'c-m-december',\r\n    text: 'December',\r\n    value: '12',\r\n    content: 'December',\r\n  },\r\n];\r\n\r\n/** This is the DayViewDropDown component. */\r\nclass DayViewDropDown extends React.PureComponent {\r\n  _handleYearChange = (e, direction) => {\r\n    e.preventDefault();\r\n    e.stopPropagation();\r\n\r\n    const addYear = addSubtract({\r\n      date: this.props.selectedDate,\r\n      amount: 1,\r\n    });\r\n\r\n    const subtractYear = addSubtract({\r\n      date: this.props.selectedDate,\r\n      amount: -1,\r\n    });\r\n\r\n    direction === 'next'\r\n      ? this.props.dispatch(updateMonthYear(addYear))\r\n      : this.props.dispatch(updateMonthYear(subtractYear));\r\n  }\r\n\r\n  // Updates calendar with selected month from dropdown\r\n  _handleMonthChange = (e, month) => {\r\n    const date = this.props.selectedDate;\r\n    const year = formatDate(date, 'YYYY');\r\n    const day = formatDate(date, 'DD');\r\n\r\n    this.props.dispatch(updateMonthYear(`${year}${month}${day}`));\r\n  }\r\n\r\n  render() {\r\n    const selectedDate = this.props.selectedDate;\r\n    const {min, max} = this.props.minMax;\r\n\r\n    // The trigger is the date displayed above the calendar\r\n    const trigger = (\r\n      <span>\r\n        { formatDate(selectedDate, 'MMMM YYYY') }\r\n      </span>\r\n    );\r\n\r\n    const isMin = selectedDate <= min ? true : false;\r\n    const isMax = selectedDate >= max ? true : false;\r\n\r\n    const yearSelector = (\r\n      <div className=\"year-selector\">\r\n        <button type=\"button\" disabled={isMin} onClick={e => this._handleYearChange(e, 'prev')}>\r\n          <svg className=\"svg-arrows\" viewBox=\"0 0 8 14\">\r\n            <path\r\n              className=\"svg-black\"\r\n              d=\"M7.2,13.8c-0.1,0.1-0.1,0.1-0.3,0.1c-0.1,0-0.2,0-0.3-0.1L0.2,7.2C0.1,7.2,0,7.1,0,7s0-0.2,0.1-0.3l6.5-6.6\r\n              C6.8,0.1,6.9,0.1,7,0.1s0.2,0,0.3,0.1l0.6,0.6C7.9,0.9,8,1,8,1.1s0,0.2-0.1,0.3L2.2,7l5.7,5.7C7.9,12.7,8,12.8,8,12.9s0,0.2-0.1,0.3\r\n              L7.2,13.8z\"\r\n            />\r\n          </svg>\r\n        </button>\r\n\r\n        <span className=\"year-selected\">{ formatDate(selectedDate, 'YYYY') }</span>\r\n\r\n        <button type=\"button\" disabled={isMax} onClick={e => this._handleYearChange(e, 'next')}>\r\n          <svg className=\"svg-arrows\" viewBox=\"0 0 8 14\">\r\n            <path\r\n              className=\"svg-black\"\r\n              d=\"M0.8,0.2C0.9,0.1,0.9,0.1,1,0.1s0.2,0,0.3,0.1l6.5,6.6C7.9,6.8,8,6.9,8,7s0,0.2-0.1,0.3l-6.5,6.6 c-0.1,0.1-0.2,0.1-0.3,0.1s-0.2,0-0.3-0.1l-0.6-0.6C0.1,13.1,0,13,0,12.9s0-0.2,0.1-0.3L5.8,7L0.2,1.3C0.1,1.3,0,1.2,0,1.1 s0-0.2,0.1-0.3L0.8,0.2z\"\r\n            />\r\n          </svg>\r\n        </button>\r\n      </div>\r\n    );\r\n\r\n    return (\r\n      <Header>\r\n        <Header.Content>\r\n          <Dropdown\r\n            inline\r\n            trigger={trigger}\r\n            header={yearSelector}\r\n            options={options}\r\n            defaultValue={options[0].value}\r\n            onChange={(e, {value}) => this._handleMonthChange(e, value)}\r\n          />\r\n        </Header.Content>\r\n      </Header>\r\n    );\r\n  }\r\n}\r\n\r\nDayViewDropDown.defaultProps = {\r\n};\r\n\r\nDayViewDropDown.propTypes = {\r\n  selectedDate: PropTypes.string.isRequired,\r\n  minMax: PropTypes.object.isRequired,\r\n  dispatch: PropTypes.func.isRequired,\r\n};\r\n\r\nconst mapStateToProps = state => {\r\n  return {\r\n    selectedDate: state.reducer.selectedDate,\r\n    minMax: state.reducer.minMax,\r\n  };\r\n};\r\n\r\nexport default connect(mapStateToProps)(DayViewDropDown);\r\n\r\n",
        "examples": []
    },
    {
        "name": "EventBlock",
        "description": "This is the EventBlock component.",
        "props": {
            "id": {
                "type": {
                    "name": "union",
                    "value": [ { "name": "string" }, { "name": "number" } ]
                },
                "required": false,
                "description": "",
                "defaultValue": { "value": "null", "computed": false }
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
                "type": { "name": "array" },
                "required": false,
                "description": "",
                "defaultValue": { "value": "'No categories assigned'", "computed": false }
            },
            "tags": {
                "type": { "name": "array" },
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
            }
        },
        "code": "import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport Button from 'core/Components/Button';\r\nimport './style.scss';\r\n\r\n/** This is the EventBlock component. */\r\nclass EventBlock extends React.PureComponent {\r\n  render() {\r\n    let i = 0;\r\n    const categories = this.props.categories.toString().split(',').join(', ');\r\n    const isImportant = this.props.important ? <div className=\"event-alert\">Important Date</div> : null;\r\n    const tags = this.props.tags.map(tag => {\r\n      return (\r\n        <li key={`e-${this.props.id}-${i += 1}-${tag}`} className=\"event-tag\" data-type={tag}>\r\n          <div className=\"event-tag-indicator\" />\r\n          { tag }\r\n        </li>\r\n      );\r\n    });\r\n\r\n    const footer = (\r\n      <footer className=\"event-block-footer\">\r\n        <a className=\"event-block-link\" href={this.props.url} target=\"_blank\">More information</a>\r\n      </footer>\r\n    );\r\n\r\n    const eventFooter = this.props.url ? footer : null;\r\n\r\n    return (\r\n      <div className=\"event-block\">\r\n        { isImportant }\r\n        <header>\r\n          <h2 className=\"event-title\">{ this.props.name }</h2>\r\n        </header>\r\n\r\n        <div className=\"event-body col-3\">\r\n          <ul className=\"event-meta\">\r\n            <li className=\"event-item\">\r\n              <div className=\"icon\" />\r\n              { this.props.allDay ? 'All Day' : `${this.props.start}-${this.props.end}` }\r\n            </li>\r\n\r\n            <li className=\"event-item\">\r\n              <div className=\"icon\" />\r\n              { this.props.location }\r\n            </li>\r\n\r\n            <li className=\"event-item event-item-categories\">\r\n              <div className=\"icon\" />\r\n              { categories }\r\n            </li>\r\n          </ul>\r\n\r\n          <ul className=\"event-tags\">\r\n            { tags }\r\n          </ul>\r\n\r\n          <div className=\"event-actions\">\r\n            <Button label={'Add to calendar'} btnClass={'btn-secondary'} />\r\n          </div>\r\n        </div>\r\n\r\n        { eventFooter }\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nEventBlock.defaultProps = {\r\n  id: null,\r\n  name: null,\r\n  start: null,\r\n  end: null,\r\n  allDay: null,\r\n  location: null,\r\n  categories: 'No categories assigned',\r\n  tags: 'No tags assigned',\r\n  important: false,\r\n  url: null,\r\n};\r\n\r\nEventBlock.propTypes = {\r\n  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),\r\n  name: PropTypes.string.isRequired,\r\n  start: PropTypes.string.isRequired,\r\n  end: PropTypes.string,\r\n  allDay: PropTypes.bool,\r\n  location: PropTypes.string.isRequired,\r\n  categories: PropTypes.array,\r\n  tags: PropTypes.array,\r\n  important: PropTypes.bool,\r\n  url: PropTypes.string,\r\n};\r\n\r\nexport default EventBlock;\r\n\r\n",
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
            }
        },
        "code": "import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport eventData from 'json/events.json';\r\nimport { formatDate } from 'js-utils/formatDate';\r\nimport './style.scss';\r\n\r\n/** This is the EventTypeList component. */\r\nclass EventTypeList extends React.PureComponent {\r\n  state = {\r\n    events: [],\r\n    currDay: formatDate(this.props.day, 'YYYYMMDD'),\r\n  }\r\n\r\n  // first filter our the current day\r\n  compareDays = event => {\r\n    const startDay = formatDate(event.start, 'YYYYMMDD');\r\n\r\n    return startDay === this.state.currDay;\r\n  }\r\n\r\n  // then push the tags into current state\r\n  currentTags = ({ tags }) => {\r\n    tags.map(tag => {\r\n      this.state.events.includes(tag) ? null : this.state.events.push(tag);\r\n    });\r\n  };\r\n\r\n  componentWillMount() {\r\n    // runs the above functions\r\n    Object.values(eventData.events).filter(this.compareDays).map(this.currentTags);\r\n  }\r\n\r\n  render() {\r\n    const currentEvents = this.state.events.map(event => {\r\n      return <li key={`${this.props.day}-${event}`} data-type={event}>{event}</li>;\r\n    });\r\n\r\n    return (\r\n      <ul className=\"event-list-type\">\r\n        { currentEvents }\r\n      </ul>\r\n    );\r\n  }\r\n}\r\n\r\nEventTypeList.defaultProps = {\r\n};\r\n\r\nEventTypeList.propTypes = {\r\n  day: PropTypes.object.isRequired,\r\n};\r\n\r\nexport default EventTypeList;\r\n\r\n",
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
                "required": true,
                "description": ""
            }
        },
        "code": "import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport './style.scss';\r\n\r\n/** This is the IntroCopy component. */\r\nclass IntroCopy extends React.PureComponent {\r\n  createMarkUp() {\r\n    return {__html: this.props.content};\r\n  }\r\n\r\n  render() {\r\n    return (\r\n      <article>\r\n        <header>\r\n          <h2>{ this.props.title }</h2>\r\n        </header>\r\n\r\n        <div dangerouslySetInnerHTML={this.createMarkUp()} />\r\n      </article>\r\n    );\r\n  }\r\n}\r\n\r\nIntroCopy.defaultProps = {\r\n  title: 'Intro Title',\r\n};\r\n\r\nIntroCopy.propTypes = {\r\n  title: PropTypes.string.isRequired,\r\n  content: PropTypes.string.isRequired,\r\n};\r\n\r\nexport default IntroCopy;\r\n\r\n",
        "examples": []
    }
]
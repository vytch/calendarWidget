module.exports = [
    {
        "name": "CalendarLegend",
        "description": "This is the CalendarLegend component.",
        "code": "import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport './style.scss';\r\n\r\n/** This is the CalendarLegend component. */\r\nclass CalendarLegend extends React.PureComponent {\r\n  render() {\r\n    return (\r\n      /*\r\n        TODO\r\n        - Make this an array or object that gets looped through\r\n        - Make abbreviations global so they apply to calendar and event-list-type\r\n        - auto abbreviate legend titles\r\n      */\r\n\r\n      <ul className=\"legend\">\r\n        <li className=\"legend-item\" data-type=\"JS\">Junior School (JS)</li>\r\n        <li className=\"legend-item\" data-type=\"JSS\">Junior Secondary School (JSS)</li>\r\n        <li className=\"legend-item\" data-type=\"MS\">Middle School</li>\r\n        <li className=\"legend-item\" data-type=\"SS\">Senior School</li>\r\n      </ul>\r\n    );\r\n  }\r\n}\r\n\r\nCalendarLegend.defaultProps = {\r\n};\r\n\r\nCalendarLegend.propTypes = {\r\n};\r\n\r\nexport default CalendarLegend;\r\n\r\n",
        "examples": []
    },
    {
        "name": "EventTypeList",
        "description": "This is the EventTypeList component.",
        "code": "import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport './style.scss';\r\n\r\n/** This is the EventTypeList component. */\r\nclass EventTypeList extends React.PureComponent {\r\n  render() {\r\n    return (\r\n      <ul className=\"event-list-type\">\r\n        <li data-type=\"JS\">JS</li>\r\n        <li data-type=\"JSS\">JSS</li>\r\n        <li data-type=\"MS\">MS</li>\r\n        <li data-type=\"SS\">SS</li>\r\n      </ul>\r\n    );\r\n  }\r\n}\r\n\r\nEventTypeList.defaultProps = {\r\n};\r\n\r\nEventTypeList.propTypes = {\r\n};\r\n\r\nexport default EventTypeList;\r\n\r\n",
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
        "code": "import React from 'react';\r\nimport PropTypes from 'prop-types';\r\nimport './style.scss';\r\n\r\n/** This is the IntroCopy component. */\r\nclass IntroCopy extends React.PureComponent {\r\n  render() {\r\n    return (\r\n      <article>\r\n        <header>\r\n          <h2>{ this.props.title }</h2>\r\n        </header>\r\n\r\n        { this.props.content }\r\n      </article>\r\n    );\r\n  }\r\n}\r\n\r\nIntroCopy.defaultProps = {\r\n  title: 'Intro Title',\r\n};\r\n\r\nIntroCopy.propTypes = {\r\n  title: PropTypes.string.isRequired,\r\n  content: PropTypes.string.isRequired,\r\n};\r\n\r\nexport default IntroCopy;\r\n\r\n",
        "examples": []
    }
]
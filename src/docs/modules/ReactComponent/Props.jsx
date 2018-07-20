import React from 'react';
import PropTypes from 'prop-types';
import Table from 'core-partials/display/molecules/ResponsiveTable';
/**
{
  "header": [
    {"label": "My head1", "field": "field1"},
    {"label": "My head2", "field": "field2"}
  ],
  "rows": [
    {"id": "row-1", "field1": "Value 1a", "field2": "Value 2a"},
    {"id": "row-2", "field1": "Value 1b", "field2": "Value 2b"}
  ]
}
{
  "header": [
    {"label": "Name", "field": "name"},
    {"label": "Description", "field": "description"},
    {"label": "Type", "field": "type"},
    {"label": "Default", "field": "default"},
    {"label": "Required", "field": "required"}
  ],
  "rows": [
    {"id": "row-1", "field1": "Value 1a", "field2": "Value 2a"},
    {"id": "row-2", "field1": "Value 1b", "field2": "Value 2b"}
  ]
}
*/

export default class Props extends React.Component {
  constructor(props) {
    super(props);
    this.data = {
      header: [
        {label: 'Name', field: 'name'},
        {label: 'Description', field: 'description'},
        {label: 'Type', field: 'type'},
        {label: 'Default', field: 'default'},
        {label: 'Required', field: 'required'},
      ],
      rows: [
      ],
    };
    this.data.rows = Object.keys(this.props.props).map(key => {
      return {
        id: key,
        name: key,
        description: this.props.props[key].description,
        type: this.props.props[key].type.name,
        default: this.props.props[key].defaultValue && this.props.props[key].defaultValue.value,
        required: this.props.props[key].required && 'X',
      };
    });
  }
  render() {
    return (
      <Table data={this.data} />
    );
  };
};

Props.propTypes = {
  props: PropTypes.object.isRequired,
};

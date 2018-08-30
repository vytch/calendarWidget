import React from 'react';
import PropTypes from 'prop-types';

/** This is the CheckboxGroup component. */
class CheckboxGroup extends React.PureComponent {
  _handleChange = event => {
    this.props.onChange(event);
  }

  render() {
    const checkboxOptions = this.props.options.map(({ name, value, label, checked }) => {
      return (
        <label key={`${name}+${value}`}>
          <input name={name} value={value} type="checkbox" defaultChecked={checked} onChange={this._handleChange} />
          <span className="icon" /> { label }
        </label>
      );
    });

    return (
      <div className="form-group checkbox-group">
        <p className="form-label">{ this.props.label }</p>
        <div className="checkbox-options">
          {checkboxOptions}
        </div>
      </div>
    );
  }
}

CheckboxGroup.defaultProps = {
  onChange: () => {},
  label: 'Label',
};

CheckboxGroup.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
};

export default CheckboxGroup;


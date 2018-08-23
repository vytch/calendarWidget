import React from 'react';
import PropTypes from 'prop-types';

/** This is the CheckboxGroup component. */
class CheckboxGroup extends React.PureComponent {
  render() {
    const checkboxOptions = this.props.options.map(({ name, value, label, checked }) => {
      return (
        <label key={`${name}+${value}`}>
          <input name={name} value={value} type="checkbox" defaultChecked={checked} />
          <span className="icon"></span> { label }
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
  label: 'Label',
};

CheckboxGroup.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array.isRequired,
};

export default CheckboxGroup;


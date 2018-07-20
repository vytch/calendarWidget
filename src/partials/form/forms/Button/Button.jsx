import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** This is the Button component. */
class Button extends React.Component {
  constructor() {
    super();
    this._handleClick = this.onClick.bind(this);
  }
  onClick(e) {
    this.props.onClick(e);
  }
  render() {
    return (
      <button type="button" onClick={this._handleClick} {...this.props}>{this.props.label}</button>
    );
  }
}

Button.defaultProps = {
  onClick: () => {},
  label: 'Button label',
};

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
};

export default Button;

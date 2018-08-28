import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** This is the Button component. */
class Button extends React.PureComponent {
  _handleClick = e => {
    this.props.onClick(e);
  }

  render() {
    const classes = this.props.btnClass ? ['btn', this.props.btnClass] : ['btn'];

    return (
      // TODO: Add icons
      <button
        type="button"
        className={classes.join(' ')}
        onClick={this._handleClick}
        disabled={this.props.disabled}
      >
        { this.props.children }
        { this.props.label }
      </button>
    );
  }
}

Button.defaultProps = {
  onClick: () => { },
  label: 'Button Label',
  btnClass: null,
  children: null,
  disabled: false,
};

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  btnClass: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  disabled: PropTypes.bool,
};

export default Button;

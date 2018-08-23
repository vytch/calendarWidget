import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** This is the Button component. */
class Button extends React.PureComponent {
  constructor() {
    super();
    this._handleClick = this.onClick.bind(this);
  }

  onClick(e) {
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
};

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  btnClass: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
};

export default Button;

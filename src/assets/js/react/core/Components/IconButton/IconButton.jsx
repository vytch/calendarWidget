import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** This is the IconButton component. */
class IconButton extends React.PureComponent {
  _handleClick = e => {
    this.props.onClick(e);
  }

  render() {
    const classes = this.props.hasBg ? ['btn-icon'] : ['btn-icon btn-transparent'];
    return (
      // TODO: Add icons
      <button
        type="button"
        className={classes.join(' ')}
        onClick={this._handleClick}
      >
        { this.props.children }
      </button>
    );
  }
}

IconButton.defaultProps = {
  onClick: () => { },
  children: null,
  hasBg: true,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  hasBg: PropTypes.bool,
};

export default IconButton;


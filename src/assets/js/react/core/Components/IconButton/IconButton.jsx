import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** This is the IconButton component. */
class IconButton extends React.PureComponent {
  _handleClick = e => {
    this.props.onClick(e);
  }

  render() {
    return (
      // TODO: Add icons
      <button
        type="button"
        className="btn-icon"
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
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
};

export default IconButton;


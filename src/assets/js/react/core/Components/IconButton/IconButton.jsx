import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** This is the IconButton component. */
class IconButton extends React.PureComponent {
  state = {
    classes: ['btn-icon'],
  }

  _handleClick = e => {
    this.props.onClick(e);
  }

  componentWillMount() {
    this.props.hasBg ? null : this.state.classes.push('btn-transparent');
    this.props.classes ? this.state.classes.push(this.props.classes) : null;
  }

  render() {
    return (
      // TODO: Add icons
      <button
        type="button"
        className={this.state.classes.join(' ')}
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
  classes: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  hasBg: PropTypes.bool,
  classes: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
  ]),
};

export default IconButton;


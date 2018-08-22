import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** This is the Header component. */
class Header extends React.PureComponent {
  render() {
    return (
      <header className="header">
        <h1>{ this.props.title }</h1>

        <div className="header-divider">
          <svg viewBox="0 0 1201 112">
            <path className="header-divider-svg" d="M-50,0h480.5C501.4,4.6,558.3,27.2,601,68c37.7-40.4,95.6-63.1,173.7-68H1253v112H-50V0z" />
          </svg>
        </div>
      </header>
    );
  }
}

Header.defaultProps = {
  title: 'Calendar',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;


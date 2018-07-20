import React from 'react';
import PropTypes from 'prop-types'; // ES6
import Navigation from '../Navigation';
import './style.scss';

export default class Homepage extends React.Component {

  render() {
    const title = this.props.routes[0].name;
    const navigationProps = {
      currentRoute: {
        title,
        path: this.props.location.pathname,
      },
    };
    return (
      <div className="styleguide-wrapper">
        <Navigation {...navigationProps} />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Homepage.propTypes = {
  routes: PropTypes.array.isRequired,
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired,
};

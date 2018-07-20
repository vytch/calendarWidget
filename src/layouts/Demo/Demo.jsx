import React from 'react';
import PropTypes from 'prop-types'; // ES6
import Navigation from '../Navigation';
import './style.scss';


export default class Demo extends React.Component {
  render() {
    const title = this.props.routes[0].name;
    const navigationProps = {
      currentRoute: {
        title,
        path: this.props.location.pathname,
      },
      isFixed: true,
    };
    return (
      <div className="demo-wrapper">
        <Navigation {...navigationProps} />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Demo.propTypes = {
  routes: PropTypes.array.isRequired,
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired,
};

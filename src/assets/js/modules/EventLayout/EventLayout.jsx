import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import CalendarBackButton from 'core/Components/CalendarBackButton/CalendarBackButton';
import Header from 'core/Components/Header';
import {updateTesting} from './Actions/TestingActions';
import './style.scss';

/** This is the EventLayout component. */
class EventLayout extends React.Component {
  constructor() {
    super();
    this._handleClick = this.clicked.bind(this);
  }

  clicked(e) {
    e.preventDefault();
    this.props.dispatch(updateTesting('Blah blah'));
  }

  render() {
    console.log(this.props.location.pathname);
    this.props.location.pathname === '/' ? console.log('home') : console.log('not home');

    const backButton = this.props.location.pathname === '/' ? null : <CalendarBackButton />;
    return (
      <div>
        <Header />

        { backButton }
        <main className="wrapper">
          {this.props.children}
        </main>
      </div>
    );
  }
}
EventLayout.defaultProps = {
};

EventLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string, PropTypes.element, PropTypes.array,
  ]).isRequired,
  dispatch: PropTypes.func.isRequired,
  location: PropTypes.object.isRequired,
};

export default connect()(EventLayout);

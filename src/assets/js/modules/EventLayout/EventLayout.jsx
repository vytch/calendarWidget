import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CalendarBackButton from 'core/Components/CalendarBackButton/CalendarBackButton';
import SearchBackButton from 'core/Components/SearchBackButton/SearchBackButton';
import Header from 'core/Components/Header';
import './style.scss';

/** This is the EventLayout component. */
class EventLayout extends React.Component {
  constructor() {
    super();
    this._handleClick = this.clicked.bind(this);
  }

  clicked(e) {
    e.preventDefault();
  }

  render() {
    const pathname = this.props.location.pathname;
    const calendarButton = pathname === '/' ? null : <CalendarBackButton />;
    const backButton = pathname === '/search-results' ? <SearchBackButton /> : calendarButton;
    console.log(pathname);
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
  location: PropTypes.object.isRequired,
};

export default connect()(EventLayout);

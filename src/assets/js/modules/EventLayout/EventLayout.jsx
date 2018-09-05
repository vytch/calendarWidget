import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CalendarBackButton from 'core/Components/CalendarBackButton/CalendarBackButton';
import SearchBackButton from 'core/Components/SearchBackButton/SearchBackButton';
import Header from 'core/Components/Header';
import { getCategories } from './Actions/AppActions';
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

  componentDidMount() {
    this.props.getCategories();
  }

  render() {
    const pathname = this.props.location.pathname;
    const calendarButton = pathname === '/' || pathname === '/search' ? null : <CalendarBackButton />;
    const backButton = pathname === '/search-results' ? <SearchBackButton /> : calendarButton;
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
  getCategories: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    getCategories: () => dispatch(getCategories()),
  };
};

export default connect(null, mapDispatchToProps)(EventLayout);

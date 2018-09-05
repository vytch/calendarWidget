import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CalendarBackButton from 'core/Components/CalendarBackButton/CalendarBackButton';
import SearchBackButton from 'core/Components/SearchBackButton/SearchBackButton';
import Header from 'core/Components/Header';
import Loader from 'core/Components/Loader';
import { getAllData } from 'reducers/Actions/AppActions';
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
    this.props.getAllData();
  }

  render() {
    const pathname = this.props.location.pathname;
    const calendarButton = pathname === '/' || pathname === '/search' ? null : <CalendarBackButton />;
    const backButton = pathname === '/search-results' ? <SearchBackButton /> : calendarButton;
    const children = this.props.appLoading ? <Loader /> : this.props.children;

    return (
      <div>
        <Header />
        { backButton }
        <main className="wrapper">
          { children }
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
  getAllData: PropTypes.func.isRequired,
  appLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
  return {
    appLoading: state.reducer.appLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllData: () => dispatch(getAllData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventLayout);

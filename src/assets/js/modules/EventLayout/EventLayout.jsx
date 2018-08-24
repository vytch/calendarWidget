import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import {updateTesting} from './Actions/TestingActions';
import Header from '../../react/core/Components/Header';
import './style.scss';

/** This is the EventLayout component. */
class EventLayout extends React.Component {
  constructor() {
    super();
    this._handleClick = this.clicked.bind(this);
    console.log(updateTesting);
  }
  clicked(e) {
    e.preventDefault();
    this.props.dispatch(updateTesting('Blah blah'));
  }
  render() {
    const searchingText = this.props.isSearching ? 'Yep' : 'Nope';

    return (
      <div>
        <Header />

        <main className="wrapper">
          {this.props.children}
        </main>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/demo/20180712">Demo 2018 07 13</Link></li>
          <li><Link to="/demo/20180713">Demo 2018 07 12</Link></li>
        </ul>
        <h3>Reduc value 1:{ searchingText }</h3>
        <p>
          <a href="#" onClick={this._handleClick}>Update me </a>
        </p>
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
  isSearching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  return {
    isSearching: state.reducer.isSearching,
  };
};
export default connect(mapStateToProps)(EventLayout);

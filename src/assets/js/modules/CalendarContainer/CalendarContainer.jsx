import React from 'react';
import PropTypes from 'prop-types';
import CalendarSearch from 'core/Components/CalendarSearch';
import DayView from '../DayView/DayView';
import './style.scss';

/** This is the CalendarContainer component. */
class CalendarContainer extends React.Component {
  // TODO: Convert to Redux
  constructor() {
    super();
    this.state = {
      isSearching: false,
    };
    this._handleSwitchView = this.handleSwitchView.bind(this);
  }

  handleSwitchView() {
    this.setState({
      isSearching: !this.state.isSearching,
    });
  }

  render() {
    let currentView = <DayView switchView={() => this._handleSwitchView} />;

    if (this.state.isSearching) {
      currentView = <CalendarSearch switchView={() => this._handleSwitchView} />;
    };

    return (
      <div>
        { currentView }
      </div>
    );
  }
}

CalendarContainer.defaultProps = {
};

CalendarContainer.propTypes = {
};

export default CalendarContainer;

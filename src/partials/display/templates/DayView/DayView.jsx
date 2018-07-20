import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

/** This is the DayView component. */
class DayView extends React.Component {
  render() {
    return (
      <div>
        <h2>Day view: {this.props.params.id}</h2>

      </div>
    );
  }
}

DayView.defaultProps = {
};

DayView.propTypes = {
  params: PropTypes.object.isRequired,
};

export default DayView;

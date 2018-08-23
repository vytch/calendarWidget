import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import './style.scss';

/** This is the DayPagination component. */
class DayPagination extends React.PureComponent {
  render() {
    return (
      <div className="footer-pagination">
        <Button label={'Previous Day'} />
        <Button label={'Next Day'} />
      </div>
    );
  }
}

DayPagination.defaultProps = {
};

DayPagination.propTypes = {
};

export default DayPagination;


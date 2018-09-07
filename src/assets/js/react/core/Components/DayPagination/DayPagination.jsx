import React from 'react';
import PropTypes from 'prop-types';
import { addSubtract } from 'js-utils/formatDate';
import { withRouter } from 'react-router';
import Button from '../Button';
import './style.scss';

/** This is the DayPagination component. */
class DayPagination extends React.PureComponent {
  render() {
    return (
      <div className="footer-pagination">
        <Button label={'Previous Day'} onClick={() => this.props.onHandleClick(this.props.params.id, 'prev')} />
        <Button label={'Next Day'} onClick={() => this.props.onHandleClick(this.props.params.id, 'next')} />
      </div>
    );
  }
}

DayPagination.defaultProps = {
  params: {},
};

DayPagination.propTypes = {
  params: PropTypes.object,
  onHandleClick: PropTypes.func.isRequired,
};

export default withRouter(DayPagination);


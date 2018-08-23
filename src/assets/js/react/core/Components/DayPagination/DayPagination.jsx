import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { withRouter } from 'react-router';
import Button from '../Button';
import './style.scss';

/** This is the DayPagination component. */
class DayPagination extends React.PureComponent {
  routeChange = str => {
    this.props.router.push(`/demo/${str}`);
  }

  _handleClick = (id, direction) => {
    return direction === 'next'
      ? this.routeChange(moment(id).add(1, 'd').format('YYYYMMDD'))
      : this.routeChange(moment(id).subtract(1, 'd').format('YYYYMMDD'));
  }

  render() {
    return (
      <div className="footer-pagination">
        <Button label={'Previous Day'} onClick={() => this._handleClick(this.props.params.id, 'prev')} />
        <Button label={'Next Day'} onClick={() => this._handleClick(this.props.params.id, 'next')} />
      </div>
    );
  }
}

DayPagination.defaultProps = {
  params: {},
  router: {},
};

DayPagination.propTypes = {
  params: PropTypes.object,
  router: PropTypes.object,
};

export default withRouter(DayPagination);


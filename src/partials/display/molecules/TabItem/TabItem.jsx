import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** This is the TabItem component. */
class TabItem extends React.Component {
  render() {
    const extraClass = this.props.isActive ? 'active tab-pane' : 'tab-pane';
    return (
      <div role="tabpanel" className={extraClass} id={this.props.id}>
        {this.props.children}
      </div>
    );
  }
}

TabItem.defaultProps = {
  isActive: false,
};

TabItem.propTypes = {
  id: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.string, PropTypes.element, PropTypes.array,
  ]).isRequired,
};

export default TabItem;

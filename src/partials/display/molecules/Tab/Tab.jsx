import React from 'react';
import PropTypes from 'prop-types';
import TabItem from 'core-partials/display/molecules/TabItem';
import './style.scss';

/** This is the Tab component. */
class Tab extends React.Component {
  render() {
    const nav = this.props.children.map(child => {
      const extraClass = child.props.isActive ? 'active' : '';
      return (
        <li key={child.props.id} className={extraClass} role="presentation"><a href={`#${child.props.id}`} aria-controls={child.props.id} role="tab" data-toggle="tab">{child.props.label}</a></li>
      );
    });

    return (
      <div>
        <ul className="nav nav-tabs" role="tablist">
          {nav}
        </ul>
        <div className="tab-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Tab.defaultProps = {
};

Tab.propTypes = {
  children: PropTypes.array.isRequired,
};
export default Tab;

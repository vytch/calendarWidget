import React from 'react';
import PropTypes from 'prop-types'; // ES6
import LayoutDispatcher from 'core-layout/LayoutDispatcher';
import styleguidePaths from 'data/styleguidePaths.json';

const getComponent = component => {
  const defaultComponent = (<div>Pick your component</div>);

  if (typeof component === 'undefined') {
    return defaultComponent;
  }

  const Template = require(`core-styleguide/${styleguidePaths.find(item => item.name === component).path}`).default; // eslint-disable-line
  return (<Template />);
};

export default class Styleguide extends React.Component {
  render() {
    const component = (typeof this.props.params !== 'undefined') ? getComponent(this.props.params.component) : '';
    return (
      <LayoutDispatcher {...this.props}>
        {component}
      </LayoutDispatcher>
    );
  }
};

Styleguide.propTypes = {
  params: PropTypes.object.isRequired,
};

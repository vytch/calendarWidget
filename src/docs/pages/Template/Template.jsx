import React from 'react';
import PropTypes from 'prop-types'; // ES6
import LayoutDispatcher from 'core-layout/LayoutDispatcher';
import templatePaths from 'data/templatePaths.json';

const getComponent = component => {
  const defaultComponent = (<div>Pick your compoenent</div>);
  if (typeof component === 'undefined') {
    return defaultComponent;
  }

  // console.log(`rendering core-pages/${templatePaths.find(item => item.name === component).path}`);

  const Template = require(`core-pages/${templatePaths.find(item => item.name === component).path}`).default; // eslint-disable-line

  return (<Template />);

};

export default class Template extends React.Component {
  render() {
    const component = (typeof this.props.params !== 'undefined') ? getComponent(this.props.params.template) : '';
    return (
      <LayoutDispatcher {...this.props}>
        {component}
      </LayoutDispatcher>
    );
  }
}

Template.propTypes = {
  params: PropTypes.object.isRequired,
};

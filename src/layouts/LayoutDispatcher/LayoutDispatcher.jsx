import React from 'react';
import PropTypes from 'prop-types'; // ES6
import DemoLayout from '../Demo';
import StyleguideLayout from '../Styleguide';
import HomepageLayout from '../Homepage';
import TemplateLayout from '../Templates';

const getLayout = route => {

  switch (route.params.layout.toLowerCase()) {
  case 'demo':
    return DemoLayout;
    break;
  case 'styleguide':
    return StyleguideLayout;
    break;
  case 'template':
    return TemplateLayout;
    break;
  default:
    return HomepageLayout;
    break;
  }
};

export default class LayoutDispatcher extends React.Component {
  render() {
    const Layout = getLayout(this.props.route);
    return (
      <Layout {...this.props}>{this.props.children}</Layout>
    );
  }
};

LayoutDispatcher.propTypes = {
  children: PropTypes.element.isRequired,
  route: PropTypes.object.isRequired,
};

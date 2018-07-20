import React from 'react';
import LayoutDispatcher from 'core-layout/LayoutDispatcher';

export default class Demo extends React.Component {
  render() {

    return (
      <LayoutDispatcher {...this.props}>
        <div data-component="Previewer" />
      </LayoutDispatcher>
    );
  }
}

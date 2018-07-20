import React from 'react';
import LayoutDispatcher from 'core-layout/LayoutDispatcher';
import content from '../../../../readme.md';
import codeGenerator from '../../../../codeGenerator.md';

export default class Home extends React.Component {
  rawMarkup(content) {
    return { __html: content};
  }
  render() {
    return (
      <LayoutDispatcher {...this.props}>
        <div>
          <div dangerouslySetInnerHTML={this.rawMarkup(content)} />
        </div>
        <div>
          <div dangerouslySetInnerHTML={this.rawMarkup(codeGenerator)} />
        </div>
      </LayoutDispatcher>
    );
  }
}

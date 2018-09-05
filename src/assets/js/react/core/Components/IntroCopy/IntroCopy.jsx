import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** This is the IntroCopy component. */
class IntroCopy extends React.PureComponent {
  createMarkUp() {
    return {__html: this.props.content};
  }

  render() {
    return (
      <article>
        <header>
          <h2>{ this.props.title }</h2>
        </header>

        <div dangerouslySetInnerHTML={this.createMarkUp()} />
      </article>
    );
  }
}

IntroCopy.defaultProps = {
  title: 'Intro Title',
  content: 'Content',
};

IntroCopy.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default IntroCopy;


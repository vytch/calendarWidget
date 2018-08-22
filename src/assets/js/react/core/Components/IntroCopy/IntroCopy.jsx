import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

/** This is the IntroCopy component. */
class IntroCopy extends React.PureComponent {
  render() {
    return (
      <article>
        <header>
          <h2>{ this.props.title }</h2>
        </header>

        { this.props.content }
      </article>
    );
  }
}

IntroCopy.defaultProps = {
  title: 'Intro Title',
};

IntroCopy.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default IntroCopy;


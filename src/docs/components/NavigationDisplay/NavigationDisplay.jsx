import React from 'react';
import PropTypes from 'prop-types'; // ES6

export default class NavigationDisplay extends React.Component {
  render() {
    const links = this.props.list.map(link => {
      return <li key={link.id}><a href={`#${link.id}`}>{link.title}</a></li>;
    });
    return (
      <ul className="navigation-display">{links}</ul>
    );
  }
}

NavigationDisplay.propTypes = {
  list: PropTypes.array.isRequired,
};

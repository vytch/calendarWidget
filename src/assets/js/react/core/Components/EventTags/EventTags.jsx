import React from 'react';
import PropTypes from 'prop-types';

/** This is the EventTags component. */
class EventTags extends React.PureComponent {
  render() {
    let i = 0;
    const tags = this.props.tags.map(tag => {
      return (
        // Type refers to where it's used, to prevent duplicate keys if re-used in the same module / page.
        <li key={`e-${this.props.type}-${i += 1}-${tag}`} className="event-tag" data-type={tag}>
          <div className="event-tag-indicator" />
          {tag}
        </li>
      );
    });

    return (
      <ul className="event-tags">
        { tags }
      </ul>
    );
  }
}

EventTags.defaultProps = {
};

EventTags.propTypes = {
  tags: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  type: PropTypes.string.isRequired,
};

export default EventTags;


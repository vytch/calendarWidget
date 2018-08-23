import React from 'react';
import PropTypes from 'prop-types';
import Button from 'core/Components/Button';

/** This is the EventBlock component. */
class EventBlock extends React.PureComponent {
  render() {
    let i = 0;
    const categories = this.props.categories.toString().split(',').join(', ');
    const isImportant = this.props.important ? <div className="event-alert">Important Date</div> : null;
    const tags = this.props.tags.map(tag => {
      return (
        <li key={`e-${this.props.id}-${i += 1}-${tag}`} className="event-tag" data-type={tag}>
          <div className="event-tag-indicator" />
          {tag}
        </li>
      );
    });

    return (
      <div className="event-block">
        { isImportant }
        <header>
          <h2 className="event-title">{ this.props.name }</h2>
        </header>

        <div className="event-body col-3">
          <ul className="event-meta">
            <li className="event-item">
              <div className="icon" />
              { this.props.allDay ? 'All Day' : `${this.props.start}-${this.props.end}` }
            </li>

            <li className="event-item">
              <div className="icon" />
              { this.props.location }
            </li>

            <li className="event-item event-item-categories">
              <div className="icon" />
              { categories }
            </li>
          </ul>

          <ul className="event-tags">
            { tags }
          </ul>

          {/* TODO: MORE INFORMATION LINK */}

          <div className="event-actions">
            <Button label={'Add to calendar'} btnClass={'btn-secondary'} />
          </div>
        </div>
      </div>
    );
  }
}

EventBlock.defaultProps = {
  id: null,
  name: null,
  start: null,
  end: null,
  allDay: null,
  location: null,
  categories: 'No categories assigned',
  tags: 'No tags assigned',
  important: false,
};

EventBlock.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string,
  allDay: PropTypes.bool,
  location: PropTypes.string.isRequired,
  categories: PropTypes.array,
  tags: PropTypes.array,
  important: PropTypes.bool,
};

export default EventBlock;


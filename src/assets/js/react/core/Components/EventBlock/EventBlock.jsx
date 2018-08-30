import React from 'react';
import PropTypes from 'prop-types';
import Button from 'core/Components/Button';
import EventTags from 'core/Components/EventTags';
import './style.scss';

/** This is the EventBlock component. */
class EventBlock extends React.PureComponent {
  render() {
    const categories = this.props.categories.toString().split(',').join(', ');
    const isImportant = this.props.important ? <div className="event-alert">Important Date</div> : null;

    const footer = (
      <footer className="event-block-footer">
        <a className="event-block-link" href={this.props.url} target="_blank">More information</a>
      </footer>
    );

    const eventFooter = this.props.url ? footer : null;

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

          <EventTags type={'eventResults'} tags={this.props.tags} />

          <div className="event-actions">
            <Button label={'Add to calendar'} btnClass={'btn-secondary'} />
          </div>
        </div>

        { eventFooter }
      </div>
    );
  }
}

EventBlock.defaultProps = {
  name: null,
  start: null,
  end: null,
  allDay: null,
  location: null,
  categories: 'No categories assigned',
  tags: 'No tags assigned',
  important: false,
  url: null,
};

EventBlock.propTypes = {
  name: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string,
  allDay: PropTypes.bool,
  location: PropTypes.string.isRequired,
  categories: PropTypes.array,
  tags: PropTypes.array,
  important: PropTypes.bool,
  url: PropTypes.string,
};

export default EventBlock;


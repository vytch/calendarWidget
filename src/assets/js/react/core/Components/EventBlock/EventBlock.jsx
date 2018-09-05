import React from 'react';
import PropTypes from 'prop-types';
import EventTags from 'core/Components/EventTags';
import { formatDate } from 'js-utils/formatDate';
import { connect } from 'react-redux';
// import 'core/Components/Button/style.scss';
import './style.scss';

/** This is the EventBlock component. */
class EventBlock extends React.PureComponent {
  render() {
    const svgCategory = (
      <svg x="0px" y="0px" viewBox="0 0 20 20" className="svgCategory">
        <path
          className="svg-black"
          d="M17,3.8c0.4,0.4,0.5,0.8,0.5,1.3v13c0,0.5-0.2,1-0.5,1.3S16.1,20,15.6,20H4.4c-0.5,0-1-0.2-1.3-0.5
          s-0.5-0.8-0.5-1.3V1.9c0-0.5,0.2-1,0.5-1.3S3.9,0,4.4,0h8c0.5,0,1,0.2,1.3,0.5L17,3.8z M15.6,18.8c0.2,0,0.3-0.1,0.4-0.2
          s0.2-0.3,0.2-0.4V6.3h-4.1c-0.3,0-0.5-0.1-0.7-0.3s-0.3-0.4-0.3-0.7V1.3H4.4C4.2,1.3,4,1.3,3.9,1.4S3.8,1.7,3.8,1.9v16.3
          c0,0.2,0.1,0.3,0.2,0.4s0.3,0.2,0.4,0.2H15.6z M16.1,4.7l-3.3-3.3c-0.1-0.1-0.2-0.1-0.3-0.2V5h3.8C16.2,4.9,16.1,4.8,16.1,4.7z"
        />
      </svg>
    );

    const svgClock = (
      <svg x="0px" y="0px" viewBox="0 0 20 20" className="svgClock">
        <path
          className="svg-black"
          d="M10,0.3c1.7,0,3.4,0.4,4.8,1.3s2.7,2.1,3.5,3.5s1.3,3.1,1.3,4.8s-0.4,3.4-1.3,4.8s-2.1,2.7-3.5,3.5
          s-3.1,1.3-4.8,1.3s-3.4-0.4-4.8-1.3s-2.7-2.1-3.5-3.5S0.3,11.7,0.3,10s0.4-3.4,1.3-4.8s2.1-2.7,3.5-3.5S8.3,0.3,10,0.3z M18.4,10
          c0-1.5-0.4-2.9-1.1-4.2s-1.8-2.3-3.1-3.1S11.5,1.6,10,1.6S7.1,1.9,5.8,2.7S3.5,4.5,2.7,5.8S1.6,8.5,1.6,10s0.4,2.9,1.1,4.2
          s1.8,2.3,3.1,3.1s2.7,1.1,4.2,1.1s2.9-0.4,4.2-1.1s2.3-1.8,3.1-3.1S18.4,11.5,18.4,10z M12.6,13.4c0.1,0.1,0.2,0.1,0.4,0.1
          s0.2-0.1,0.3-0.2l0.3-0.5c0.1-0.1,0.1-0.2,0.1-0.3s-0.1-0.2-0.2-0.3l-2.8-2V4.5c0-0.1,0-0.2-0.1-0.3s-0.2-0.1-0.3-0.1H9.7
          c-0.1,0-0.2,0-0.3,0.1S9.3,4.4,9.3,4.5v6.3c0,0.2,0.1,0.3,0.2,0.4L12.6,13.4z"
        />
      </svg>
    );

    const svgLandmark = (
      <svg x="0px" y="0px" viewBox="0 0 20 20" className="svgLandmark">
        <path
          className="svg-black"
          d="M10,0c1.4,0,2.6,0.3,3.8,1s2.1,1.6,2.7,2.7s1,2.4,1,3.8c0,0.8-0.1,1.6-0.3,2.2s-0.6,1.4-1.2,2.4
          c-0.4,0.7-1.3,1.9-2.6,3.8l-2.6,3.8C10.6,19.9,10.3,20,10,20s-0.6-0.1-0.8-0.4l-2.6-3.8C5.3,14,4.4,12.7,4,12.1
          c-0.6-0.9-1-1.7-1.2-2.4S2.5,8.3,2.5,7.5c0-1.4,0.3-2.6,1-3.8S5.1,1.7,6.3,1S8.6,0,10,0z M10,18.5l2.4-3.5c1.3-1.8,2.1-3,2.5-3.6
          c0.5-0.9,0.9-1.6,1.1-2.1s0.3-1.2,0.3-1.9c0-0.8-0.2-1.6-0.5-2.4s-0.8-1.4-1.4-2s-1.3-1.1-2-1.4S10.8,1.3,10,1.3S8.4,1.4,7.6,1.7
          s-1.4,0.8-2,1.4s-1.1,1.3-1.4,2S3.8,6.7,3.8,7.5c0,0.7,0.1,1.3,0.3,1.9s0.5,1.2,1.1,2.1c0.4,0.6,1.2,1.8,2.5,3.6
          C8.6,16.4,9.4,17.6,10,18.5z M10,3.8c1,0,1.9,0.4,2.7,1.1s1.1,1.6,1.1,2.7s-0.4,1.9-1.1,2.7S11,11.3,10,11.3s-1.9-0.4-2.7-1.1
          S6.3,8.5,6.3,7.5s0.4-1.9,1.1-2.7S9,3.8,10,3.8z M10,10c0.7,0,1.3-0.2,1.8-0.7s0.7-1.1,0.7-1.8s-0.2-1.3-0.7-1.8S10.7,5,10,5
          S8.7,5.2,8.2,5.7S7.5,6.8,7.5,7.5s0.2,1.3,0.7,1.8S9.3,10,10,10z"
        />
      </svg>
    );

    const svgFlag = (
      <svg x="0px" y="0px" viewBox="0 0 12 12" className="icon-flag">
        <path
          className="svg-white"
          d="M8.1,2.3c0.8,0,1.7-0.3,2.7-0.8c0.2-0.1,0.5-0.1,0.7,0s0.4,0.4,0.4,0.6v5.7c0,0.3-0.1,0.5-0.3,0.6
          c-0.9,0.6-1.9,1-2.9,1c-0.4,0-0.8,0-1.2-0.1c-0.2,0-0.6-0.1-1-0.3C6.2,8.9,5.9,8.9,5.7,8.8C5.4,8.7,5.1,8.7,4.8,8.7
          c-1,0-1.9,0.2-2.7,0.5v2.2c0,0.2-0.1,0.3-0.2,0.4S1.8,12,1.6,12H1.2c-0.2,0-0.3-0.1-0.4-0.2s-0.2-0.2-0.2-0.4v-9
          C0.5,2.3,0.3,2.1,0.2,1.9S0.1,1.5,0.1,1.3c0-0.4,0.1-0.7,0.4-0.9S1.1,0,1.5,0c0.3,0,0.6,0.1,0.9,0.4s0.4,0.5,0.4,0.8
          c0,0.2,0,0.4-0.1,0.6c0.5-0.2,1-0.3,1.6-0.3c0.4,0,0.8,0,1.2,0.1c0.2,0.1,0.6,0.2,1,0.3c0.4,0.1,0.7,0.2,0.8,0.3
          C7.6,2.3,7.8,2.3,8.1,2.3z"
        />
      </svg>
    );

    const categoryNames = [];
    const { name, start, end, allDay, location, categories, tags, important, url, ics } = this.props;
    const isImportant = important
      ? <div className="event-alert"><div className="icon icon-sm">{ svgFlag }</div>Important Date</div>
      : null;

    // Compare the category values and get the actual name instead from Category data
    const actualCategories = categories
      .map(cat1 => this.props.rootCategories.filter(rootCat => {
        return cat1 === rootCat.value;
      })[0])
      .map(names => categoryNames.push(Object.values(names)[1]));

    const footer = (
      <footer className="event-block-footer">
        <a className="event-block-link" href={url} target="_blank">More information</a>
      </footer>
    );

    const eventFooter = url ? footer : null;

    return (
      <div className="event-block">
        { isImportant }
        <header>
          <h2 className="event-title">{ name }</h2>
        </header>

        <div className="event-body col-3">
          <ul className="event-meta">
            <li className="event-item">
              <div className="icon">{ svgClock }</div>
              { allDay ? 'All Day' : `${formatDate(start, 'h:mma')} - ${formatDate(end, 'h:mma')}` }
            </li>

            <li className="event-item">
              <div className="icon">{ svgLandmark }</div>
              { location }
            </li>

            <li className="event-item event-item-categories">
              <div className="icon">{ svgCategory }</div>
              { categoryNames.join(', ') }
            </li>
          </ul>

          <EventTags type={'eventResults'} tags={tags} />

          <div className="event-actions">
            <a href={ics} target="_blank" className="btn btn-secondary">Add to calendar</a>
            {/* <Button label={'Add to calendar'} btnClass={'btn-secondary'} /> */}
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
  ics: null,
};

EventBlock.propTypes = {
  rootCategories: PropTypes.array.isRequired,
  name: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
  allDay: PropTypes.bool,
  location: PropTypes.string,
  categories: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  tags: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  important: PropTypes.bool,
  url: PropTypes.string,
  ics: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    rootCategories: state.reducer.categories,
  };
};

export default connect(mapStateToProps)(EventBlock);


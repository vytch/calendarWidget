import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import IntroCopy from 'core/Components/IntroCopy';
import Loader from 'core/Components/Loader';
import './style.scss';
import CalendarContainer from '../CalendarContainer';

/** This is the LandingPage component. */
class LandingPage extends React.Component {
  componentDidMount() {
    /*
      1. Call all events to assign to calendar
      2. Call event type info for Calendar legend
      3. Call in intro content
    */
  }

  render() {
    const { title, body } = this.props.introContent;
    const pageLanding = (
      <div className="col-2">
        <section>
          <IntroCopy
            title={title}
            content={body}
          />
        </section>

        <section>
          <CalendarContainer location={this.props.location.pathname} />
        </section>
      </div>
    );

    return (
      <div>
        { this.props.appLoading ? <Loader /> : pageLanding }
      </div>
    );
  }
}

LandingPage.defaultProps = {
};

LandingPage.propTypes = {
  location: PropTypes.object.isRequired,
  appLoading: PropTypes.bool.isRequired,
  introContent: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
  return {
    appLoading: state.reducer.appLoading,
    introContent: state.reducer.introContent,
  };
};

export default connect(mapStateToProps)(LandingPage);

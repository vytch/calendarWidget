import React from 'react';
import PropTypes from 'prop-types';
import IntroCopy from 'core/Components/IntroCopy';
import moment from 'moment';
import './style.scss';
// import DayView from '../DayView/DayView';
import CalendarContainer from '../CalendarContainer';

/** This is the LandingPage component. */
class LandingPage extends React.Component {
  render() {
    return (
      <div className="col-2">
        <section>
          <IntroCopy
            title={'Lorem ipsum dolor sit amet'}
            content={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius soluta nesciunt rem distinctio fuga, sequi vitae animi. Totam, quaerat sint consequatur ipsum placeat magnam, eius unde soluta eum, dicta officia.'}
          />
        </section>

        <section>
          <CalendarContainer />
        </section>
      </div>
    );
  }
}

LandingPage.defaultProps = {
};

LandingPage.propTypes = {
};

export default LandingPage;

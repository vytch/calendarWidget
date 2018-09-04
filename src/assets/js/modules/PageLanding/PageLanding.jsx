import React from 'react';
// import PropTypes from 'prop-types';
import IntroCopy from 'core/Components/IntroCopy';
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
    return (
      <div className="col-2">
        <section>
          <IntroCopy
            title={'Lorem ipsum dolor sit amet'}
            content={'<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius soluta nesciunt rem distinctio fuga, sequi vitae animi. Totam, quaerat sint consequatur ipsum placeat magnam, eius unde soluta eum, dicta officia.</p><p>Esse facilis optio recusandae hic incidunt aliquam, nisi odio. Blanditiis distinctio, tempore mollitia quaerat aliquam voluptas molestiae consequatur.</p>'}
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

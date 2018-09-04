import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import IconButton from 'core/Components/IconButton';

/** This is the SearchBackButton component. */
class SearchBackButton extends React.PureComponent {
  _handleRouteBack() {
    this.props.router.push('/');
  }

  render() {
    return (
      <IconButton classes="btn-back" onClick={() => this._handleRouteBack()}>
        <svg className="searchIcon" viewBox="0 0 16 16">
          <path
            className="svg-white"
            d="M15.9,14.7c0.1,0.1,0.1,0.1,0.1,0.3s0,0.2-0.1,0.3l-0.7,0.7C15.1,16,15,16,14.9,16s-0.2,0-0.3-0.1l-3.8-3.8
            c-0.1-0.1-0.1-0.2-0.1-0.3v-0.4c-0.6,0.5-1.2,0.9-2,1.2S7.3,13,6.5,13c-1.2,0-2.3-0.3-3.3-0.9s-1.8-1.4-2.4-2.4S0,7.7,0,6.5
            s0.3-2.3,0.9-3.3s1.4-1.8,2.4-2.4S5.3,0,6.5,0s2.3,0.3,3.3,0.9s1.8,1.4,2.4,2.4S13,5.3,13,6.5c0,0.8-0.1,1.6-0.4,2.3s-0.7,1.4-1.2,2
            h0.4c0.1,0,0.2,0,0.3,0.1L15.9,14.7z M6.5,11.5c0.9,0,1.7-0.2,2.5-0.7s1.4-1.1,1.8-1.8s0.7-1.6,0.7-2.5S11.3,4.8,10.8,4
            S9.8,2.6,9,2.2S7.4,1.5,6.5,1.5S4.8,1.7,4,2.2S2.6,3.2,2.2,4S1.5,5.6,1.5,6.5S1.7,8.2,2.2,9s1.1,1.4,1.8,1.8S5.6,11.5,6.5,11.5z"
          />
        </svg>
      </IconButton>
    );
  }
}

SearchBackButton.defaultProps = {
};

SearchBackButton.propTypes = {
  router: PropTypes.object.isRequired,
};

export default withRouter(SearchBackButton);


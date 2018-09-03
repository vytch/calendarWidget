import * as actionTypes from 'reducers/actionTypes';
import axios from 'axios';
// import qs from 'qs';

export const setSearchLoading = bool => {
  return {
    type: actionTypes.SEARCH_LOADING,
    bool,
  };
};

export const setSearchSuccess = events => {
  return {
    type: actionTypes.SEARCH_SUCCESS,
    events,
  };
};

export const setSearchError = err => {
  return {
    type: actionTypes.SEARCH_ERROR,
    err,
  };
};


export const getSearchResults = ({ keywords, school, category, range }) => {
  console.log(keywords, school, category, range);
  return dispatch => {
    dispatch(setSearchLoading, false);
    axios.get('http://localhost:3000/events')
      .then(res => {
        dispatch(setSearchLoading, true);
        console.log('[FROM ACTION]', res);
      })
      .catch(err => {
        dispatch(setSearchLoading, false);
        console.log(err);
      });
  };
};

// Ignore - for testing
// {
//   params: {
//     tags: ['JS', 'MS'],
//   },
// },
// {
//   paramsSerializer: params => {
//     return qs.stringify(params, { arrayFormat: 'brackets' });
//   },
// }

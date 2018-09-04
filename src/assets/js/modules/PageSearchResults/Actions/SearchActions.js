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
  // console.log(keywords, school, category, range);
  return dispatch => {
    dispatch(setSearchLoading(true));
    dispatch(setSearchError(null)); // reset the error if re-searched

    axios.get('http://localhost:3000/eventsasdas')
      .then(({data}) => {
        dispatch(setSearchSuccess(data));
        dispatch(setSearchLoading(false));
      })
      .catch(err => {
        dispatch(setSearchLoading(false));
        dispatch(setSearchError('Something went wrong, please try again.'));
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

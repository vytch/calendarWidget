import * as actionTypes from 'reducers/actionTypes';
import axios from 'axios';

export const toggleLoading = bool => {
  return {
    type: actionTypes.CATEGORY_LOADING,
    bool,
  };
};

export const setCategories = data => {
  return {
    type: actionTypes.SET_CATEGORIES,
    data,
  };
};

export const getCategories = () => {
  return dispatch => {
    dispatch(toggleLoading(true));
    axios.get('http://localhost:3000/categories')
      .then(({ data }) => {
        dispatch(setCategories(data));
        dispatch(toggleLoading(false));
      })
      .catch(err => {
        console.log(err.message);
        dispatch(toggleLoading(false));
      });
  };
};

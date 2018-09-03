import * as actionTypes from 'reducers/actionTypes';

const setIsSearching = () => {
  return {
    type: actionTypes.TOGGLE_SEARCHING,
  };
};

const updateMonthYear = val => {
  return {
    type: actionTypes.UPDATE_MONTHYEAR,
    val,
  };
};

export {
  setIsSearching,
  updateMonthYear,
};

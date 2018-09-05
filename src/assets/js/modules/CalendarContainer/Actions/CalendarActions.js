import * as actionTypes from 'reducers/actionTypes';

const updateMonthYear = val => {
  return {
    type: actionTypes.UPDATE_MONTHYEAR,
    val,
  };
};

export {
  updateMonthYear,
};

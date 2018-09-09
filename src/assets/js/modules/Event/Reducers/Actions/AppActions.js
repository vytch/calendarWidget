import * as actionTypes from 'reducers/actionTypes';
import axios from 'axios';

export const setAppLoading = bool => {
  return {
    type: actionTypes.SET_APPLOADING, bool,
  };
};

export const setAllData = data => {
  return {
    type: actionTypes.SET_ALLDATA,
    data,
  };
};

export const setLoadingFailed = data => {
  return {
    type: actionTypes.SET_APPFAILED,
    data,
  };
};

export const setCategories = data => {
  return {
    type: actionTypes.SET_CATEGORIES,
    data,
  };
};

// TODO: May need this

// export const setCategoryLoading = bool => {
//   return {
//     type: actionTypes.CATEGORY_LOADING, bool,
//   };
// };
// export const getCategories = () => {
//   return dispatch => {
//     dispatch(setCategoryLoading(true));
//     axios.get('http://localhost:3000/categories')
//       .then(({ data }) => {
//         dispatch(setCategories(data));
//         dispatch(setCategoryLoading(false));
//       })
//       .catch(err => {
//         dispatch(setCategoryLoading(false));
//       });
//     return Promise.resolve('Category testing');
//   };
// };


// TODO: GET ONE API REQUEST END POINT
export const getAllData = () => {
  return dispatch => {
    dispatch(setAppLoading(true));
    axios.all([
      axios.get('http://localhost:3000/content'),
      axios.get('http://localhost:3000/categories'),
      axios.get('http://localhost:3000/eventTypes'),
      axios.get('http://localhost:3000/events'),
      axios.get('http://localhost:3000/terms'),
      axios.get('http://localhost:3000/publicHolidays'),
    ]).then(axios.spread((content, categories, eventTypes, events, terms, publicHolidays) => {
      const data = {
        introContent: content.data[0],
        categories: categories.data,
        eventTypes: eventTypes.data,
        events: events.data,
        terms: terms.data,
        publicHolidays: publicHolidays.data,
      };
      dispatch(setAllData(data));
      dispatch(setAppLoading(false));
    }))
      .catch(err => {
        console.log(err);
        dispatch(setLoadingFailed(err));
      });
  };
};

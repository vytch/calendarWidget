import * as actionTypes from 'reducers/actionTypes';
import axios from 'axios';

export const setAppLoading = bool => {
  return {
    type: actionTypes.SET_APPLOADING, bool,
  };
};

export const setCategoryLoading = bool => {
  return {
    type: actionTypes.CATEGORY_LOADING, bool,
  };
};

export const setIntroContent = data => {
  return {
    type: actionTypes.SET_INTRO, data,
  };
};

export const setAllData = data => {
  console.log('[SETALL]', data);
  return {
    type: actionTypes.SET_ALLDATA,
    data,
  };
};

export const setCategories = data => {
  return {
    type: actionTypes.SET_CATEGORIES,
    data,
  };
};

// export const getIntroContent = () => {
//   return dispatch => {
//     axios.get('http://localhost:3000/content')
//       .then(({ data }) => {

//         console.log('[INTRO]', data);
//       });
//     return Promise.resolve('Content testing');
//   };
// };

// export const getCategories = () => {
//   return dispatch => {
//     dispatch(toggleLoading(true));
//     axios.get('http://localhost:3000/categories')
//       .then(({ data }) => {
//         dispatch(setCategories(data));
//         dispatch(toggleLoading(false));
//       })
//       .catch(err => {
//         dispatch(toggleLoading(false));
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
      console.log(content.data[0]);
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
    }));
  };
};

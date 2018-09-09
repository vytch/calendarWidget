import * as actionTypes from './actionTypes';
import theState from './state';

const updateReducer = (oldState, newState) => {
  return {
    ...oldState,
    ...newState,
  };
};

export default function storeReducer(state = theState, action) {
  switch (action.type) {
  case actionTypes.SET_INTRO: return updateReducer({...state}, {
    introContent: updateReducer({...state.introContent}, {
      title: action.data.title,
      body: action.data.body,
    }),
  });
    break;

  case actionTypes.SET_APPLOADING: return updateReducer({...state}, { appLoading: action.bool });
    break;

  case actionTypes.SET_ALLDATA:
    return updateReducer({...state}, {
      introContent: updateReducer({...state.introContent}, {
        title: action.data.introContent.title,
        body: action.data.introContent.body,
      }),
      categories: action.data.categories,
      eventTypes: action.data.eventTypes,
      events: action.data.events,
      terms: action.data.terms,
      publicHolidays: action.data.publicHolidays,
    });
    break;

  case actionTypes.SET_APPFAILED: return updateReducer({...state}, { globalError: action.data.message });
    break;

  // Landing page calendar toggles
  //================================================================
  case actionTypes.TOGGLE_SEARCHING: return updateReducer({...state}, { isSearching: !state.isSearching });
    break;

  case actionTypes.UPDATE_MONTHYEAR: return updateReducer({...state}, { selectedDate: action.val });
    break;

  // Get Categories
  //================================================================
  case actionTypes.SET_CATEGORIES: return updateReducer({...state}, { categories: action.data});
    break;

  case actionTypes.CATEGORY_LOADING: return updateReducer({...state}, { categoryLoading: action.bool });
    break;

  // Search Reducers
  //================================================================
  case actionTypes.SEARCH_LOADING: return updateReducer({...state}, {
    search: updateReducer({...state.search}, { loading: action.bool }),
  });
    break;

  case actionTypes.SEARCH_SUCCESS: return updateReducer({...state}, {
    search: updateReducer({ ...state.search }, { searchResults: action.events }),
  });
    break;

  case actionTypes.SEARCH_ERROR: return updateReducer({...state}, {
    search: updateReducer({ ...state.search }, { error: action.err }),
  });
    break;

  default:
    return state;
    break;
  }
}

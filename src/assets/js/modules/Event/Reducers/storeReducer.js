import * as actionTypes from './actionTypes';
import theState from './state';

const updateReducer = (oldState, newState) => {
  console.group('Reducer');
  console.log(oldState, newState);
  console.groupEnd();
  return {
    ...oldState,
    ...newState,
  };
};

export default function storeReducer(state = theState, action) {
  switch (action.type) {
  case actionTypes.TOGGLE_SEARCHING: return updateReducer({...state}, { isSearching: !state.isSearching });
    break;

  case actionTypes.UPDATE_MONTHYEAR: return updateReducer({...state}, { selectedDate: action.val });
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

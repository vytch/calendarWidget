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
  case actionTypes.TOGGLE_SEARCHING: return updateReducer({ ...state }, { isSearching: !state.isSearching });
    break;

  case actionTypes.UPDATE_MONTHYEAR: return updateReducer({...state}, { selectedDate: action.val });
    break;

  // Search Reducers
  case actionTypes.SEARCH_LOADING: return updateReducer({...state}, {
    search: updateReducer(...state.search, { loading: action.bool }),
  });
    break;

  default:
    return state;
    break;
  }
}

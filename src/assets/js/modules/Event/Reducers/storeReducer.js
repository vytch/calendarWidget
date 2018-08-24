export default function storeReducer(state = { testing: ''}, action) {
  switch (action.type) {
  case 'UPDATE_TESTING':
    return {
      ...state,
      testing: action.data,
    };
    break;

  case 'TOGGLE_SEARCHING':
    return {
      ...state,
      isSearching: !state.isSearching,
    };
    break;

  default:
    return state;
    break;
  }
}

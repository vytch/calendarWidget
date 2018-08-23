export default function storeReducer(state = { testing: ''}, action) {
  switch (action.type) {
  case 'UPDATE_TESTING':
    return Object.assign({}, state, {
      testing: action.data,
    });
    break;

  default:
    return state;
    break;
  }
}

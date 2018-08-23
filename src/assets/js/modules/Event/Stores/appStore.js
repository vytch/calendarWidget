import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '../Reducers';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant(), thunk),
  );
}

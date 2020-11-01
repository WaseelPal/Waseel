import { combineReducers } from 'redux';
import { uiReducer } from '../modules/ui';
import { userReducer } from '../modules/user';

export const makeRootReducerFactory = ({
  combineReducers,
  ...reducers
}) => (asyncReducers) => combineReducers({
  // Add sync reducers here
  ...reducers,
  ...asyncReducers
});

export const makeRootReducer = makeRootReducerFactory({
  combineReducers,
  ui: uiReducer,
  user: userReducer,
});

export default makeRootReducer;
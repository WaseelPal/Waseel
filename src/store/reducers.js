import { combineReducers } from 'redux';
import { uiReducer } from '../modules/ui';

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
  ui: uiReducer
});

export default makeRootReducer;
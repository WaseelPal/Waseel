import {
  USER_LOGIN_REQUEST_POST,
  USER_LOGIN_REQUEST_POST_SUCCESS,
  USER_LOGIN_REQUEST_POST_FAILURE,
} from './user-action-types';

// ------------------------------------
// Initial State
// ------------------------------------
export const initialState = {
  isLoading: false,
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = () => ({
  [USER_LOGIN_REQUEST_POST]: (state) => ({
    ...state,
    isLoading: true
  }),
  [USER_LOGIN_REQUEST_POST_SUCCESS]: (state) => ({
    ...state,
    isLoading: false
  }),
  [USER_LOGIN_REQUEST_POST_FAILURE]: (state) => ({
    ...state,
    isLoading: false
  }),
});
// ------------------------------------
// Reducer
// ------------------------------------
export const userReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS()[action.type];
  return handler ? handler(state, action) : state;
};
export default userReducer;
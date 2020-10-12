
// ------------------------------------
// Initial State
// ------------------------------------
export const initialState = {};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = () => ({});
// ------------------------------------
// Reducer
// ------------------------------------
export const uiReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS()[action.type];
  return handler ? handler(state, action) : state;
};
export default uiReducer;
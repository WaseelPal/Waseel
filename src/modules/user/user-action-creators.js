import { daoLoginPost } from '../../dao/authentication-dao';
import {
  USER_LOGIN_REQUEST_POST,
  USER_LOGIN_REQUEST_POST_SUCCESS,
  USER_LOGIN_REQUEST_POST_FAILURE,
} from './user-action-types';

// ------------------------------------
// Actions
// ------------------------------------

export const userLoginRequestPostSuccess = (payload = {}) => ({
  type: USER_LOGIN_REQUEST_POST_SUCCESS,
  payload
});

export const userLoginRequestPostFailure = (payload = {}) => ({
  type: USER_LOGIN_REQUEST_POST_FAILURE,
  payload
});

export const userLoginRequestPost = (payload) => async (dispatch) => {
  dispatch({
    type: USER_LOGIN_REQUEST_POST
  });

  try {
    const { data } = await daoLoginPost(payload);
    return dispatch(userLoginRequestPostSuccess(data));
  } catch(error) {
    return dispatch(userLoginRequestPostFailure(error));
  }
};

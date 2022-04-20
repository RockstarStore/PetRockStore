import * as types from '../constants/actionTypes';
export const setUser = (userID: any) => ({
  type: types.SET_USER,
  payload: { userID },
});

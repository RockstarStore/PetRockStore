/**
 * ************************************
 *
 * @module  shopReducer
 * @author
 * @date
 * @description reducer for shop data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
  userID: null,
};

const shopReducer = (state = initialState, action: any) => {
  const newState = { ...state };
  switch (action.type) {
    case types.SET_USER: {
      newState.userID = action.payload.userID;
      return newState;
    }

    default: {
      return state;
    }
  }
};

export default shopReducer;

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

const initialState = {};

const shopReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.EXAMPLE: {
    }

    default: {
      return state;
    }
  }
};

export default shopReducer;

/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';

// import all reducers here
import shopReducer from './shopReducer';

// combine reducers
const reducers = combineReducers({
  shop: shopReducer,
});

// make the combined reducers available for import
export default reducers;

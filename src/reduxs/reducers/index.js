/**
 * @component index.js
 * @description 根reducer
 * @time 2018/5/17
 * @author JUSTIN XU
 */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '../../utils/history';

const req = require.context('./', false, /\.js$/);
const context = req.keys().filter(item => item !== './initialState.js');

export default combineReducers({
  router: connectRouter(history),
  ...context.reduce((prevValue, currValue) => Object.assign(prevValue, req(currValue)), {}),
});

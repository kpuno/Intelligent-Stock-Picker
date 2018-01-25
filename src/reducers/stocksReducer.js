import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function(state = initialState.stocks, action){
  switch (action.type) {
    case types.GET_STOCKS:
      return [...action.data];
    default:
      return state;
  }
}

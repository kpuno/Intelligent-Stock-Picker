import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function(state = initialState.companies, action){
  switch (action.type) {
    case types.GET_COMPANIES:
      return [...action.data];
    default:
      return state;
  }
}

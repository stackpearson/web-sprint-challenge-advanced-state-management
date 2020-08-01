import {
    FETCHING_SMURFS_START,
    FETCHING_SMURFS_SUCCESS,
    FETCHING_SMURFS_ERROR
  } from '../actions/smurfActions';
  
  const initialState = {
    smurfs: [],
    isFetching: false,
    error: ""
  };
  
  export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_SMURFS_START:
        return {
          ...state,
          isFetching: true
        };
      case FETCHING_SMURFS_SUCCESS:
        return {
          ...state,
          isFetching: false,
          smurfs: action.payload,
          error: ""
        };
      case FETCHING_SMURFS_ERROR:
        return {
          ...state,
          isFetching: false,
          error: action.payload
        };
      default:
        return state;
    }
  };
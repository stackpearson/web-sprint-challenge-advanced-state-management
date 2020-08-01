import {
    FETCHING_SMURFS_START,
    FETCHING_SMURFS_SUCCESS,
    FETCHING_SMURFS_ERROR,
    POST_DATA,
    POST_SUCCESS,
    POST_FAIL
  } from '../actions/smurfActions';
  
  const initialState = {
    smurfs: [],
    isFetching: false,
    isPosting: false,
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
      case POST_DATA:
        return {
          ...state,
          isPosting: true,
          smurfs: [...state.smurfs]
        }
      case POST_SUCCESS:
        return {
          ...state,
          isPosting: false,
          smurfs: action.payload
        }
      case POST_FAIL: 
        return {
          ...state,
          isPosting: false,
          error: action.payload
        }
      default:
        return state;
    }
  };
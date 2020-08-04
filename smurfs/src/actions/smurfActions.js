import axios from 'axios';

export const FETCHING_SMURFS_START = 'FETCHING_SMURFS_START';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_ERROR = 'FETCHING_SMURFS_ERROR';

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCHING_SMURFS_START });

    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log('smurf api call', res);
            dispatch({
              type: FETCHING_SMURFS_SUCCESS,
              payload: res.data
            });
          })
          .catch(err => {
            console.error('error in smurf call', err.message);
            dispatch({ type: FETCHING_SMURFS_ERROR, payload: err.message });
          });
}

  export const POST_DATA = 'POST_DATA';
  export const POST_SUCCESS = 'POST SUCCESS';
  export const POST_FAIL = 'POST_FAIL';

  export const postSmurfs = (smurfs) => (dispatch) => {
      dispatch({type: POST_DATA})
      
      axios
        .post('http://localhost:3333/smurfs', smurfs)
        .then (res => {
          console.log('Post succeeded', res.data);
          dispatch({type: POST_SUCCESS, payload: res.data})
        })
        .catch(err => {
          console.log('post failed', err);
          dispatch({type: POST_FAIL, payload: err})
        })
  }
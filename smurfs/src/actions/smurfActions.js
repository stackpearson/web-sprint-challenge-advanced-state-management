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
              payload: res
            });
          })
          .catch(err => {
            console.error('error in smurf call', err.message);
            dispatch({ type: FETCHING_SMURFS_ERROR, payload: err.message });
          });
}
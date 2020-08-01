import React from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../actions/smurfActions';

const SmurfList = props => {
    // if (props.isFetching) {
    //     return <div>**Just a moment while we invite smurfs to the party**</div>
    // }

    return (
        <>
        <div>Test</div>
        <div>test2</div>
        </>
    )

    
}

const mapStateToProps = state => {
    return {
      isFetching: state.isFetching,
      cities: state.cities,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { fetchSmurfs }
  )(SmurfList);
import React from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../actions/smurfActions';
// import AddSmurf from './AddSmurf';


const SmurfList = props => {
    if (props.isFetching) {
        return <div>**Just a moment while we invite smurfs to the party**</div>
    }

    return (
        <>
        <button onClick={ () => props.fetchSmurfs()}>Show Smurfs</button>
            
            {props.smurfs.map(smurf => {
                    return (
                        <div className='smurf-container' key={smurf.id}>
                            <div>Name: {smurf.name}</div>
                            <div>Age: {smurf.age}</div>
                            <div>Height: {smurf.height}</div>
                        </div>
                    );
                    })}
                {/* <AddSmurf /> */}
        </>
    )

    
}

const mapStateToProps = state => {
    return {
      isFetching: state.isFetching,
      smurfs: state.smurfs,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { fetchSmurfs }
  )(SmurfList);
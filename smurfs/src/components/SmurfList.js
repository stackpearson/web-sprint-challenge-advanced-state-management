import React from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../actions/smurfActions';

const SmurfList = props => {
    // if (props.isFetching) {
    //     return <div>**Just a moment while we invite smurfs to the party**</div>
    // }

    return (
        <>
        <button onClick={ () => props.fetchSmurfs()}>Show Smurfs</button>

            {/* {props.smurfs.map(smurf => {
                return (
                    <div>
                        {smurf.name}<br/>
                        {smurf.age}<br/>
                        {smurf.height}
                    </div>
                )
             
            })} */}

            
            {props.smurfs.map(smurf => {
                    return (
                        <div key={smurf.id}>
                            {smurf.name}<br/>
                            {smurf.age}<br/>
                            {smurf.height}
                        </div>
                    );
                    })}
            

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
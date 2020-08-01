import React, {useState} from 'react';
import { connect } from 'react-redux';
import {postSmurfs} from '../actions/smurfActions';

const AddSmurf = props => {

    const [smurf, setSmurf] = useState({
        name: '',
        age: '',
        height: ''
    })

    const changeHandler = e => {
        setSmurf({...smurf, [e.target.name]: e.target.value})
    };

    const submitChanges = e => {
        e.preventDefault();
        props.postSmurfs(smurf)
    }

    return (
        <>
   
<div className='form-container'>

    <h2>Help Us Collect Smurf Info!</h2>  

    <form className='smurf-form' onSubmit={submitChanges}>
        <label htmlFor='Name'>
            Name:
            <input value={props.name} name='name' type='text' placeholder='enter new smurf name' onChange={changeHandler} />
        </label>
        <label htmlFor='Age'>
            Age: &nbsp; &nbsp; 
            <input value={props.age} name='age' id='age' type='text' placeholder='enter new smurf age' onChange={changeHandler} />
        </label>
        <label htmlFor='Height'>
            Height:
            <input value={props.height} name='height' id='height' type='text' placeholder='enter new smurf height' onChange={changeHandler} />
        </label>  
        <button className='submit-button' type='submit'>Add Smurf</button>                      
    </form>

</div>


</>
 )

}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isPosting: state.isPosting,
        error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    {postSmurfs}
  )(AddSmurf);
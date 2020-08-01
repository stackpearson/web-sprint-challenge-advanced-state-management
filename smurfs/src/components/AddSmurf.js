import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as yup from 'yup';

function AddSmurf() {
    const [post, setPost] = useState([])

    const [formState, setFormState] = useState({
        name: '',
        age: '',
        height: ''
    })

    const [errors, setErrors]  = useState({
        name: '',
        age: '',
        height: ''
    })

    // useEffect (() => {
    //     formSchema.isValid(formState)
    // }, [formState])

    // const formSchema = yup.object().shape({
    //     name: yup.string().required('Please enter a name'),
    //     age: yup.string().required('Please enter an age'),
    //     height: yup.string().required('Please enter a height')
    // })

    const submitForm = event => {
        event.preventDefault();

        axios
            .post('http://localhost:3333/smurfs', formState)
            .then(res => {
                console.log('post response', res)
                console.log(formState)
                setPost(res.data)

                setFormState ({
                    name: '',
                    age: '',
                    height: ''
                })
            })
            .catch (error => console.log('failure to post'))
    };

    // const validateChange = event => {
    //     yup.reach(formSchema, event.target.name).validate(event.target.value).then(inputIsValid => {
    //         setErrors({
    //            ...errors,
    //            [event.target.name]: ''
    //         })
    //     })  .catch(error => {
    //         setErrors({
    //             ...errors,
    //             [event.target.name]: error.errors[0]
    //         })
    //     })
    // }

    const inputChange = event => {
        event.persist();
        console.log('input change', event.target.value)
        const newFormData = {
            ...formState,
            [event.target.name] : event.target.value
        }

        setFormState(newFormData);
    };

    return (
        <>
   

                
    <form onSubmit={submitForm}>
    <label htmlFor='Name'>
        Name:
        <input value={formState.name} name='name' type='text' placeholder='enter new smurf name' onChange={inputChange} />
        {/* {errors.name.length > 0 ? <p className='error'>{errors.name}</p> : null} */}
    </label>
    <label htmlFor='Age'>
        Age:
        <input value={formState.age} name='age' id='age' type='text' placeholder='enter new smurf age' onChange={inputChange} />
        {/* {errors.age.length > 0 ? <p className='error'>{errors.age}</p> : null} */}
    </label>
    <label htmlFor='Height'>
        Height:
        <input value={formState.height} name='height' id='height' type='text' placeholder='enter new smurf height' onChange={inputChange} />
        {/* {errors.height.length > 0 ? <p className='error'>{errors.height}</p> : null} */}
    </label>  
    <button type='submit'>Add Smurf</button>                      
</form>

</>
 )

}

export default AddSmurf;
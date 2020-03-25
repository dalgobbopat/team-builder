import React from 'react';

export default function Form(props){
    return(
    <div className='form'>
    <form onSubmit={props.onFormSubmit}>
    <label> 
       <input
         onChange={props.onInputChange}
         value={props.formValues.fname}
         name='fname'
         placeholder='First Name'
       />
    </label><br/>
 
    <label> 
       <input
         onChange={props.onInputChange}
         value={props.formValues.lname}
         name='lname'
         placeholder='Last Name'
       />
    </label><br/>
 
    <label> 
       <input
         onChange={props.onInputChange}
         value={props.formValues.email}
         name='email'
         placeholder='Email'
       />
    </label><br/>
 
    <label> 
       <input
         onChange={props.onInputChange}
         value={props.formValues.role}
         name='role'
         placeholder='Job'
       />
    </label><br/>
 
    <input type='submit' />
  </form>
  </div>
    )
}
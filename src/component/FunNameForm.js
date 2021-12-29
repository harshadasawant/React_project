import React, { useState, useEffect } from "react";

export function FunNameForm(props) {
  
  const initialValue ={username:"",passwprd:""};
  const[formValues, setFormValues] = useState(initialValue);
  const[formError, setFormError] = useState({});
//   const[isSubmit, setIsSubmit] = useState(false);
 
  
  const handleSubmit = (evt) => {
      evt.preventDefault();
     
      setFormError(validate(formValues));
    //   setIsSubmit(true);
  }
  const validate = (values) =>{
      const errors = {};
      if(!values.username){
          errors.username="UserName is required";
      }
      if(!values.password){
        errors.password="Password is required";
    }
    else if(values.password.length < 4 ){
        errors.password="password length should not less than 4";
    }
  }

//   useEffect(() => {
//     console.log(formError);
//     if(Object.keys(formError).length == 0){
//         console.log(formValues);
//     }
//   }, [formError]);

  const handleChange = (e)=>{
    //   console.log(e.target);
      const {name, value} = e.target;
      setFormValues({...formValues,[name]:value});
      console.log(formValues);
  }

  return (
    <form onSubmit={handleSubmit}>
     
      <label>
            Name:
            <input type="text" name="username" placeholder='username' 
            value={formValues.name} onChange={handleChange} />
          </label>
          {/* <p>{formError.username}</p> */}
          <label>
          <input type="password" name="password" placeholder='password' 
          value={formValues.name} onChange={handleChange} />
        </label>
        {/* <p>{formError.password}</p> */}
      <input type="submit" value="Submit" />
    </form>
  );
} 
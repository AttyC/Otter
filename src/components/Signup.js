
import React, { useState } from 'react';
import useSignUpForm from '../hooks/CustomHooks';

const Signup = () => {

  const [submitted, setSubmitted] = useState(false);

  const SignupResponse = () => {
    setSubmitted(true);
  }

  const {inputs, handleInputChange, handleSubmit} = useSignUpForm(SignupResponse);
  if (!submitted) {
    return (
      <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input 
          type="text" 
          name="firstName" 
          onChange={handleInputChange} 
          value={inputs.name} 
          required />
      </div>
      <div>
        <label>Email Address</label>
        <input 
        type="email" 
        name="email" 
        onChange={handleInputChange} 
        value={inputs.email} 
        required />
      </div>
      <div>
        <label>Confirm Email</label>
        <input 
        type="email" 
        name="confirmEmail" 
        onChange={handleInputChange} 
        value={inputs.confirmEmail} 
        required/>
      </div>
      <button type="submit">Sign Up</button>
    </form>
      )
    } else {
      return (
        <h1>Thanks for joining us! We'll be in touch soon.</h1>
      )
    }
  }

export default Signup;


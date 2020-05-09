import React, { useState } from 'react';
import axios from 'axios';
import useForm from "./useForm";
import validate from './LoginFormValidationRules';

const Signup = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit
  } = useForm(login, validate);

  const [submitted, setSubmitted] = useState(false);

  function login() {
     //send data to API
     axios.post('http://localhost:3000/contacts', {
      name: values.name,
      email: values.email
    })

    .then(response => {
      setSubmitted(true);
      console.log(response.status, 'Subscriber added: request status');
      })
    .catch(err => {
      console.log(err, 'Subscriber not added');
    });
  }

  return (
    <div className="section is-fullheight">
      <div className="container">
        <div className="column is-4 is-offset-4">
          <div className="box">
          {!submitted && (
            <form onSubmit={handleSubmit} noValidate>
            <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input autoComplete="off" className={`input ${errors.name && 'is-danger'}`} type="text" name="name" onChange={handleChange} value={values.name || ''} required />
                  {errors.name && (
                    <p className="help is-danger">{errors.name}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                  <input autoComplete="off" className={`input ${errors.email && 'is-danger'}`} type="email" name="email" onChange={handleChange} value={values.email || ''} required />
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Confirm Email Address</label>
                <div className="control">
                  <input className={`input ${errors.confirmEmail && 'is-danger'}`} type="email" name="confirmEmail" onChange={handleChange} value={values.confirmEmail || ''} required />
                </div>
                {errors.confirmEmail && (
                  <p className="help is-danger">{errors.confirmEmail}</p>
                )}
              </div>
              <button type="submit" className="button is-block is-info is-fullwidth">Sign me up!</button>
            </form> 
             )}
          { submitted && (
            <h1>Thanks for joining us! We'll be in touch soon.</h1>
            )
           }
          </div>
        </div>
      </div>
    </div>
  )
};

export default Signup;


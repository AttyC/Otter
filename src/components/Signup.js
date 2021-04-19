import React, { useState } from 'react';
import axios from 'axios';
import useForm from "./useForm";
import validate from './LoginFormValidationRules';
import styled from 'styled-components'
import { media } from '../style/media';

import Button from './Button'
import otter from '../img/happy_otter_transparent.png'
  ;

const Form = styled.form`
  input {
    height: 2em;
    border-radius: 25px;
    width: 80%;
    font-size: 1.2em;
    padding: 0 0.5em;
  }
`

const ThankYouMessage = styled.h1`
  display: flex;
  flex-direction: column;
  ${media.medium`
    flex-direction: row;
  `};
`

const Signup = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit
  } = useForm(login, validate);

  const [submitted, setSubmitted] = useState(false);
  const [dummmySubmit, setDummySubmit] = useState(true) // this is for when the API is not available

  function login() {
    !dummmySubmit ?
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
        })

      : setSubmitted(true)
  }

  return (
    <div>
      {!submitted && (
        <Form onSubmit={handleSubmit} noValidate>
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
          <Button
            type="submit"
            className="button is-block is-info is-fullwidth"
            text="Sign me up!"></Button>
        </Form>
      )}
      { submitted && (
        <ThankYouMessage>Thanks for joining us! We'll be in touch soon.
          <img src={otter} alt="printed otter in sea" width="200" /></ThankYouMessage>
      )
      }
    </div>
  )
};

export default Signup;


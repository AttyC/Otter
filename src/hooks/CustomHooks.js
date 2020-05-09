import React, { useState } from 'react';
import axios from 'axios';

const useSignUpForm = (callback) => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (event) => {

    if (event) {
      event.preventDefault();
      axios.post('http://localhost:3000/contacts', {
          name: inputs.name,
          email: inputs.email
        })

      .then(response => {
          console.log(response.status, 'Subscriber added: request status');
        })
      .catch(err => {
        console.log(err, 'Subscriber not added');
      });
    }
   callback();
  }

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value})
    );
  }
  return {
    handleSubmit, 
    handleInputChange, 
    inputs
  };
}

export default useSignUpForm;

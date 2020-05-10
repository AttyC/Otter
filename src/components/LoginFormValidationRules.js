export default function validate(values) {
  let errors = {};
  if (!values.name) {
    errors.name = 'Please enter your name';
  }
  if (values.name && values.name.length < 3) {
    errors.name = 'Name must be 3 or more characters';
  }
  if (!values.email) {
    errors.email = 'Please enter your email address';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (values.confirmEmail && values.email) {
    if (values.confirmEmail !== values.email) {
      errors.confirmEmail = 'Email addresses must match';
    } else if (!/\S+@\S+\.\S+/.test(values.confirmEmail)) {
      errors.confirmEmail = 'Email address is invalid';
    }

  } else if (!values.confirmEmail) {
    errors.confirmEmail = 'Please enter your email address';
  }


  return errors;
};
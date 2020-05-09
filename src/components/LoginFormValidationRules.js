export default function validate(values) {
  let errors = {};
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

  if (values.confirmEmail !== values.email) {
    errors.confirmEmail = 'Email addresses must match';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.confirmEmail = 'Email address is invalid';
  }
  if (values.name && values.name.length < 3) {
    errors.name = 'Name must be 3 or more characters';
  }
  return errors;
};
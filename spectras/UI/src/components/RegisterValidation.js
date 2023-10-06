function Validation(values) {
  let error = {};
  const email_pattern = /\S+@\S+\.\S+/;

  if (values.firstname === "") {
    error.firstname = "Name should not be empty";
  } else {
    error.firstname = "";
  }

  if (values.lastname === "") {
    error.lastname = "Name should not be empty";
  } else {
    error.lastname = "";
  }

  if (values.email === "") {
    error.email = "Name should not be empty";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Email didn't match";
  } else {
    error.email = "";
  }

  if (values.password === "") {
    error.password = "Password should not be empty";
  } else {
    error.password = "";
  }
  return error;
}

export default Validation;
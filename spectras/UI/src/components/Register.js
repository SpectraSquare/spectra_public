import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./RegisterValidation";
import axios from 'axios'
const Register = () => {

  const [values, setValues] = useState({
    firstname:"",
    lastname:"",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.email !== "" && errors.password !== "") {
      axios
        .post("http://localhost:8081/register", values)
        .then((res) => {
            navigate("/");       
        })
        .catch((err) => console.log(err));
    }
}
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div
        className="w-1/2 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/3127880/pexels-photo-3127880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      ></div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-md p-6 bg-white  shadow border-rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 font-serif">
            Spectra Square
          </h2>
          <form onSubmit={handleSubmit}>
              <div className="flex gap-4">
                <input
                  type="text"
                  className="w-50 mb-3 p-2 rounder border-b-2"
                  placeholder="Firstname"
                  name="firstname"
                  onChange={handleInput}
                />
                {errors.firstname && (
                  <span className="text-danger">{errors.firstname}</span>
                )}
                <input
                  type="text"
                  className="w-50 mb-3 p-2 rounder border-b-2"
                  placeholder="Lastname"
                  name="lastname"
                  onChange={handleInput}
                />
                {errors.lastname && (
                  <span className="text-danger">{errors.lastname}</span>
                )}
              </div>
              <input
                type="email"
                className="w-full mb-3 p-2 rounder border-b-2"
                placeholder="Your Email"
                name="email"
                onChange={handleInput}
              />
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
              <input
                type="password"
                className="w-full mb-3 p-2 rounder border-b-2"
                placeholder="Password"
                name="password"
                onChange={handleInput}
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
              <button type="submit" className="rounded bg-blue-500 w-20 text-white font-bold ml-40">
                Register
              </button>
              <Link
                to="/"
                className="hover:text-blue-500 cursor-pointer flex justify-end"
              >
                Already a user?
              </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

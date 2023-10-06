import React, { useState } from 'react'
import loginimg from '../assets/login.jpg'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';

export default function Login() {

  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate();
  const [errors, setErrors] = useState({})
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (
      errors.email !== "" &&
      errors.password !== ""
    ) {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          if (res.data === "Login successful") {
            navigate("/home");
          } else {
            alert("no record existed");
          }
        })
        .catch((err) => console.log(err));
    }
}
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginimg} alt="" />
      </div>
      <div className="bg-gray-200 flex flex-col justify-center">
        <form
          className="max-w-[400px] w-full mx-auto bg-white p-4"
          onSubmit={handleSubmit}
        >
          <h2 className="text-4xl font-serif text-center font-bold py-6">
            Spectra Square
          </h2>
          <div className="flex flex-col py-2">
            <label>Your email</label>
            <input
              className="border-b-2 border-slate-500 p-2"
              type="email"
              name="email"
              onChange={handleInput}
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="flex flex-col py-2">
            <label>Password</label>
            <input
              className="border-b-2 border-slate-500 p-2"
              type="password"
              name="password"
              onChange={handleInput}
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <button
            className="border w-full my-5 py-2 bg-slate-600 hover:bg-slate-800 text-white rounded"
            type="submit"
          >
            Log in
          </button>
          <div className="flex justify-between font-thin">
            <p className="flex items-center ">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </p>
            <Link
              to="/register"
              className="border w-100 bg-slate-500 text-white rounded w-40 hover:bg-slate-800 flex justify-center"
            >
              Create Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

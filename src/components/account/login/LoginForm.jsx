import React, { useState, useContext } from "react";
import styles from "../account.module.css";
import { Link } from "react-router-dom";
import Loader from "../../loader/Loader";
import { useForm } from "../../../hooks/useForm";
import { useAuthentication } from "../../../hooks/useAuth";
import { validateLogin } from '../../../utils/validation/loginValidation';



export default function LoginForm() {
  const { handleLogin, loading, authErrors} = useAuthentication();
  const initialValues = { email: '', password: '' };

  const { values, changeHandler, submitHandler, errors, setErrors } = useForm(initialValues,
    async (values) => {
      try {
      await handleLogin(values);
    } catch {
      setErrors({ submit: {authErrors} });
    }
  },
  (values) => validateLogin(values.email, values.password)
)


  return (
    <div className={`${styles.container__account} container__account`}>
       {loading && <Loader />}
      <div className="p-8 space-y-6 max-w-2xl m-auto pb-20">
        <h2 className="antialiased m-0 p-0 font-display text-5xl md:text-6xl text-mainGreen text-center font-bold">
          Login
        </h2>
        <form onSubmit={submitHandler} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={changeHandler}
              className="block w-full px-3 py-3 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {errors && <p className="text-red-500 text-sm">{errors.email}</p>}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={changeHandler}
              className="block w-full px-3 py-3 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          {errors && <p className="text-red-500 text-sm">{errors.password}</p>}
          <div className="flex items-center justify-between">
          </div>
          <button
            type="submit"
            className="flex rounded-full justify-center w-full px-4 py-3 text-sm font-medium text-white bg-mainGreen border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
          Log In
          </button>
          <span className="error">{errors.submit}</span>
        </form>

        <div className="flex flex-col text-center text-mainGreen text-lg">
          <p className="mb-4 text-base-sm-d">Need an account?</p>

          <Link
            to="/register"
            type="button"
            className="border-solid border-mainGreen rounded-full border-2 font-bold text-lg text-center text-mainGreen pt-2 pb-2 transition ease-in-out delay-150 hover:bg-mainGreen hover:text-white duration-300"
          >
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
}

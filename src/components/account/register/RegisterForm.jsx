import React, { useState } from "react";
import styles from "../account.module.css";
import { Link } from "react-router-dom";
import { useForm } from "../../../hooks/useForm";
import Loader from "../../loader/Loader";
import { useAuthentication } from "../../../hooks/useAuth";
import { validateRegister } from "../../../utils/validation/registerValidation";

export default function RegisterForm() {
  const { handleRegister, loading } = useAuthentication();

  const initialValues = {
    email: "",
    password: "",
    firstName: "",
    surname: "",
    phoneNumber: "",
  };

  const { values, changeHandler, submitHandler, errors, setErrors } = useForm(
    initialValues,
    async (values) => {
      try {
        await handleRegister(values);
      } catch (error) {
        setErrors({ submit: 'Registration failed. Please try again.' });
      }
    },
    (values) => validateRegister(values.email, values.password, values.phoneNumber)
  );


  return (
    <div className={`${styles.container__account} container__account`}>
      {loading && <Loader />}
      <div className="p-8 space-y-6 max-w-2xl m-auto pb-20">
        <h2 className="antialiased m-0 p-0 font-black font-display text-5xl md:text-6xl text-mainGreen text-center">
          Create an account
        </h2>
        <form className="space-y-6" onSubmit={submitHandler} noValidate>
          <div className="flex flex-col md:flex-row md:space-x-6">
            <div className="w-full md:w-1/2">
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={values.firstName}
                onChange={changeHandler}
                required
                className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="w-full md:w-1/2 mt-4 md:mt-0">
              <label
                htmlFor="surname"
                className="block text-sm font-medium text-gray-700"
              >
                Surname
              </label>
              <input
                type="text"
                id="surname"
                name="surname"
                required
                value={values.surname}
                onChange={changeHandler}
                className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

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
              required
              value={values.email}
              onChange={changeHandler}
              className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.email && <span className="error text-red-500 text-sm">{errors.email}</span>}
          </div>
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
              required
              value={values.password}
              onChange={changeHandler}
              className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.password && <span className="error text-red-500 text-sm">{errors.password}</span>}
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              required
              value={values.phoneNumber}
              onChange={changeHandler}
              className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.phoneNumber && (
              <span className="error text-red-500 text-sm">{errors.phoneNumber}</span>
            )}
          </div>
          <button
            type="submit"
            className="flex rounded-full justify-center w-full px-4 py-3 text-sm font-medium text-white bg-mainGreen border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
          {errors.submit && <span className="error text-red-500 text-sm">{errors.submit}</span>}
        </form>
        <div className="flex flex-col text-center text-mainGreen text-lg">
          <p className="mb-4 text-base-sm-d">Already have an account?</p>
          <Link
            to="/login"
            type="button"
            className="border-solid border-mainGreen rounded-full border-2 font-bold text-lg text-center text-mainGreen pt-2 pb-2 transition ease-in-out delay-150 hover:bg-mainGreen hover:text-white duration-300"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

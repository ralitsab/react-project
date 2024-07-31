import React, { useState } from "react";
import styles from "../account.module.css";
import { Link } from "react-router-dom";
import { registerUser } from "../../../services/authService";
import { validateRegister } from "../../../validation/registerValidation";
import { useForm } from "../../../hooks/useForm";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const navigate = useNavigate()
  const [errors, setErrors] = useState({});

  const initialValues = {
    email: "",
    password: "",
    firstName: "",
    surnmae: "",
    phoneNumber: "",
  };

  const handleRegister = async (values) => {
    const newErrors = validateRegister(
      values.email,
      values.password,
      values.phoneNumber
    );
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await registerUser(values.email, values.password, { firstName: values.firstName, surname: values.surname, phoneNumber: values.phoneNumber });
      navigate("/account");
    } catch (error) {
      setErrors(error.message);
    }
  };

  const { values, changeHandler, submitHandler } = useForm(initialValues, handleRegister);

  return (
    <div className={`${styles.container__account} container__account`}>
    <div className="p-8 space-y-6 max-w-2xl m-auto pb-20">
      <h2 className="antialiased m-0 p-0 font-black font-display text-5xl md:text-6xl text-[#14433D] text-center">
        Create an account
      </h2>
      <form className="space-y-6" onSubmit={submitHandler}>
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
              htmlFor="secondName"
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
          {errors.email && <span className="error">{errors.email}</span>}
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
            className="block w-full px-8 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.phoneNumber && (
            <span className="error">{errors.phoneNumber}</span>
          )}
        </div>
        <button
          type="submit"
          className="flex rounded-full justify-center w-full  px-4 py-3 text-sm font-medium text-white bg-[#14433D] border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Register
        </button>
      </form>
      <div className="flex flex-col text-center text-[#14433D] text-lg ">
        <p className="mb-4 text-base-sm-d">Already have an account?</p>
  
        <Link
          to="/login"
          type="button"
          className="border-solid border-[#14433D] rounded-full border-2 font-bold text-lg text-center text-[#14433D] pt-2 pb-2 transition ease-in-out delay-150 hover:bg-[#14433D] hover:text-white duration-300"
        >
          Sign up
        </Link>
      </div>
    </div>
  </div>
  
  );
}

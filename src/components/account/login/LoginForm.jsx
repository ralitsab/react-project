import React, { useState, useContext } from "react";
import styles from "../account.module.css";
import { Link } from "react-router-dom";
import Loader from "../../loader/Loader";
import { useForm } from "../../../hooks/useForm";
import { useAuthentication } from "../../../hooks/useAuth";
import { validateLogin } from '../../../utils/validation/loginValidation';



export default function LoginForm() {
  const { handleLogin, loading } = useAuthentication();
  const [errors, setErrors] = useState([])
  const initialValues = { email: '', password: '' };

  const { values, changeHandler, submitHandler } = useForm(initialValues, async (values)=> {
    const newErrors = validateLogin(values.email, values.password, values.phoneNumber);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      console.log(errors)
    } else {
      setErrors([]);
      await handleLogin(values);
    }
  });


  return (
    <div className={`${styles.container__account} container__account`}>
       {loading && <Loader />}
      <div className="p-8 space-y-6 max-w-2xl m-auto pb-20">
        <h2 className="antialiased m-0 p-0 font-display text-5xl md:text-6xl text-[#14433D] text-center font-bold">
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
          {errors && <p className="text-red-500 text-sm">{errors}</p>}
          <div className="flex items-center justify-between">
          </div>
          <button
            type="submit"
            className="flex rounded-full justify-center w-full px-4 py-3 text-sm font-medium text-white bg-[#14433D] border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
          Log In
          </button>
        </form>

        <div className="flex flex-col text-center text-[#14433D] text-lg">
          <p className="mb-4 text-base-sm-d">Need an account?</p>

          <Link
            to="/register"
            type="button"
            className="border-solid border-[#14433D] rounded-full border-2 font-bold text-lg text-center text-[#14433D] pt-2 pb-2 transition ease-in-out delay-150 hover:bg-[#14433D] hover:text-white duration-300"
          >
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
}

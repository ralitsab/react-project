import { useState } from "react"


export const useForm = (initialValues, submitCallback, validate) => {
const [values, setValues] = useState(initialValues)
const [errors, setErrors] = useState({});

const changeHandler = (e) => {
    setValues(state => ({
        ...state, 
        [e.target.name]: e.target.value
    }))
}

const submitHandler = (e) => {
    e.preventDefault();
    const validationErrors = validate ? validate(values) : {};
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      submitCallback(values);
      setValues(initialValues);
    }
  };


    return {
        values,
        changeHandler,
        submitHandler,
        errors,
        setErrors
    }
}
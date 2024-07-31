import { useState } from "react"


export const useForm = (intialValues, submitCallback ) => {
const [values, setValues] = useState(intialValues)


const changeHandler = (e) => {
    setValues(state => ({
        ...state, 
        [e.target.name]: e.target.value
    }))
}


const submitHandler = (e) => {
    e.preventDefault()
    setValues(intialValues);


    submitCallback(values)
}
    return {
        values,
        changeHandler,
        submitHandler
    }
}
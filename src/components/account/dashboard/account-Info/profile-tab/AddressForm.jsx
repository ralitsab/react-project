import { useForm } from "../../../../../hooks/useForm";
import { useAddress } from "../../../../../hooks/useAddress";
import { validateAddressForm } from "../../../../../utils/validation/addressValidation";

const AddressForm = ({ isEditMode, setIsEditMode }) => {
  const { addNewAddress, userAddress } = useAddress();



  const initialValues = {
    firstname:  "",
    lastname:  "",
    address:  "",
    city:  "",
    postalCode: "",
    country:  "",
    phone:  "",
  };



  const { values, errors, changeHandler, submitHandler, setErrors } = useForm(
    initialValues,
    (values) => {
      try {
      addNewAddress(values);
      if (isEditMode) {
        setIsEditMode(false);
      }
    }catch (error) {
      setErrors({ submit: 'Saving failed. Please try again.' });
      }
    },
    validateAddressForm
  );



  return (
    <form className="space-y-6" onSubmit={submitHandler}>
    <div className="flex flex-col md:flex-row md:space-x-6">
      <div className="w-full md:w-1/2">
        <label className="block text-sm font-medium text-gray-700">
          First Name
        </label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          value={values.firstname}
          onChange={changeHandler}
          className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.firstname && <p className="text-red-500 text-sm mt-2">{errors.firstname}</p>}
      </div>

      <div className="w-full md:w-1/2 mt-4 md:mt-0">
        <label
          htmlFor="lastname"
          className="block text-sm font-medium text-gray-700"
        >
          Last Name
        </label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          value={values.lastname}
          onChange={changeHandler}
          className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.lastname && <p className="text-red-500 text-sm mt-2">{errors.lastname}</p>}
      </div>
    </div>

    <div>
      <label
        htmlFor="address"
        className="block text-sm font-medium text-gray-700"
      >
        Address
      </label>
      <input
        type="text"
        id="address"
        name="address"
        value={values.address}
        onChange={changeHandler}
        className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
      {errors.address && <p className="text-red-500 text-sm mt-2">{errors.address}</p>}
    </div>

    <div className="flex flex-col md:flex-row md:space-x-6">
      <div className="w-full md:w-1/2">
        <label
          htmlFor="city"
          className="block text-sm font-medium text-gray-700"
        >
          City
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={values.city}
          onChange={changeHandler}
          className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.city && <p className="text-red-500 text-sm mt-2">{errors.city}</p>}
      </div>

      <div className="w-full md:w-1/2 mt-4 md:mt-0">
        <label
          htmlFor="postalCode"
          className="block text-sm font-medium text-gray-700"
        >
          Postal Code
        </label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          value={values.postalCode}
          onChange={changeHandler}
          className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.postalCode && <p className="text-red-500 text-sm mt-2">{errors.postalCode}</p>}
      </div>
    </div>

    <div>
      <label
        htmlFor="country"
        className="block text-sm font-medium text-gray-700"
      >
        Country
      </label>
      <input
        type="text"
        id="country"
        name="country"
        value={values.country}
        onChange={changeHandler}
        className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
      {errors.country && <p className="text-red-500 text-sm mt-2">{errors.country}</p>}
    </div>

    <div>
      <label
        htmlFor="phone"
        className="block text-sm font-medium text-gray-700"
      >
        Phone Number
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={values.phone}
        onChange={changeHandler}
        className="block w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
      />
      {errors.phone && <p className="text-red-500 text-sm mt-2">{errors.phone}</p>}
    </div>

    <button
      type="submit"
      className="flex rounded-full justify-center w-full px-4 py-3 text-sm font-medium text-white bg-mainGreen border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Submit
    </button>
  </form>
);
};
export default AddressForm;

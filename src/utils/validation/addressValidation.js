
export const validateAddressForm = (values) => {
    const errors = {};
  
    if (!values.firstname) {
      errors.firstname = "First name is required";
    }
  
    if (!values.lastname) {
      errors.lastname = "Last name is required";
    }
  
    if (!values.address) {
      errors.address = "Address is required";
    }
  
    if (!values.city) {
      errors.city = "City is required";
    }
  
    if (!values.postalCode) {
      errors.postalCode = "Postal code is required";
    } else if (!/^\d{5}(-\d{4})?$/.test(values.postalCode)) {
      errors.postalCode = "Postal code is invalid";
    }
  
    if (!values.country) {
      errors.country = "Country is required";
    }
  
    if (!values.phone) {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(values.phone)) {
      errors.phone = "Phone number is invalid";
    }
  
    return errors;
  };
  
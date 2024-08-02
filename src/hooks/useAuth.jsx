import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser, loginUser } from '../services/authService'; 
import { validateRegister } from '../utils/validation/registerValidation';
import { validateLogin } from '../utils/validation/loginValidation';

export const useAuthentication = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleRegister = async (values) => {
    setLoading(true);
    try {
      await registerUser(values.email, values.password, {
        firstName: values.firstName,
        surname: values.surname,
        phoneNumber: values.phoneNumber,
      });
      navigate("/account");
    } catch (error) {
      setErrors({ global: error.message });
    } finally {
      setLoading(false);
    }
  };


  const handleLogin = async(values) => {
      setLoading(true);
      try {
        await loginUser(values.email, values.password);
        navigate("/account");
      } catch (error) {
        setErrors('Invalid email or password. Please try again.');
      } finally {
        setLoading(false);
      }
  }

  return{
    handleRegister,
    handleLogin,
    loading,
  }

}
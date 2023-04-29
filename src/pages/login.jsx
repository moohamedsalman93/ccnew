import { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import '../App.css'

// const apidata=require("../data/api.json");
const api = "http://localhost:3001";


function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError('');
    setEmailError('');
    setEmailSent(false);

    try {
      // make API call to authenticate user
      const response = await axios.post(api + `/user/login`, {
        email: event.target.email.value,
        password: event.target.password.value,
      });
      if (response.data.status === "success") {
        localStorage.setItem('token', response.data.token);
        navigate(`../`);
    }
      // handle successful login
      console.log(response.data);
    } catch (error) {
      // handle login error
      console.error(error);
      setError('Invalid email or password');
    }

    setLoading(false);
  };

  const handleForgotPassword = async (event) => {
    event.preventDefault();
    setLoading(true);
    setEmailError('');
    setError('');

    try {
      // make API call to reset password
      const response = await axios.post('', {
        email: event.target.email.value,
      });

      // handle successful email send
      console.log(response.data);
      setEmailSent(true);
    } catch (error) {
      // handle email send error
      console.error(error);
      setEmailError('Email not found');
    }

    setLoading(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleForgotPasswordClick = () => {
    setForgotPassword(true);
  };

  const handleBackToLoginClick = () => {
    setForgotPassword(false);
    setEmailSent(false);
    setEmailError('');
    setError('');
  };

  return (
    <div className="flex justify-center items-center h-screen" style={{ backgroundImage: "url('./assets/BGC6.jpg')" }}>
      <form onSubmit={forgotPassword ? handleForgotPassword : handleSubmit} className="border rounded-md p-8 max-w-md mx-auto bg-gray-50" style={{ width: '500px' }}>
        <div className="flex justify-center mb-8">
          <img src="./assets/art.jpg" alt="Avatar" className="w-10 h-10 mr-2 rounded-full" />
          <h1 className="text-2xl font-bold mt-1">Finlab</h1>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4 flex justify-center">Let's go to your Finlab</h1>
          <h1 className="text-2xl font-bold mb-4  flex justify-center">account first</h1>
        </div>
        {forgotPassword ? (
          <>
            {emailSent ? (
              <div className="text-green-500 mb-4">Password reset link has been sent to your email.</div>
            ) : (
              <>
                <div className="mb-4">
                  <label className="block font-bold text-gray-700 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="border border-gray-300 p-2 w-full"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                {emailError && <div className="text-red-500 mb-4">{emailError}</div>}
              </>
            )}
            <button
              type="button"
              className="bg-teal-500 hover:bg-teal-500  text-white font-bold py-2 px-4 rounded w-full"
              onClick={handleBackToLoginClick}
            >
              Back to Login
            </button>
            <button
              type="submit"
              className="bg-teal-500  hover:bg-teal-700  text-white font-bold py-2 px-4 rounded w-full mt-4"
              disabled={emailSent}
            >
              {emailSent ? 'Email Sent' : 'Reset Password'}
            </button>
          </>
        ) : (
          <>
            {error && <div className="text-red-500 mb-4">{error}</div>}
            <div className="mb-4">
              <label className="block text-gray-400 mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="border border-gray-300 p-2 w-full rounded-md "
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block  text-gray-400 mb-2" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  className="border border-gray-300 p-2 w-full pr-10 rounded-md "
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  className="h-6 w-6 text-gray-400 cursor-pointer absolute top-3 right-3"
                  onClick={togglePasswordVisibility}
                />
              </div>
            </div>
            <div className="mb-4 flex items-center justify-between">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" name="rememberMe" />
                <span className="ml-2 text-gray-700">Remember me</span>
              </label>
              <div className="ml-4">
                <button
                  type="button"
                  className="text-teal-500 hover:text-teal-700"
                  onClick={handleForgotPasswordClick}
                >
                  Forgot Password
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">


              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md w-full mt-4"

                disabled={loading}
              >
                {loading ? 'Loading...' : 'Login'}
              </button>
            </div>
            <div className='flex justify-center'>
              <p >Don't have an account? <a className='text-teal-500 hover:text-teal-700' href="#">Register here</a></p>

            </div>
          </>
        )}

      </form>

    </div>
  );
}

export default LoginForm;





import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/App_Context';
import './Login.css';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AppContext);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      // Logging email and password for debugging purposes
      console.log('Logging in with:', { email, password });

      const result = await login(email, password);

      // Check if the response contains a successful login message
      console.log('Login result:', result);

      if (result && result.data && result.data.message && result.data.message.includes('Welcome')) {
        // Show success toast if login is successful
        toast.success(result.data.message, {
          position: 'bottom-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });

        // Debugging navigation
        console.log('Navigating to Dashboard');

        // Navigate to Dashboard after successful login
        setTimeout(() => {
          navigate('/Dashboard');
        }, 2000);
      } else {
        // Show error toast if login fails
        console.log('Login failed:', result?.data?.message || 'Unknown error');
        toast.error(result?.data?.message || 'Login failed', {
          position: 'bottom-right',
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
      }
    } catch (error) {
      // Handle any unexpected error that occurs
      console.error('Error during login:', error);
      toast.error('An error occurred. Please try again.', {
        position: 'bottom-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="login-container container my-5 p-5">
        <h2 className="text-center">Login</h2>
        <form onSubmit={loginHandler} className="form-section">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="container d-grid col-6">
            <button type="submit" className="btn btn-primary my-3">
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

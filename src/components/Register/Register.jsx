import React, { useContext, useState } from 'react'
import { AppContext } from '../../context/App_Context'
import './Register.css'

import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const { register } = useContext(AppContext)
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const registerHandler = async (e) => {
    e.preventDefault();
    const result = await register(name, email, password)

    toast.success(result.data.message, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    console.log(result.data)
    if (result.data.message !== "User Already Exist") {
      setTimeout(() => {
        navigate('/Login')
      }, 2500);
    }
  }

  return (
    <>
      <div className="Register-container container my-5 p-5">
        <h2 className='text-center'>Register</h2>
        <form
          onSubmit={registerHandler}
          className='form-section'>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Name </label>
            <input
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
              type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email </label>
            <input
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
              type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              required
              type="password" className="form-control" id="exampleInputPassword1" />
          </div>
          <div className="container d-grid col-6">
            <button type="submit" className="btn btn-primary mt-3">Register</button>

          </div>
        </form>
      </div>
    </>
  )
}

export default Register
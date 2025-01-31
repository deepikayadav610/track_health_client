import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="header-section bg-light p-2">
                <div className="left logo">
                    <p>HealthTrack..</p>
                </div>
                <div className="right">
                    <Link to={"/home"} className="btn btn-info mx-3">Home</Link>
                    <Link to={"/feature"} className='btn btn-info mx-3'>Features</Link>
                    <Link to={"/about"} className='btn btn-info mx-3'>About</Link>
                    <Link to={"/contact"} className='btn btn-info mx-3'>Contact</Link>
                    <Link to={"/login"} className="btn btn-info mx-3 login-btn">Login</Link>
                    <Link to={"/register"} className="btn btn-info mx-3 register-btn">Register</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar
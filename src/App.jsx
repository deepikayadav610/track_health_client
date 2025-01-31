import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Register from './components/Register/Register.jsx'
import Login from './components/Login/Login.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'
import Features from './components/Features/Features.jsx'
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/About.jsx'


const App = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/Dashboard" element={<Dashboard/>} />
                    <Route path="/feature" element={<Features/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
            </Router>
        </>
    )
}

export default App
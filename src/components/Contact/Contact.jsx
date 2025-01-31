import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/App_Context'; // Correctly importing context
import './Contact.css';

import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
    const { contactUs } = useContext(AppContext);  // Accessing the contactUs function from context
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        if (typeof contactUs === 'function') {
            const result = await contactUs(name, email, message);  // Using the function from context

            toast.success(result.message, {
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

            console.log(result);

            if (result.message === "Message sent successfully!") {
                setTimeout(() => {
                    navigate('/thankyou');  // Redirect to a 'thank you' page or another relevant page
                }, 2500);
            }
        } else {
            console.error("contactUs function is not available.");
        }
    };

    return (
        <>
            <div className="contact-container container my-5 p-5">
                <h2 className="text-center">Contact Us</h2>
                <p className='text-center'>We'd love to hear from you.</p>
                <form onSubmit={submitHandler} className="form-section">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Message</label>
                        <textarea
                            className="form-control"
                            id="message"
                            rows="4"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div className="container d-grid col-6">
                        <button type="submit" className="btn btn-primary mt-3">Send Message</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </>
    );
};

export default Contact;

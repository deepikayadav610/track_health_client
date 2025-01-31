import React, { useState } from 'react';
import axios from 'axios';
import './Home.css';

const Home = () => {
    const [message, setMessage] = useState('');
    const apiUrl = import.meta.env.VITE_API_URL; // Using the environment variable for API URL

    // Optional: Add a handler for the "Get Started" button if you want to trigger an API call or something.
    const handleGetStarted = () => {
        // Example API call to get some data (can be adjusted based on your actual API)
        axios.get(`${apiUrl}/api/some-endpoint`)
            .then(response => {
                setMessage('Welcome to your personal health assistant!');
                console.log(response.data); // Log the data received from the API
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setMessage('There was an error. Please try again later.');
            });
    };

    // Optional: Add a handler for the "Learn More" button
    const handleLearnMore = () => {
        setMessage('Here is more information about tracking your health!');
    };

    return (
        <>
            <div className="hero-section">
                <div className="hero-text">
                    <h1>Your Personal Health Assistant at Your Fingertips!</h1>
                    <h3>Track your fitness, monitor your progress, and achieve your health goals — all in one app.</h3>
                    <div className="home-btn-section">
                        {/* Button for Get Started */}
                        <a href="#" className="get-started" onClick={handleGetStarted}>Get Started Now</a>

                        {/* Button for Learn More */}
                        <a href="#" className="learn-more" onClick={handleLearnMore}>Learn More</a>
                    </div>
                    {/* Optional: Display message after actions */}
                    {message && <p>{message}</p>}
                </div>
            </div>
        </>
    );
};

export default Home;

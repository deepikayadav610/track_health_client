import React, { useState } from 'react';
import './Home.css';

const Home = () => {
    const [message, setMessage] = useState('');

    // Handler for "Get Started" button
    const handleGetStarted = () => {
        setMessage('Welcome to your personal health assistant!');
    };

    // Handler for "Learn More" button
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
                    {/* Display message after actions */}
                    {message && <p>{message}</p>}
                </div>
            </div>
        </>
    );
};

export default Home;

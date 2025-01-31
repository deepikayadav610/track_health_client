import React from 'react'
import './About.css'
import smartwatch from './img/smartwatch.png';
import deepikaydvimg from './img/IMG-20240717-WA0005.jpg'

const About = () => {
  return (
    <div className="about-healthtrack">
      <div className='about-section'>
        <h2>About HealthTrack</h2>
        <h3 className='text-center'>Your trusted partner for health and fitness management</h3>
        <p className="text-center">HealthTrack is designed to empower individuals to achieve their health goals by tracking essential meterics like steps, calories and hydration.</p>
      </div>
      <div className="column-section">
        <div className="text-section">
          <h2>Mission:</h2>
          <p>To empower individuals to lead healthier lives by providing easy-to-use tools for tracking fitness, diet, and overall well-being.</p>
          <h2>Vision:</h2>
          <p>To be the leading health platform that transforms how people manage their health and wellness globally.</p>
          <h2>Purpose:</h2>
          <p>HealthTrack helps individuals stay motivated and achieve their health goals by offering an all-in-one solution for fitness, diet, and health tracking.</p>
        </div>
        <div className="img-section">
          <img src={smartwatch} alt="smartwatch" />
        </div>
      </div>
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-content">
            <h3>November 2024</h3>
            <p>HealthTrack was designed with a focus on empowering individuals to track essential metrics such as steps, calories, and hydration.</p>
          </div>
        </div>
        <div class="timeline-item">
          <div class="timeline-content">
            <h3>February 2025</h3>
            <p>HealthTrack introduced advanced fitness tracking and goal-setting features, paving the way for AI integration in the near future.</p>
          </div>
        </div>
      </div>
      <div class="team-section">
        <div class="team-card">
          <div class="team-photo">
            <img src={deepikaydvimg} alt="Deepika Yadav"/>
          </div>
          <div class="team-details">
            <h2>Deepika Yadav</h2>
            <h3>MERN Stack Developer</h3>
            <p>A passionate developer skilled in building dynamic and responsive applications using MongoDB, Express.js, React.js, and Node.js.</p>
          </div>
        </div>
      </div>


    </div>

  )
}

export default About
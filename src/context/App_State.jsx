import React, { useEffect, useState } from 'react';
import { AppContext } from './App_Context';
import axios from 'axios';
import Contact from '../components/Contact/Contact';

const App_State = (props) => {
  // Use environment variable for dynamic API URL
  const url = import.meta.env.VITE_API_URL || "http://localhost:3000/api"; // Default to localhost for development

  const [token, setToken] = useState("");

  useEffect(() => {
    // login("deepika@gmail.com", "Deep@123") // You can uncomment if needed
  }, []);

  // Register
  const register = async (name, email, password) => {
    try {
      const api = await axios.post(
        `${url}/register`,
        { name, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      return api;
    } catch (error) {
      console.error("Error during registration", error);
      return { message: "Failed to register" }; // Graceful error message
    }
  };

  // Login
  const login = async (email, password) => {
    try {
      const api = await axios.post(
        `${url}/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setToken(api.data.token);
      return api;
    } catch (error) {
      console.error("Error during login", error);
      return { message: "Failed to login" }; // Graceful error message
    }
  };

  // Contact Us
  const contactUs = async (name, email, message) => {
    try {
      const api = await axios.post(
        `${url}/contact`,
        { name, email, message },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      return api.data; // returning the response data
    } catch (error) {
      console.error("Error sending message", error);
      return { message: "Failed to send message" }; // Return an error message
    }
  };

  return (
    <AppContext.Provider value={{ login, register, contactUs }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default App_State;

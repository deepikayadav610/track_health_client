import React, { useEffect, useState } from 'react'
import { AppContext } from './App_Context'
import axios from 'axios'
import Contact from '../components/Contact/Contact';
import { ContactUs } from '../../../API/Models/User';

const App_State = (props) => {
  const url = "http://localhost:3000/api";
  const [token, setToken] = useState("")

  useEffect(() => {
    // login("deepika@gmail.com", "Deep@123")
  }, [])

  //register
  const register =async(name, email, password)=>{
    const api = await axios.post(`${url}/register`,
      {name, email, password }, {
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true
    }
    );
    return api;
  }

  //login
  const login = async (email, password) => {
    const api = await axios.post(`${url}/login`,
      { email, password }, {
      headers: {
        "Content-Type": "application/json"
      },
      withCredentials: true
    }
    );
    setToken(api.data.token)
    return api;
    // console.log("Login data", api)

  }

  //contactUs
  const contactUs = async (name, email, message) => {
    try {
      const api = await axios.post(`${url}/contact`,
        { name, email, message }, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true
      });
      return api.data;  // returning the response data
    } catch (error) {
      console.error("Error sending message", error);
      return { message: "Failed to send message" };  // Return an error message
    }
  };

  return (
    <AppContext.Provider value={{
      login,
      register,
      contactUs,
    }}>
      {props.children}
    </AppContext.Provider>
  )
}

export default App_State
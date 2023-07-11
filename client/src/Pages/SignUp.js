import React from 'react'
// import Login from './Login';

// import { Switch, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { Link } from "react-router-dom";
import { useState } from 'react';
// import './Signup.css'
// import logo from '../logo.svg'


function SignUp({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const history = useHistory();

  const handleChange = (event) => {


    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    axios
      .post(
        '/users',
        { user: { username, email, password } },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      )
      .then(response => {
        console.log(response.data);
        setConfirmationMessage('Confirmed! You\'re in! Please login');
        setUsername('');
        setEmail('');
        setPassword('');
        setTimeout(() => {
          setConfirmationMessage('');
          history.push('/login');
        }, 3000);
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="signup-container">
      <header>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLsdvwpcp7OYLGiLBquKReuZl__m4XWEsJb4BOYnchzi8fr7LDQHBKC7j1CGfeyxalJYk&usqp=CAU" alt="Logo" className="logo" />
      </header>
      <div className="signup-form-container">
        <form onSubmit={handleSubmit} className="add-clerk">
          <label className='textbox-clerk'>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={handleChange}
            className="textbox-clerk"
            required
          /><br></br>
          <label className='textbox-clerk'>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="textbox-clerk"
            value={email}
            onChange={handleChange}
            required
          /><br></br>
          <label className='textbox-clerk'>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="textbox-clerk"
            value={password}
            onChange={handleChange}
            required
          /><br></br>
          <button type="submit" className="btn-clerk">
            Sign Up
          </button>
          {confirmationMessage && (
            <p className="confirmation-message">{confirmationMessage}</p>
          )}
        </form> <br></br>

        <Link to="/login" className="login-link">
            Already have an account? Log in
          </Link>
      </div>




    </div>
  );
}


export default SignUp

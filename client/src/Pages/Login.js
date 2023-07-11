import React, { useState } from 'react';
import './Login.css'
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


// import Dashboard from '../Components/Dashboard';



const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [errorMessages, setErrorMessages] = useState({});

  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessages({});
    if (!username) {
      setErrorMessages((prevState) => ({ ...prevState, username: 'Username is required.' }));
    }
    if (!password) {
      setErrorMessages((prevState) => ({ ...prevState, password: 'Password is required.' }));
    }
    if (!role) {
      setErrorMessages((prevState) => ({ ...prevState, role: 'Role is required.' }));
    }

    // Perform login logic if form inputs are valid
    if (username && password && role) {
      // handle the login logic here, such as making API calls to your Rails backend.
      history.push("/adminlayout")
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
      <select value={role} className="textbox-clerk" onChange={(e) => setRole(e.target.value)}>
          <option value="">Select Role</option>
          <option value="merchant">Merchant</option>
          <option value="admin">Admin</option>
          <option value="clerk">Clerk</option>
        </select>
        {errorMessages.role && <span className="error-message">{errorMessages.role}</span>}
        <input
          type="text"
          placeholder="Username"
          value={username}
          className="textbox-clerk"
          onChange={(e) => setUsername(e.target.value)}
        /><br></br>
        {errorMessages.username && <span className="error-message">{errorMessages.username}</span>}
        <input
          type="password"
          placeholder="Password"
          className="textbox-clerk"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br></br>
        {errorMessages.password && <span className="error-message">{errorMessages.password}</span>}

        <button type="submit">Login</button>
      </form> <br></br>
      <div className='login-signup'>
      <label  className="login-link-2"> Haven't signed up yet? </label>
      <Link to="/" className="login-link">
            Click Here &rarr;
          </Link>


      </div>


    </div>
  );
};

export default Login;

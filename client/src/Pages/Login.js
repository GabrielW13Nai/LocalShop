import React, { useState } from 'react';
import './Login.css'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [errorMessages, setErrorMessages] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();
    // Reset error messages
    setErrorMessages({});

    // Validate form inputs
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
      console.log('Username:', username);
      console.log('Password:', password);
      console.log('Role:', role);
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
      <select value={role} onChange={(e) => setRole(e.target.value)}>
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
          onChange={(e) => setUsername(e.target.value)}
        />
        {errorMessages.username && <span className="error-message">{errorMessages.username}</span>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessages.password && <span className="error-message">{errorMessages.password}</span>}
        
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { Container, Form, Button } from "react-bootstrap";
import "../Styles/Login.css";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Retrieve users from session storage
    const users = JSON.parse(sessionStorage.getItem('users')) || [];

    // Check if the entered credentials match stored credentials
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      console.log('User logged in:', user);

      // After successful login, navigate to the home page (or dashboard)
      navigate('/home');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
// Try this code Register
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Check if the user already exists in session storage
    const existingUsers = JSON.parse(sessionStorage.getItem('users')) || [];

    // Check if the username is already taken
    if (existingUsers.some((user) => user.username === username)) {
      alert('Username is already taken. Please choose another one.');
    } else {
      // Register the new user
      const newUser = { username, password };
      const updatedUsers = [...existingUsers, newUser];
      sessionStorage.setItem('users', JSON.stringify(updatedUsers));

      console.log('User registered:', newUser);

      // After successful registration, navigate to the login page
      navigate('/');
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
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
      <button onClick={handleRegister}>Register</button>
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default SignUp;
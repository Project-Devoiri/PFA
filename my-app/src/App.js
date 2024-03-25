import React, { useState } from 'react';
import axios from 'axios';
import '../src/App.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://127.0.0.1:5000/test/create', {
        username,
        password
      });

      if (response.status === 201) {
        console.log('User created successfully');
        alert('User created successfully');
      } else {
        console.error('Failed to create user');
        alert('Failed to create user');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error creating user');
    }

    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit">SIGN UP</button>
      </form>
    </div>
  );
};

export default LoginForm;

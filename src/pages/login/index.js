import React, { useState, useEffect } from 'react';
import './style.scss';

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className='wrapper'>
      <div className='container'>
        <h1>Welcome</h1>

        <form className='form' onSubmit={e => onSubmit(e)}>
          <input
            type='text'
            value={username}
            onChange={e => setUsername(e.target.value)}
            placeholder='Username'
          />
          <input
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder='Password'
          />
          <button type='submit' id='login-button'>
            Login
          </button>
        </form>
      </div>

      <ul className='bg-bubbles'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Login;

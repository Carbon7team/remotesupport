import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';

async function loginFetch(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
}

export default function Login({setToken}) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginFetch({username, password});
    setToken(token);
  }

  return(
    <div className="login-wrapper">

      <h1>Please Log In</h1>

      <form onSubmit={handleSubmit}>

      <fieldset>

      <legend>Personal data</legend>

      <div className="username-wrapper">
        <label htmlFor="username">Username</label>
        <span><input type="text" name="username" id="username" placeholder="name.surname" onChange={e => setUsername(e.target.value)}/></span>
      </div>

      <div className="username-wrapper">
        <label htmlFor="password">Password</label>
        <span><input type="password" name="password" id="password" onChange={e => setPassword(e.target.value)}/></span>
      </div>

      <input type="submit" name="submit" value="Sign in" />

      </fieldset>

      </form>

    </div>
  )
}

Login.propTypes = { setToken: PropTypes.func.isRequired }
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useState } from 'react';
import { useStore } from '../../Utilities/contextProvider';
import { useInstance } from '../../Utilities/useInstance';
import LoginVM from './LoginVM';
import './Login.css';



const Login = observer(() => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {
    handleSubmit
  } = useInstance(new LoginVM(useStore(), username, password));

  return(
    <div className="login-wrapper">

      <h1>Welcome technician,</h1>
      
      <p>Sign in</p>

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
})

export default Login;
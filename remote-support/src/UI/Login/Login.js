import { observer } from "mobx-react-lite";
import React from "react";
import { useState } from "react";
import { useStore } from "../../Utilities/contextProvider";
import "./Login.css";

const Login = observer(() => {
  const rootstore = useStore();

  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  async function loginFetch(username, password) {
    var credentials = { username, password };
    return fetch("http://localhost:4000", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = JSON.parse(await loginFetch(username, password));
    if (response.token != null) {
      rootstore.stateUIStore.setLogged(true);
      rootstore.stateUIStore.setIdTech(response.user);
      rootstore.stateUIStore.setTokenAuth(response.token);
      setErrorMessage(response.message);
    }
  };

  return (
    <div className="login-wrapper">
      <h1>Welcome technician,</h1>

      <p>Sign in</p>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal data</legend>

          <div className="username-wrapper">
            <label htmlFor="username">Username</label>
            <span>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="name.surname"
                onChange={(e) => setUsername(e.target.value)}
              />
            </span>
          </div>

          <div className="username-wrapper">
            <label htmlFor="password">Password</label>
            <span>
              <input
                type="password"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </span>
          </div>

          <input type="submit" name="submit" value="Sign in" />

          <div id="error-message">
            <p>{errorMessage}</p>
          </div>
        </fieldset>
      </form>
    </div>
  );
});

export default Login;

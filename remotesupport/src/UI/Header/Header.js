import React from 'react';

const Header = (props) => {
  const isLogged = props.isLogged;
  if(!isLogged)
  return(
    <header>
    <h1>Socomec Remote Support</h1>
  </header>
  )
  else
  return(
  <header>
    <h1>Socomec Remote Support</h1>
    <p>Avaiability</p>
    <select name="avaiability">
      <option>Avaiable</option>
      <option>Not Avaiable</option>
    </select>
    <button>Logout</button>
  </header>
  )
};

export default Header;
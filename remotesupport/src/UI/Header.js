import React from 'react';
import { observer } from "mobx-react-lite";
import { useInstance } from '../useInstance'

const Header = observer(({isLogged}) => {

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
});

export default Header;
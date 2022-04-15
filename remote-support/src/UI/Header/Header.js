import React from 'react';
import { observer } from 'mobx-react-lite';
import { useInstance } from '../../Utilities/useInstance';
import { useStore } from '../../Utilities/contextProvider';
import HeaderVM from './HeaderVM';


const Header = observer(() => {

  const {
    logged,
  } = useInstance(new HeaderVM(useStore()));

  return(
  <header>
    <h1>Socomec Remote Support</h1>
    {logged && (
      <div id='wrapper-settings'>
      <p>Avaiability</p>
      <select name="avaiability">
        <option>Avaiable</option>
        <option>Not Avaiable</option>
      </select>
      <button>Logout</button>
      </div>
    )}
  </header>
  )
})

export default Header;
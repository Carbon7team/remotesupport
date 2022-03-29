//import React, { createContext } from 'react';
import Login from './Login';
import Header from './Header';
import dataArea from './dataArea/dataArea';
import callArea from './CallArea/callArea';
import useToken from './useToken';
import { useEffect, useState } from 'react';

const View = () => {

 const {token, setToken} = useToken(null);
 const [isLogged, setIsLogged] = useState(false);

 useEffect(() => {
  if(!token) {
    setIsLogged(false);
  }else{ 
    setIsLogged(true);
  }
 },[token]);

    return (
      <div id='view-wrapper'>
      {isLogged && (
        <div id='not-logged-wrapper'>
        <Header isLogged={isLogged}/>
        <Login setToken={setToken}/>
        </div>
      )}
      {!isLogged && (
        <div id='logged-wrapper'>
          <Header isLogged={isLogged}/>
          <dataArea/>
          <callArea isLogged={isLogged}/>
        </div>
      )}
      </div>
    )
}


export default View;

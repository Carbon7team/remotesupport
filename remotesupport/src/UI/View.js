//import React, { createContext } from 'react';
import Login from './Login/Login';
import Header from './Header/Header';
import DataArea from './dataArea/DataArea';
import CallArea from './CallArea/CallArea';
import useToken from './useToken';
import { useEffect, useState } from 'react';

const View = () => {

 const {token, setToken} = useToken(null);
 const [isLogged, setIsLogged] = useState(false);

 //da verificare (nel login verificare try catch async function)
 useEffect(() => {
  if(!token) {
    setIsLogged(false);
  }else{ 
    setIsLogged(true);
  }
 },[]);

    return (
      <div id='view-wrapper'>
      {!isLogged && (
        <div id='not-logged-wrapper'>
        <Header isLogged={isLogged}/>
        <Login setToken={setToken}/>
        </div>
      )}
      {isLogged && (
        <div id='logged-wrapper'>
          <Header isLogged={isLogged}/>
          <DataArea/>
          <CallArea isLogged={isLogged}/>
        </div>
      )}
      </div>
    )
}


export default View;

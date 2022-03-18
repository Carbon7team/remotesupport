//import React, { createContext } from 'react';
import Login from './Login';
import Header from './Header'
import useToken from './useToken';

const View = () => {

 const {token, setToken} = useToken();
  var isLogged;
  if(!token) {
    isLogged = false;
    return (
      <>
      <Header/>
      <Login setToken={setToken} />
      </>
    )
  } else {
    isLogged = true;
    return (
      <>
        <Header isLogged={isLogged}/>
        
      </>
    );
  }
}


export default View;

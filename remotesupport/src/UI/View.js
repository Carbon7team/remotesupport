import React, { createContext } from 'react';
import Login from './Login';
import Header from './Header'
import useToken from './useToken';

function View() {
 const {token, setToken} = useToken();

  if(!token) {
    return (
      <>
      <Header/>
      <Login setToken={setToken} />
      </>
    )
  }else{
    return (
      <>
        <Header/>
      </>
    );
  }
}


export default View;

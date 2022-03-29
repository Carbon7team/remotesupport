import React, { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import Peer from 'peerjs';

const callContext = createContext();

// const socket = io('http://localhost:5000');
const socket = io('');

const ContextProvider = () => {
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();


  useEffect(() => {},[]);
  
  const answerCall = () => {
        setCallAccepted(true);
  }

  const endCall = () => {
    setCallEnded(true);
  }


  return(
    <callContext.Provider value={
      answerCall
    } >

    </callContext.Provider>
  )

};

export {};

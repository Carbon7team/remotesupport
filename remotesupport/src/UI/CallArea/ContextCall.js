import React, { createContext, useState, useRef, useEffect, Children } from 'react';
import socketIOClient from 'socket.io-client';
import Peer from 'peerjs';
const ENDPOINT = "http://localhost:4000"; // server address

const ContextCall = createContext();

// const socket = io('http://localhost:5000');
// const socket = io('');

const ContextProvider = ({children}) => {
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [nameUser, setNameUser] = useState('');
  const [surnameUser, setSurnameUser] = useState('');
  const [companyUser, setCompanyUser] = useState('');
  const [idUser, setIdUser] = useState('');

  const myVideo = useRef(null);
  const userVideo = useRef(null);
  const peerInstance = useRef(null);


  useEffect(() => {

    const socket = socketIOClient(ENDPOINT);
    
    socket.send({"identificazione" : "tecnico","tipo": "registrazione","idTecnico": "tecnico1"}); // inserire username di accesso tecnico
    
    socket.on("message", data => {
      if(data.identificazione == "virtualDisplay"){
        if(data.tipo == "chiamata"){
          setIdUser(data.idvirtualDisplay);
        }
      }
    });

  }, []);
  
  const sendCall = (idUser) => {

    const peer = new Peer("tecnico1" /* var con username del tecnico */, {
      host: 'localhost',
      port: 9000,
      path: '/myapp'
    });

    setCallAccepted(true);

    peerInstance.current = peer;

    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((mediaStream) => {
      
      setStream(mediaStream);

      myVideo.current.srcObject = mediaStream;
      myVideo.current.play();

      const call = peerInstance.current.call(idUser, mediaStream)

      call.on('stream', (remoteStream) => {
        userVideo.current.srcObject = remoteStream
        userVideo.current.play();
      });

    });
  }

  const toggleAudio = () => {
    myVideo.current.getAudioTracks().forEach(track => track.enabled = !track.enabled);
  }

  const toggleVideo = () => {
    myVideo.current.getVideoTracks().forEach(track => track.enabled = !track.enabled);
  }

  const leaveCall = () => {

    setCallEnded(true);

    peerInstance.current.destroy();

  }

  

  return(
    <ContextCall.Provider value={[
      callAccepted,
      callEnded,
      idUser,
      stream,
      myVideo,
      userVideo,
      toggleAudio,
      toggleVideo,
      sendCall,
      leaveCall
    ]} >
      {children}
    </ContextCall.Provider>
  )

};

export {ContextProvider, ContextCall};

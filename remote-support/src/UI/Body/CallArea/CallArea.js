import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../../Utilities/contextProvider';
import { useInstance } from '../../../Utilities/useInstance';
import CallAreaVM from './CallAreaVM';
import Sidebar from './SideBar/Sidebar';
import './CallArea.css'

const CallArea = observer((props) => {
  
  const {
    techVideo,
    userVideo,
    call,
    connectionDataChannel,
    peerTech
  } = props
// eslint-disable-next-line
  const {} = useInstance(new CallAreaVM(useStore()));

  return (
    <div id="wrapper-callarea">

      <h2>Video Chat</h2>

          <video id='tech-video' playsInline ref={techVideo} autoPlay/>
          {<Sidebar call={call} connectionDataChannel={connectionDataChannel} peerTech={peerTech}/>}
          <video id='user-video' playsInline ref={userVideo} autoPlay/>
          
    </div>
  );
})

export default CallArea;

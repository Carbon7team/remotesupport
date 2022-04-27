import { observer } from "mobx-react-lite";
import React from "react";
import Sidebar from "./SideBar/Sidebar";
import "./CallArea.css";

const CallArea = observer((props) => {
  const {
    stream,
    techVideo,
    userVideo,
    call,
    connectionDataChannel,
    peerTech,
  } = props.vars;

  const { setStream } = props.setters;

  const settersSidebar = { setStream };

  const varsSidebar = { stream, call, connectionDataChannel, peerTech };

  return (
    <div id="wrapper-callarea">
      <h2>Video Chat</h2>

      <video id="tech-video" playsInline ref={techVideo} autoPlay />
      {stream && <Sidebar setters={settersSidebar} vars={varsSidebar} />}
      <video id="user-video" playsInline ref={userVideo} autoPlay />
    </div>
  );
});

export default CallArea;

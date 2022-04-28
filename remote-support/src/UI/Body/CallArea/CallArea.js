import { observer } from "mobx-react-lite";
import React from "react";
import Sidebar from "./SideBar/Sidebar";
import "./CallArea.css";
import { useStore } from "../../../Utilities/contextProvider";

const CallArea = observer((props) => {
  const rootstore = useStore();
  const { techVideo, userVideo, call, connectionDataChannel, peerTech } =
    props.vars;

  const { callAccepted, callEnded } = rootstore.stateUIStore;

  const varsSidebar = { call, connectionDataChannel, peerTech };

  return (
    <div id="wrapper-callarea">
      <h2>Video Chat</h2>

      <video id="tech-video" playsInline ref={techVideo} autoPlay />
      {callAccepted && !callEnded && <Sidebar vars={varsSidebar} />}
      <video id="user-video" playsInline ref={userVideo} autoPlay />
    </div>
  );
});

export default CallArea;

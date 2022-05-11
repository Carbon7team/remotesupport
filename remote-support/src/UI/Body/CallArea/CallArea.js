import { observer } from "mobx-react-lite";
import React from "react";
import Sidebar from "./SideBar/Sidebar";
import "./CallArea.css";
import { useStore } from "../../../Utilities/contextProvider";

const CallArea = observer((props) => {
  const rootstore = useStore();
  const { /*techVideo, userVideo,*/ peerTech, call, connectionDataChannel } =
    props.vars;

  const { callAccepted, callEnded } = rootstore.stateUIStore;

  const varsSidebar = { call, connectionDataChannel, peerTech };

  return (
    <div id="wrapper-callarea">
      <h2>Call Area</h2>

      {/* <video id="tech-video" playsInline ref={techVideo} autoPlay /> */}
      {/* valutare quest'idea non appena provato il nodo server*/}
      {callAccepted && !callEnded && (
      <>
      {/* <p>On call</p>
      {peerTech.current.pingInterval < 100 && <p>Good connection</p>}
      {peerTech.current.pingInterval > 100 && peerTech.current.pingInterval < 300 && <p>Medium connection</p>}
      {peerTech.current.pingInterval > 300 && <p>Bad connection</p>} */}
      <Sidebar vars={varsSidebar} />
      </>
      )}
      {/* <video id="user-video" playsInline ref={userVideo} autoPlay /> */}
    </div>
  );
});

export default CallArea;

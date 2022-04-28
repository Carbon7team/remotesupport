import { observer } from "mobx-react-lite";
import { useRef } from "react";
import CallArea from "./CallArea/CallArea";
import DataArea from "./DataArea/DataArea";
import "./Body.css";

const Body = observer(() => {
  const techVideo = useRef(null);
  const userVideo = useRef(null);
  const peerTech = useRef(null);

  const vars = {
    techVideo,
    userVideo,
    peerTech,
  };

  return (
    <div id="wrapper-body">
      <DataArea vars={vars} />
      <CallArea vars={vars} />
    </div>
  );
});

export default Body;

import { observer } from "mobx-react-lite";
import { useRef } from "react";
import CallArea from "./CallArea/CallArea";
import DataArea from "./DataArea/DataArea";
import "./Body.css";

const Body = observer(() => {
  return (
    <div id="wrapper-body">
      <DataArea />
      <CallArea />
    </div>
  );
});

export default Body;

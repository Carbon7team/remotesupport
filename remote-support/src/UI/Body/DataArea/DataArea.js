import { observer } from "mobx-react-lite";
import { useStore } from "../../../Utilities/contextProvider";
import AlarmsArea from "./AlarmsArea/AlarmsArea";
import StatesArea from "./StatesArea/StatesArea";
import MeasurementsArea from "./MeasurementsArea/MeasurementsArea";
import { Button } from "@material-ui/core";
import "./DataArea.css";
import { useState } from "react";
import Peer from "peerjs";

const DataArea = observer((props) => {
  const rootstore = useStore();

  const {
    techVideo,
    userVideo,
    call,
    connectionDataChannel,
    peerTech,
    idUserClient,
    nameClient,
    surnameClient,
    companyClient,
    requestReceived,
  } = props.vars;

  const {
    setStream,
    setIdUserClient,
    setNameClient,
    setSurnameClient,
    setCompanyClient,
    setRequestReceived,
  } = props.setters;

  const { callAccepted, callEnded, availabilityTech } = rootstore.stateUIStore;

  const sendCall = (idUserClient) => {
    const peer = new Peer("tecnico1" /* var con username del tecnico */, {
      host: "localhost",
      port: 9000,
      path: "/myapp",
    });

    rootstore.stateUIStore.setCallAccepted(true);
    rootstore.stateUIStore.setCallEnded(false);

    peerTech.current = peer;

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((mediaStream) => {
        setStream(mediaStream);

        techVideo.current.srcObject = mediaStream;
        techVideo.current.play();

        call = peerTech.current.call(idUserClient, mediaStream);

        call.on("stream", (remoteStream) => {
          userVideo.current.srcObject = remoteStream;
          userVideo.current.play();
        });
      });

    connectionDataChannel = peer.connect(idUserClient);

    connectionDataChannel.on("open", () => {
      connectionDataChannel.on("data", function (data) {
        rootstore.stateUIStore.setJsonData(JSON.stringify(data)); // setting string JSON to stamp later
      });
    });
  };

  const declineCall = () => {
    setRequestReceived(false);
    setIdUserClient(null);
    setNameClient(null);
    setSurnameClient(null);
    setCompanyClient(null);
  };

  return (
    <div className="dataArea-wrapper">
      {callAccepted && !callEnded && (
        <div id="data-display">
          <StatesArea />
          <AlarmsArea />
          <MeasurementsArea />
        </div>
      )}

      {!callAccepted && callEnded && availabilityTech && (
        <div id="waiting">
          Waiting for new request down here:
          {requestReceived && (
            <div id="request">
              <p>{nameClient}</p>
              <p>{surnameClient}</p>
              <p>{companyClient}</p>
              <Button id="accept-button" onClick={sendCall(idUserClient)}>
                Accept
              </Button>
              <Button id="decline-button" onClick={declineCall}>
                Decline
              </Button>
              )
            </div>
          )}
        </div>
      )}

      {!callAccepted && callEnded && !availabilityTech && (
        <div id="not-available">
          <h3>Not Available for requests!</h3>
          <p>If you are free, you can modify your availability</p>
        </div>
      )}
    </div>
  );
});

export default DataArea;

import { observer } from "mobx-react-lite";
import { useStore } from "../../../Utilities/contextProvider";
import AlarmsArea from "./AlarmsArea/AlarmsArea";
import StatesArea from "./StatesArea/StatesArea";
import MeasurementsArea from "./MeasurementsArea/MeasurementsArea";
import { Button } from "@material-ui/core";
import "./DataArea.css";
import { useState, useEffect, useRef } from "react";
import Peer from "peerjs";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4000";

const DataArea = observer((props) => {
  const rootstore = useStore();

  let call = useRef(null);
  let connectionDataChannel = useRef(null);

  const [idUserClient, setIdUserClient] = useState(null);
  const [nameClient, setNameClient] = useState(null);
  const [surnameClient, setSurnameClient] = useState(null);
  const [companyClient, setCompanyClient] = useState(null);
  const [requestReceived, setRequestReceived] = useState(false);

  const { techVideo, userVideo, peerTech } = props.vars;

  const { callAccepted, callEnded, availabilityTech, idTech } =
    rootstore.stateUIStore;

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
        rootstore.stateUIStore.setStreamTech(mediaStream);

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
        // setting arrays to stamp later
        rootstore.datasetStore.alarmsFromJSON(
          JSON.parse(JSON.stringify(data)).states
        );
        rootstore.datasetStore.alarmsFromJSON(
          JSON.parse(JSON.stringify(data)).alarms
        );
        rootstore.datasetStore.alarmsFromJSON(
          JSON.parse(JSON.stringify(data)).measurements
        );
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

  const setDataRequestClient = () => {
    const socket = socketIOClient(ENDPOINT);

    socket.send({
      idTech: idTech,
    });

    socket.on("message", (data) => {
      if (data.identification === "virtualDisplay") {
        if (data.type === "chiamata") {
          setNameClient(data.name);
          setSurnameClient(data.surname);
          setCompanyClient(data.company);
          setIdUserClient(data.idUserClient);
          setRequestReceived(true);
        }
      }
    });
  };

  useEffect(() => {
    if (availabilityTech && requestReceived) {
      setDataRequestClient();
    }
    // eslint-disable-next-line
  }, []);

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
              <Button
                id="accept-button"
                onClick={() => {
                  sendCall(idUserClient);
                }}
              >
                Accept
              </Button>
              <Button
                id="decline-button"
                onClick={() => {
                  declineCall();
                }}
              >
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

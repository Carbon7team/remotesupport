import { observer } from "mobx-react-lite";
import React, { useState, useRef, useEffect } from "react";
import Sidebar from "./SideBar/Sidebar";
import "./CallArea.css";
import { Button } from "@material-ui/core";
import { useStore } from "../../../Utilities/contextProvider";
import Peer from "peerjs";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4000";

const CallArea = observer(() => {
  const rootstore = useStore();
  const peerTech = useRef(null);
  const call = useRef(null);
  const connectionDataChannel = useRef(null);
  const audioTech = useRef(null);
  const audioUser = useRef(null);
  const [idUserClient, setIdUserClient] = useState(null);

  const socket = socketIOClient(ENDPOINT);

  const { callAccepted, callEnded, requestReceived } = rootstore.stateUIStore;

  const sendCall = (idUserClient) => {
    const peer = new Peer(rootstore.stateUIStore.idTech, {
      host: "localhost",
      port: 9000,
      path: "/myapp",
    });

    rootstore.stateUIStore.setCallAccepted(true);
    rootstore.stateUIStore.setCallEnded(false);

    peerTech.current = peer;

    navigator.mediaDevices
      .getUserMedia({ video: false, audio: true })
      .then((mediaStream) => {
        rootstore.stateUIStore.setStreamTech(mediaStream);

        audioTech.current.srcObject = mediaStream;

        call.current = peerTech.current.call(idUserClient, mediaStream);

        call.current.on("stream", (remoteStream) => {
          audioUser.current.srcObject = remoteStream;
        });
      });

    connectionDataChannel.current = peerTech.current.connect(idUserClient);

    connectionDataChannel.current.on("open", () => {
      connectionDataChannel.current.on("data", function (data) {
        try {
          rootstore.datasetStore.statesFromJSON(JSON.parse(data).status);
          rootstore.datasetStore.alarmsFromJSON(JSON.parse(data).alarms);
          rootstore.datasetStore.measurementsFromJSON(
            JSON.parse(data).measurements
          );
        } catch {
          rootstore.datasetStore.resetStates();
          rootstore.datasetStore.resetAlarms();
          rootstore.datasetStore.resetMeasurements();
        }
      });
    });
  };

  async function availabilityFetch(valueAvailability) {
    const data = {
      disponibility: valueAvailability,
      user_id: rootstore.stateUIStore.idTech,
    };
    console.log("availability :" + valueAvailability);
    return fetch("http://localhost:4000/changeDisponibility", {
      method: "POST",
      headers: {
        Authentication: rootstore.stateUIStore.tokenAuth,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((data) => data) //print data to console
      .catch((err) => console.log("Request Failed", err)); // Catch errors
  }

  const declineCall = async () => {
    const data_to_send = {
      type: "refuse",
      user_id: idUserClient,
    };

    const fetchAvaiability = await availabilityFetch(true);
    if (fetchAvaiability.status == 200) {
      rootstore.stateUIStore.setRequestReceived(false);
    }

    socket.send(data_to_send);
    rootstore.stateUIStore.setNameClient(null);
    rootstore.stateUIStore.setSurnameClient(null);
    rootstore.stateUIStore.setEmailClient(null);
    rootstore.stateUIStore.setUsernameClient(null);
    setIdUserClient(null);
  };

  const leaveCall = async () => {
    console.log(call);
    console.log(connectionDataChannel);
    console.log(peerTech);
    console.log(call.current.open);
    await availabilityFetch(true);
    rootstore.stateUIStore.setCallEnded(true);
    rootstore.stateUIStore.setCallAccepted(false);
    rootstore.stateUIStore.setStreamTech(undefined);
    rootstore.stateUIStore.setRequestReceived(false);
    rootstore.datasetStore.resetStates();
    rootstore.datasetStore.resetAlarms();
    rootstore.datasetStore.resetMeasurements();
    setIdUserClient(null);
    audioTech.current = null;
    audioUser.current = null;

    // come qui https://github.com/adrianhajdin/project_video_chat/blob/master/client/src/Context.js line 78
    call.current.close();
    connectionDataChannel.current.close();
    peerTech.current.destroy();
    console.log(call.current.open);
    console.log(call);
    console.log(connectionDataChannel);
    console.log(peerTech);
  };

  const setDataRequestClient = () => {
    const data_registration = {
      type: "registration",
      idUser: rootstore.stateUIStore.idTech,
    };

    socket.send(data_registration);

    socket.on("message", async (data) => {
      if (data.type === "call") {
        const fetchAvaiability = await availabilityFetch(false);
        if (fetchAvaiability.status == 200) {
          rootstore.stateUIStore.setRequestReceived(true);
        }

        rootstore.stateUIStore.setNameClient(data.first_name);
        rootstore.stateUIStore.setSurnameClient(data.last_name);
        rootstore.stateUIStore.setEmailClient(data.email);
        rootstore.stateUIStore.setUsernameClient(data.username);
        setIdUserClient(data.user_id);
      }
    });
  };

  useEffect(() => {
    if (!requestReceived) {
      setDataRequestClient();
    }
  }, []);

  return (
    <div id="wrapper-callarea">
      <h2>Call Area</h2>

      {!callAccepted && callEnded && requestReceived && (
        <>
          <p>Do you accept this request?</p>
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
        </>
      )}

      {callAccepted && !callEnded && (
        <>
          <p>On call</p>
          {/* {peerTech.current.pingInterval < 100 && <p>Good connection</p>}
          {peerTech.current.pingInterval > 100 &&
            peerTech.current.pingInterval < 300 && <p>Medium connection</p>}
          {peerTech.current.pingInterval > 300 && <p>Bad connection</p>} */}
          <audio ref={audioTech} />
          <Sidebar leaveCall={leaveCall} />
          <audio ref={audioUser} />
        </>
      )}
    </div>
  );
});

export default CallArea;

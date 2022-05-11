import { observer } from "mobx-react-lite";
import { useStore } from "../../../Utilities/contextProvider";
import AlarmsArea from "./AlarmsArea/AlarmsArea";
import StatesArea from "./StatesArea/StatesArea";
import MeasurementsArea from "./MeasurementsArea/MeasurementsArea";
import { Button } from "@material-ui/core";
import "./DataArea.css";
import { useState, useEffect } from "react";
import Peer from "peerjs";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4000";

const DataArea = observer((props) => {
  const rootstore = useStore();

  const socket = socketIOClient(ENDPOINT);

  const [idUserClient, setIdUserClient] = useState(null);
  const [nameClient, setNameClient] = useState(null);
  const [surnameClient, setSurnameClient] = useState(null);
  const [emailClient, setEmailClient] = useState(null);
  const [usernameClient, setUsernameClient] = useState(null);
  const [requestReceived, setRequestReceived] = useState(false);

  const { /*techVideo, userVideo,*/ peerTech } =
    props.vars;
  
  let {call, connectionDataChannel} = props.vars;

  const { callAccepted, callEnded, availabilityTech } = rootstore.stateUIStore;

  const sendCall = (idUserClient) => {
    const peer = new Peer(
      rootstore.stateUIStore.idTech /* var con username del tecnico */,
      {
        host: "localhost",
        port: 9000,
        path: "/myapp",
      }
    );

    rootstore.stateUIStore.setCallAccepted(true);
    rootstore.stateUIStore.setCallEnded(false);

    peerTech.current = peer;

    navigator.mediaDevices
      .getUserMedia({ /*video: true,*/ audio: true })
      .then((mediaStream) => {
        rootstore.stateUIStore.setStreamTech(mediaStream);

        // techVideo.current.srcObject = mediaStream;
        // techVideo.current.play();

        call = peerTech.current.call(idUserClient, mediaStream);

        // call.on("stream", (remoteStream) => {
        //   userVideo.current.srcObject = remoteStream;
        //   userVideo.current.play();
        // });
      });

    connectionDataChannel = peer.connect(idUserClient); // provare anche peerTech.current.connect(idUserClient);

    connectionDataChannel.on("open", () => {
    


      connectionDataChannel.on("data", function (data) {
        console.log(data);

        // setting arrays to stamp later, exception if json parse fails
        rootstore.datasetStore.statesFromJSON(
          JSON.parse(data).status
        );
        rootstore.datasetStore.alarmsFromJSON(
          JSON.parse(data).alarms
        );
        rootstore.datasetStore.measurementsFromJSON(
          JSON.parse(data).measurements
        );
      });
    });
  };

  const declineCall = () => {
    const data_to_send = {
      type: "refuse",
      user_id: idUserClient,
    };
    /*
    const fetchAvaiability = await availabilityFetch(true);
    if(fetchAvaiability.status== 200)
      rootstore.stateUIStore.setAvailabilityTech(true);
*/
    socket.send(data_to_send);
    setRequestReceived(false);
    setIdUserClient(null);
    setEmailClient(null);
    setUsernameClient(null);
    setNameClient(null);
    setSurnameClient(null);
  };

  const setDataRequestClient = () => {
    const data_registration = {
      type: "registration",
      idUser: rootstore.stateUIStore.idTech,
    };

    socket.send(data_registration);

    socket.on("message", (data) => {
      if (data.type === "call") {
        setNameClient(data.first_name);
        setSurnameClient(data.last_name);
        setEmailClient(data.email);
        setUsernameClient(data.username);
        setIdUserClient(data.user_id);
        setRequestReceived(true);
/*
        const fetchAvaiability = await availabilityFetch(false);
        if(fetchAvaiability.status== 200)
          rootstore.stateUIStore.setAvailabilityTech(false);
           */
      }
     
    });

/*
    async function availabilityFetch(valueAvailability) {
      
      const data = {
        disponibility: valueAvailability,
        user_id: rootstore.stateUIStore.idTech
      }
      console.log("availability :"+ valueAvailability);
      return fetch("http://localhost:4000/changeDisponibility", {
        method: "POST",
        headers: { 'Authentication': rootstore.stateUIStore.tokenAuth ,"Content-Type": "application/json" },
        body: JSON.stringify(data),
      }).then((data) => data)    //print data to console
      .catch(err => console.log('Request Failed', err)); // Catch errors
     
    }
    */
  };

  useEffect(() => {
    //if(!requestReceived)
    setDataRequestClient();
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
          <h3>Available for requests!</h3>
          <p>Waiting for new request down here:</p>
          {requestReceived && (
            <div id="request">
              <p>{nameClient}</p>
              <p>{surnameClient}</p>
              <p>{usernameClient}</p>
              <p>{emailClient}</p>
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

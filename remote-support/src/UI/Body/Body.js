import { observer } from "mobx-react-lite";
import { useEffect, useRef, useState } from "react";
import { useStore } from "../../Utilities/contextProvider";
import CallArea from "./CallArea/CallArea";
import DataArea from "./DataArea/DataArea";
import "./Body.css";
import Peer from "peerjs";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4000";

const Body = observer(() => {
  const rootstore = useStore();
  const techVideo = useRef(null);
  const userVideo = useRef(null);
  const call = useRef(null);
  const connectionDataChannel = useRef(null);
  const peerTech = useRef(null);
  const [stream, setStream] = useState(undefined);
  const [idUserClient, setIdUserClient] = useState(null);
  const [nameClient, setNameClient] = useState(null);
  const [surnameClient, setSurnameClient] = useState(null);
  const [companyClient, setCompanyClient] = useState(null);
  const [requestReceived, setRequestReceived] = useState(false);

  const { availabilityTech } = rootstore.stateUIStore;

  const settersDataArea = {
    setStream,
    setIdUserClient,
    setNameClient,
    setSurnameClient,
    setCompanyClient,
    setRequestReceived,
  };

  const varsDataArea = {
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
  };

  const settersCallArea = { setStream };

  const varsCallArea = {
    stream,
    techVideo,
    userVideo,
    call,
    connectionDataChannel,
    peerTech,
  };

  const setDataRequestClient = () => {
    const socket = socketIOClient(ENDPOINT);

    socket.send({
      identificazione: "tecnico",
      tipo: "registrazione",
      idTecnico: "tecnico1",
    });

    socket.on("message", (data) => {
      if (data.identificazione === "virtualDisplay") {
        if (data.tipo === "chiamata") {
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
    <div id="wrapper-body">
      <DataArea setters={settersDataArea} vars={varsDataArea} />
      <CallArea setters={settersCallArea} vars={varsCallArea} />
    </div>
  );
});

export default Body;

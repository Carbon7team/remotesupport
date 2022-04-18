import { makeAutoObservable } from "mobx";
import Peer from "peerjs";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4000";

// Da controllare i setter e stateUIStore observer
class BodyVM {
    constructor(rootstore){
        this.rootstore = rootstore;
        this.callAccepted = rootstore.stateUIStore.callAccepted;
        this.callEnded = rootstore.stateUIStore.callEnded;
        this.availabilityTech = rootstore.stateUIStore.availabilityTech;
        this.stream = rootstore.stateUIStore.stream;
        this.requestReceived = rootstore.stateUIStore.requestReceived;
        makeAutoObservable(this, {autoBind: true});
    }

    sendCall = (idUser) => {

        const peer = new Peer("tecnico1" /* var con username del tecnico */, {
          host: 'localhost',
          port: 9000,
          path: '/myapp'
        });
    
        this.callAccepted.setCallAccepted(true);
        this.callEnded.setCallEnded(false);
    
        //peerInstance.current = peer;
    
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((mediaStream) => {
          
          this.stream.setStream(mediaStream);
    
          //myVideo.current.srcObject = mediaStream;
          //myVideo.current.play();
    
          //const call = peerInstance.current.call(idUser, mediaStream)
    
          //call.on('stream', (remoteStream) => {
            //userVideo.current.srcObject = remoteStream
            //userVideo.current.play();
          //});
        });
    
        const connection = peer.connect(idUser);
    
        connection.on('open', () => {
          connection.on('data', function(data) {
            //setJsonData(JSON.stringify(data)); // setting string JSON to stamp later
          });
        });
    
    }

    setDataRequestClient() {

        const socket = socketIOClient(ENDPOINT);
        
        socket.send({"identificazione" : "tecnico","tipo": "registrazione","idTecnico": "tecnico1"});
        
        socket.on("message", data => {
          if(data.identificazione === "virtualDisplay") {
            if(data.tipo === "chiamata") {
  
              this.rootstore.stateUIStore.setNameClient(data.name);
              this.rootstore.stateUIStore.setUsernameClient(data.username);
              this.rootstore.stateUIStore.setCompanyClient(data.company);
              this.rootstore.stateUIStore.setIdUserClient(data.idUserClient);
              this.rootstore.stateUIStore.setRequestReceived(true);

  
            }
          }
        });
  
      }
}

export default BodyVM;
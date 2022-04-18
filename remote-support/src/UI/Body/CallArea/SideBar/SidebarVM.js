import { makeAutoObservable } from "mobx";

class SideBarVM {

    constructor(rootstore){
        this.rootstore = rootstore;
        this.stateUIStore = rootstore.stateUIStore;
        this.callAccepted = stateUIStore.callAccepted;
        this.callEnded = stateUIStore.callEnded;
        makeAutoObservable(this, {autoBind: true});
    }

    toggleAudio = () => {
        //stream.getAudioTracks().forEach(track => track.enabled = !track.enabled);
      }
    
    toggleVideo = () => {
        //stream.getVideoTracks().forEach(track => track.enabled = !track.enabled);
      }

    leaveCall = (call, connectionDataChannel, peerTech) => {

        // this.stateUIStore.setCallEnded(true);
        // this.stateUIStore.setCallAccepted(false);
        // this.stateUIStore.setStream(undefined);
        // this.stateUIStore.setJsonData(undefined);
    
        // call.close()
        // connectionDataChannel.close();
        // peerTech.destroy();

    
      }

}

export default SideBarVM;
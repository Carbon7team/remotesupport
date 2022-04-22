import { makeAutoObservable } from "mobx";

class StateUIStore {
    constructor(rootstore){
        this.rootstore = rootstore;
        this.logged = true;
        this.callAccepted = false;
        this.callEnded = true;
        this.stream = undefined;
        this.jsonData = null;
        this.idUserClient = null;
        this.nameClient = null;
        this.surnameClient = null;
        this.companyClient = null;
        this.requestReceived = false;
        this.peerTech = undefined;
        this.availabilityTech = false;
        this.filterValueAlarms = undefined;
        this.filterValueStates = undefined;
        this.filterValueMeasurements = undefined;
        makeAutoObservable(this, {rootstore: false});
    }

    setLogged(boolValue){
        this.logged = boolValue;
    }

    setCallAccepted(boolValue){
        this.callAccepted = boolValue;
    }

    setCallEnded(boolValue){
        this.callEnded = boolValue;
    }

    setStream(mediaStreamValue){
        this.stream = mediaStreamValue;
    }

    setJsonData(stringValue){
        this.jsonData = stringValue;
    }

    setIdUserClient(stringValue){
        this.idUserClient = stringValue;
    }

    setNameClient(stringValue){
        this.nameClient = stringValue;
    }
    
    setCompanyClient(stringValue){
        this.companyClient = stringValue;
    }

    setRequestReceived(boolValue){
        this.requestReceived = boolValue;
    }

    setPeerTech(peerValue){
        this.peerTech = peerValue;
    }

    setAvailabilityTech(boolValue){
        this.availabilityTech = boolValue;
    }

    setFilterValueAlarms(stringValue){
        this.filterValueAlarms = stringValue;
    }

    setFilterValueStates(stringValue){
        this.filterValueStates = stringValue;
    }

    setFilterValueMeasurements(stringValue){
        this.filterValueMeasurements = stringValue;
    }

}

export default StateUIStore;
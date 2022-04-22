import { action, makeObservable, observable } from "mobx";

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
        makeObservable(this, {
            logged: observable,
            callAccepted: observable,
            callEnded: observable,
            stream: observable,
            jsonData: observable,
            idUserClient: observable,
            nameClient: observable,
            surnameClient: observable,
            companyClient: observable,
            requestReceived: observable,
            peerTech: observable,
            availabilityTech: observable,
            filterValueAlarms: observable,
            filterValueStates: observable,
            filterValueMeasurements: observable,
            setLogged: action,
            setCallAccepted: action,
            setCallEnded: action,
            setStream: action,
            setJsonData: action,
            setIdUserClient: action,
            setNameClient: action,
            setSurnameClient: action,
            setCompanyClient: action,
            setRequestReceived: action,
            setPeerTech: action,
            setAvailabilityTech: action,
            setFilterValueAlarms: action,
            setFilterValueStates: action,
            setFilterValueMeasurements: action
        });
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

    setSurnameClient(stringValue){
        this.surnameClient = stringValue;
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
import { makeAutoObservable } from 'mobx'
class StateUIStore {
    constructor(rootstore){
        this.rootstore = rootstore;
        this.logged = false;
        this.callAccepted = false;
        this.callEnded = true;
        this.stream = undefined;
        this.jsonData = null;
        this.idUserClient = null;
        this.nameClient = null;
        this.surnameClient = null;
        this.companyClient = null;
        this.peerTech = undefined;
        this.avaibilityTech = false;
        this.filterValueAlarms = undefined;
        this.filterValueStates = undefined;
        this.filterValueMeasurements = undefined;
        makeAutoObservable(this,{rootstore: false})
    }

    set setLogged(boolValue){
        this.logged = boolValue;
    }

    set setCallAccepted(boolValue){
        this.callAccepted = boolValue;
    }

    set setCallEnded(boolValue){
        this.callEnded = boolValue;
    }

    set setStream(mediaStreamValue){
        this.stream = mediaStreamValue;
    }

    set setJsonData(stringValue){
        this.jsonData = stringValue;
    }

    set setIdUserClient(stringValue){
        this.idUserClient = stringValue;
    }

    set setNameClient(stringValue){
        this.nameClient = stringValue;
    }
    
    set setCompanyClient(stringValue){
        this.companyClient = stringValue;
    }

    set setPeerTech(peerValue){
        this.peerTech = peerValue;
    }

    set setAvaiabilityTech(boolValue){
        this.avaibilityTech = boolValue;
    }

    set setfilterValueAlarms(stringValue){
        this.filterValueAlarms = stringValue;
    }

    set setfilterValueStates(stringValue){
        this.filterValueStates = stringValue;
    }

    set setfilterValueMeasurements(stringValue){
        this.filterValueMeasurements = stringValue;
    }

}

export default StateUIStore;
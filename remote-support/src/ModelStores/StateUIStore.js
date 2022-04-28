import { action, makeObservable, observable } from "mobx";

class StateUIStore {
  constructor(rootstore) {
    this.rootstore = rootstore;
    this.logged = true;
    this.callAccepted = true;
    this.callEnded = false;
    this.jsonData =
      '{"states":[{"code": "S000","name": "NomeS000","active": true},{"code": "S001","name": "NomeS001","active": false}],"alarms":[{"code": "A000","name": "NomeA000","severity": "Critical"},{"code": "A001","name": "NomeA001","severity": "Warning"}],"measurements":[{"code": "M000","name": "NomeM000","value": 30,"unitOfMeasure": "Unità di misura"},{"code": "M001","name": "NomeM001","value": 20,"unitOfMeasure": "UdM"}]}';
    this.availabilityTech = true;
    this.selectAvailability = { value: "Available", label: "Available" };
    this.streamTech = undefined;
    this.idTech = undefined;
    this.tokenAuth = undefined;
    makeObservable(this, {
      logged: observable,
      callAccepted: observable,
      callEnded: observable,
      jsonData: observable,
      availabilityTech: observable,
      selectAvailability: observable,
      streamTech: observable,
      idTech: observable,
      tokenAuth: observable,
      setLogged: action,
      setCallAccepted: action,
      setCallEnded: action,
      setJsonData: action,
      setAvailabilityTech: action,
      setSelectAvailability: action,
      setStreamTech: action,
      setIdTech: action,
      setTokenAuth: action,
    });
  }

  setLogged(boolValue) {
    this.logged = boolValue;
  }

  setCallAccepted(boolValue) {
    this.callAccepted = boolValue;
  }

  setCallEnded(boolValue) {
    this.callEnded = boolValue;
  }

  setJsonData(stringValue) {
    this.jsonData = stringValue;
  }

  setAvailabilityTech(boolValue) {
    this.availabilityTech = boolValue;
  }

  setSelectAvailability(stringValues) {
    this.selectAvailability = stringValues;
  }

  setStreamTech(MediaStreamValue) {
    this.streamTech = MediaStreamValue;
  }

  setIdTech(stringValue) {
    this.idTech = stringValue;
  }

  setTokenAuth(stringValue) {
    this.tokenAuth = stringValue;
  }
}

export default StateUIStore;

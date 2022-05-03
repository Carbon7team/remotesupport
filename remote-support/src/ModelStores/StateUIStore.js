import { action, makeObservable, observable } from "mobx";

class StateUIStore {
  constructor(rootstore) {
    this.rootstore = rootstore;
    this.logged = true;
    this.callAccepted = true;
    this.callEnded = false;
    this.availabilityTech = true;
    this.selectAvailability = { value: "Available", label: "Available" };
    this.streamTech = undefined;
    this.idTech = undefined;
    this.tokenAuth = undefined;
    makeObservable(this, {
      logged: observable,
      callAccepted: observable,
      callEnded: observable,
      availabilityTech: observable,
      selectAvailability: observable,
      streamTech: observable,
      idTech: observable,
      tokenAuth: observable,
      setLogged: action,
      setCallAccepted: action,
      setCallEnded: action,
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

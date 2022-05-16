import { action, makeObservable, observable } from "mobx";

class StateUIStore {
  constructor(rootstore) {
    this.rootstore = rootstore;
    this.logged = false;
    this.callAccepted = false;
    this.callEnded = true;
    this.availabilityTech = false;
    this.selectAvailability = { value: "Available", label: "Available" };
    this.streamTech = undefined;
    this.idTech = undefined;
    this.tokenAuth = undefined;
    this.requestReceived = false;
    this.nameClient = null;
    this.surnameClient = null;
    this.emailClient = null;
    this.usernameClient = null;
    makeObservable(this, {
      logged: observable,
      callAccepted: observable,
      callEnded: observable,
      availabilityTech: observable,
      selectAvailability: observable,
      streamTech: observable,
      idTech: observable,
      tokenAuth: observable,
      requestReceived: observable,
      nameClient: observable,
      surnameClient: observable,
      emailClient: observable,
      usernameClient: observable,
      setLogged: action,
      setCallAccepted: action,
      setCallEnded: action,
      setAvailabilityTech: action,
      setSelectAvailability: action,
      setStreamTech: action,
      setIdTech: action,
      setTokenAuth: action,
      setRequestReceived: action,
      setNameClient: action,
      setSurnameClient: action,
      setEmailClient: action,
      setUsernameClient: action,
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

  setRequestReceived(boolValue) {
    this.requestReceived = boolValue;
  }

  setNameClient(stringValue) {
    this.nameClient = stringValue;
  }

  setSurnameClient(stringValue) {
    this.surnameClient = stringValue;
  }

  setEmailClient(stringValue) {
    this.emailClient = stringValue;
  }

  setUsernameClient(stringValue) {
    this.usernameClient = stringValue;
  }
}

export default StateUIStore;

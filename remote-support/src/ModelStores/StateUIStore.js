import { action, makeObservable, observable } from "mobx";

class StateUIStore {
  constructor(rootstore) {
    this.rootstore = rootstore;
    this.logged = true;
    this.callAccepted = true;
    this.callEnded = false;
    this.jsonData = null;
    this.availabilityTech = true;
    this.selectAvailability = { value: "Available", label: "Available" };
    makeObservable(this, {
      logged: observable,
      callAccepted: observable,
      callEnded: observable,
      jsonData: observable,
      availabilityTech: observable,
      selectAvailability: observable,
      setLogged: action,
      setCallAccepted: action,
      setCallEnded: action,
      setJsonData: action,
      setAvailabilityTech: action,
      setSelectAvailability: action,
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
}

export default StateUIStore;

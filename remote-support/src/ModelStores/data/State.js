import { makeAutoObservable } from "mobx";

class State {
  constructor(code = "", name = "", active = false) {
    this.Code = code;
    this.Name = name;
    this.Active = active;
    makeAutoObservable(this);
  }

  get code() {
    return this.Code;
  }

  get name() {
    return this.Name;
  }

  get active() {
    return this.Active;
  }
}

export default State;

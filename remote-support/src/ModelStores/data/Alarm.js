import { makeAutoObservable } from "mobx";

class Alarm {
  constructor(code = "", name = "", severity = "") {
    this.Code = code;
    this.Name = name;
    this.Severity = severity;
    makeAutoObservable(this);
  }

  get code() {
    return this.Code;
  }

  get name() {
    return this.Name;
  }

  get severity() {
    return this.Severity;
  }
}

export default Alarm;

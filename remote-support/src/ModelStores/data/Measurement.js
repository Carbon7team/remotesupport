import { makeAutoObservable } from "mobx";

class Measurement {
  constructor(code = "", name = "", value = NaN, unitOfMeasure = "") {
    this.Code = code;
    this.Name = name;
    this.Value = value;
    this.UnitOfMeasure = unitOfMeasure;
    makeAutoObservable(this);
  }

  get code() {
    return this.Code;
  }

  get name() {
    return this.Name;
  }

  get value() {
    return NaN ? null : this.Value;
  }

  get unitOfMeasure() {
    return this.UnitOfMeasure;
  }
}

export default Measurement;

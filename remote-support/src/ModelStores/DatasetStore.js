import { makeObservable, observable, action, computed } from "mobx";
import State from "./data/State";
import Alarm from "./data/Alarm";
import Measurement from "./data/Measurement";

class DatasetStore {
  constructor(rootstore) {
    this.rootstore = rootstore;
    this.states = [
      // new State("S000", "stato attivo", true),
      // new State("S001", "stato non attivo", false),
    ];
    this.alarms = [
      // new Alarm("A000", "allarme critico", "Critical"),
      // new Alarm("A001", "allarme warning", "Warning"),
      // new Alarm("A002", "allarme nothing", "Nothing"),
    ];
    this.measurements = [
      // new Measurement("M015", "percentuale batteria", 15, "%"),
      // new Measurement("M014", "L1 output energia", 20, "V"),
      // new Measurement("M048", "L2 output energia", 10, "V"),
      // new Measurement("M045", "L1 bypass", 30, "MW"),
      // new Measurement("M070", "L2 bypass", 100, "MW"),
      // new Measurement("M038", "L1 input energia", 70, "V"),
      // new Measurement("M064", "L2 input energia", 65, "V"),
    ];
    makeObservable(this, {
      states: observable,
      alarms: observable,
      measurements: observable,
      activeStates: computed,
      notActiveStates: computed,
      criticalAlarms: computed,
      warningAlarms: computed,
      batteryMeasurements: computed,
      inputMeasurements: computed,
      outputMeasurements: computed,
      bypassMeasurements: computed,
      statesFromJSON: action,
      alarmsFromJSON: action,
      measurementsFromJSON: action,
      resetAlarms: action,
      resetStates: action,
      resetMeasurements: action,
    });
  }

  get activeStates() {
    return this.states.filter((state) => state.active);
  }

  get notActiveStates() {
    return this.states.filter((state) => !state.active);
  }

  get criticalAlarms() {
    return this.alarms.filter((alarm) => alarm.severity === "Critical");
  }

  get warningAlarms() {
    return this.alarms.filter((alarm) => alarm.severity === "Warning");
  }

  get batteryMeasurements() {
    return this.measurements.filter(
      (measurement) => measurement.code >= "M015" && measurement.code <= "M031"
    );
  }

  get inputMeasurements() {
    return this.measurements.filter(
      (measurement) =>
        (measurement.code >= "M032" && measurement.code <= "M038") ||
        (measurement.code >= "M064" && measurement.code <= "M069")
    );
  }

  get outputMeasurements() {
    return this.measurements.filter(
      (measurement) =>
        (measurement.code >= "M000" && measurement.code <= "M014") ||
        (measurement.code >= "M048" && measurement.code <= "M063")
    );
  }

  get bypassMeasurements() {
    return this.measurements.filter(
      (measurement) =>
        (measurement.code >= "M039" && measurement.code <= "M045") ||
        (measurement.code >= "M070" && measurement.code <= "M075")
    );
  }

  resetAlarms() {
    this.alarms.clear();
  }

  resetStates() {
    this.states.clear();
  }

  resetMeasurements() {
    this.measurements.clear();
    console.log(this.measurements);
  }

  statesFromJSON(jsonDataParsed) {
    this.states.replace(
      jsonDataParsed.map((state) => {
        return new State(state.code, state.name, state.active);
      })
    );
  }

  alarmsFromJSON(jsonDataParsed) {
    this.alarms.replace(
      jsonDataParsed.map((alarm) => {
        return new Alarm(alarm.code, alarm.name, alarm.severity);
      })
    );
  }

  measurementsFromJSON(jsonDataParsed) {
    this.measurements.replace(
      jsonDataParsed.map((measurement) => {
        return new Measurement(
          measurement.code,
          measurement.name,
          measurement.value,
          measurement.unitOfMeasure
        );
      })
    );
  }
}

export default DatasetStore;

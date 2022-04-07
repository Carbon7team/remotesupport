import {makeObservable, observable, action, computed } from "mobx-react-lite";
import State from "./data/State";
import Alarm from "./data/Alarm";
import Measurement from "./data/Measurement";

class Dataset {
    constructor(){
        this.states = [];
        this.alarms = [];
        this.measurements = [];
        makeObservable(this, {
            states: observable,
            alarms: observable,
            measurements: observable,
            activeStates: computed,
            criticalAlarms: computed,
            warningAlarms: computed,
            statesFromJSON: action,
            alarmsFromJSON: action,
            measurementsFromJSON: action,
            resetAlarms: action,
            resetStates: action,
            resetMeasurements: action
        });
    }

    get activeStates(){
        return this.states.filter(state => state.active);
    }

    get notActiveStates(){
        return this.states.filter(state => !state.active);
    }

    get criticalAlarms(){
        return this.alarms.filter(alarm => alarm.severity === "critical");
    }

    get warningAlarms(){
        return this.alarms.filter(alarm => alarm.severity === "warning");
    }

    resetAlarms(){
        this.alarms.clear();
    }

    resetStates(){
        this.states.clear();
    }

    resetMeasurements(){
        this.measurements.clear();
    }

    statesFromJSON(jsonDataParsed){

        this.states = jsonDataParsed.map(state => {return new State(state.code, state.name, state.active)});

        // this.states.replace(
        //     obj.status.map(
        //         state => {return new State(state.code, state.name, state.active)}
        //     )
        // );

    }

    alarmsFromJSON(jsonDataParsed){

        // var obj = JSON.parse(jsonData);

        // map or for Each ?
        
        this.alarms = jsonDataParsed.map(alarm => {return new Alarm(alarm.code, alarm.name, alarm.severity)});

        // this.alarms.replace(
        //     obj.alarms.map(
        //         alarm => {return new Alarm(alarm.code, alarm.name, alarm.severity)}
        //     )
        // );

        
    }

    measurementsFromJSON(jsonDataParsed){

        this.measurements = jsonDataParsed.map(measurement => {return new Measurement(measurement.code, measurement.name, measurement.value, measurement.type)});

        // this.measurements.replace(
        //     obj.measurements.map(
        //         measurement => {return new Measurement(measurement.code, measurement.name, measurement.value, measurement.type)}
        //     )
        // );

    }
}

export default Dataset;
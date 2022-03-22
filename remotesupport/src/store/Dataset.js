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
            fromJSON: action
        });
    }

    get notActiveStates(){
        return this.states.filter(state => !state.active);
    }

    get criticalAlarms(){
        return this.alarms.filter(alarm => alarm.isCritical);
    }

    reset(){
        this.states.clear();
        this.alarms.clear();
        this.measurements.clear();
    }

    fromJSON(jsonData){

        var obj = JSON.parse(jsonData);

        // map or for Each ?

        this.states.replace(
            obj.status.map(
                state => {return new State(state.code, state.name, state.active)}
            )
        );
        
        this.alarms.replace(
            obj.alarms.map(
                alarm => {return new Alarm(alarm.code, alarm.name, alarm.severity)}
            )
        );

        this.measurements.replace(
            obj.measurements.map(
                measurement => {return new Measurement(measurement.code, measurement.name, measurement.value, measurement.type)}
            )
        );
    }
}

export default Dataset;
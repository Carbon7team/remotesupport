import React from "react";
import {makeObservable, observable, action } from "mobx-react-lite";

class Dataset {
    constructor(){
        this.states = [];
        this.alarms = [];
        makeObservable(this, {
            states: observable,
            alarms: observable,
            fromJSON: action
        })
    }

    fromJSON(jsonData){
        this.states.replace(jsonData.states);
        this.alarms.replace(jsonData.alarms);
    }
}
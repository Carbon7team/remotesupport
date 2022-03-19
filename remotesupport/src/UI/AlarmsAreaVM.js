import React from "react";
import Dataset from '../store'
import { computed, makeObservable, observable, action } from 'mobx-react-lite';

export class AlarmsAreaVM {

    constructor(dataset){
        this.states = dataset.states;
        this.alarms = dataset.alarms;
        makeObservable(this, {
            states : observable,
            alarms : observable
        });
    }
    
}
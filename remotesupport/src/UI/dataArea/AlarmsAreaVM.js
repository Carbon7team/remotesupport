import React from "react";
import Dataset from '../store'
import { computed, makeAutoObservable, observable, action } from 'mobx-react-lite';

export class AlarmsAreaVM {

    constructor(dataset){
        this.dataset = dataset;
        this.alarms = dataset.alarms;
        makeAutoObservable(this, {alarms: false}, {autoBind: true});
    }

    renderAllAlarms = () => {
        this.alarms.fromJSON()
        return(
            this.alarms.forEach(
                alarm => { return(<li>{alarm.code}:{alarm.name}</li>)}
            )
    );
    }

    renderCriticalAlarms = () => {
        return(
                this.alarms.criticalAlarms.forEach(
                    alarm => { return(<li>{alarm.code}:{alarm.name}</li>)}
                )
        );
    }

    renderWarningAlarms = () => {
        return(
                this.alarms.warningAlarms.forEach(
                    alarm => { return(<li>{alarm.code}:{alarm.name}</li>)}
                )
        );
    }
    
}
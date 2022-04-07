import React, { useContext } from "react";
import Dataset from '../store'
import { computed, makeAutoObservable, observable, action } from 'mobx-react-lite';
import { ContextCall } from "../CallArea/ContextCall";

const jsonData = useContext(ContextCall);

export class AlarmsAreaVM {

    constructor(dataset){
        this.dataset = dataset;
        this.jsonData = jsonData;
        this.options = [{value: 'All', label: 'All'},
                        {value: 'Criticals', label: 'Criticals'},
                        {value: 'Warnings', label: 'Warnings'}];
        this.alarmType = {value: 'All', label: 'All'};
        makeAutoObservable(this, {autoBind: true});
    }

    handleChange = (optionValue) => {
        this.alarmType = optionValue;
    }

    renderAllAlarms = (jsonData) => {
        try {

            this.dataset.alarmsFromJSON(JSON.parse(jsonData).alarms);

            return(
                this.dataset.alarms.forEach(
                    alarm => { return(<li>{alarm.code}:{alarm.name}</li>)}
                )
            );

        } catch (error) {

            this.dataset.resetAlarms();
            return(<p>Data not avaible!</p>);

        }

    }

    renderCriticalAlarms = (jsonData) => {
        try {

            this.dataset.alarmsFromJSON(JSON.parse(jsonData).alarms);
            
            return(
                this.dataset.alarms.criticalAlarms.forEach(
                    alarm => { return(<li>{alarm.code}:{alarm.name}</li>)}
                )
            );

        } catch (error) {
            
            this.dataset.resetAlarms();
            return(<p>Data not avaible!</p>);
            
        }
    }

    renderWarningAlarms = (jsonData) => {
        try {
            this.dataset.alarmsFromJSON(JSON.parse(jsonData).alarms);
            return(
                this.dataset.alarms.warningAlarms.forEach(
                    alarm => { return(<li>{alarm.code}:{alarm.name}</li>)}
                )
            );
        } catch (error) {
            
            this.dataset.resetAlarms();
            return(<p>Data not avaible!</p>);

        }
    }
    
}
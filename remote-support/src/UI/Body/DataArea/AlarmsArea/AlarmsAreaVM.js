import { makeAutoObservable } from 'mobx';

export class AlarmsAreaVM {

    constructor(rootstore){
        this.rootstore = rootstore;
        this.datasetStore = rootstore.datasetStore;
        this.stateUIStore = rootstore.stateUIStore;
        this.options = [{value: 'All', label: 'All'},
                        {value: 'Criticals', label: 'Criticals'},
                        {value: 'Warnings', label: 'Warnings'}];
        this.filterValueAlarms = rootstore.stateUIStore.filterValueAlarms;
        this.jsonData = rootstore.stateUIStore.jsonData;
        makeAutoObservable(this, {rootstore: false, stateUIStore: false}, {autoBind: true});
    }

    handleChange = (optionValue) => {
        this.stateUIStore.setFilterValueAlarms(optionValue);
    }

    renderAllAlarms(jsonData) {
        try {

            this.datasetStore.alarmsFromJSON(JSON.parse(jsonData).alarms);

            return(
                this.datasetStore.alarms.forEach(
                    alarm => <li className={() => alarm.severity === "Critical" ? "critical-item" : "warning-item"}>{alarm.code}: {alarm.name}</li>
                )
            );

        } catch (error) {

            this.datasetStore.resetAlarms();
            return(<p>Data not available!</p>);

        }

    }

    renderCriticalAlarms(jsonData) {
        try {

            this.datasetStore.alarmsFromJSON(JSON.parse(jsonData).alarms);
            
            return(
                this.datasetStore.alarms.criticalAlarms.forEach(
                    alarm => <li className="critical-item">{alarm.code}: {alarm.name}</li>
                )
            );

        } catch (error) {
            
            this.datasetStore.resetAlarms();
            return(<p>Data not available!</p>);
            
        }
    }

    renderWarningAlarms(jsonData) {
        try {
            this.datasetStore.alarmsFromJSON(JSON.parse(jsonData).alarms);
            return(
                this.datasetStore.alarms.warningAlarms.forEach(
                    alarm => <li className="warning-item">{alarm.code}: {alarm.name}</li>
                )
            );
        } catch (error) {
            
            this.datasetStore.resetAlarms();
            return(<p>Data not available!</p>);

        }
    }
    
}
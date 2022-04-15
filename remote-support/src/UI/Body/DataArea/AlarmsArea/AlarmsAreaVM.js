import { makeAutoObservable } from 'mobx-react-lite';

export class AlarmsAreaVM {

    constructor(rootstore){
        this.rootstore = rootstore;
        this.options = [{value: 'All', label: 'All'},
                        {value: 'Criticals', label: 'Criticals'},
                        {value: 'Warnings', label: 'Warnings'}];
        this.filterValueAlarms = rootstore.stateUIStore.filterValueAlarms;
        makeAutoObservable(this, {autoBind: true});
    }

    handleChange(optionValue) {
        this.rootstore.stateUIStore.setFilterValueAlarms(optionValue);
    }

    renderAllAlarms = (jsonData) => {
        try {

            this.rootstore.datasetStore.alarmsFromJSON(JSON.parse(jsonData).alarms);

            return(
                this.rootstore.datasetStore.alarms.forEach(
                    alarm => { return(<li className={() => {alarm.severity === "Critical" ? "critical-item" : "warning-item"}}>{alarm.code}:{alarm.name}</li>)}
                )
            );

        } catch (error) {

            this.rootstore.datasetStore.resetAlarms();
            return(<p>Data not avaible!</p>);

        }

    }

    renderCriticalAlarms = (jsonData) => {
        try {

            this.rootstore.datasetStore.alarmsFromJSON(JSON.parse(jsonData).alarms);
            
            return(
                this.rootstore.datasetStore.alarms.criticalAlarms.forEach(
                    alarm => { return(<li className="critical-item">{alarm.code}:{alarm.name}</li>)}
                )
            );

        } catch (error) {
            
            this.rootstore.datasetStore.resetAlarms();
            return(<p>Data not avaible!</p>);
            
        }
    }

    renderWarningAlarms = (jsonData) => {
        try {
            this.rootstore.datasetStore.alarmsFromJSON(JSON.parse(jsonData).alarms);
            return(
                this.rootstore.datasetStore.alarms.warningAlarms.forEach(
                    alarm => { return(<li className="warning-item">{alarm.code}:{alarm.name}</li>)}
                )
            );
        } catch (error) {
            
            this.rootstore.datasetStore.resetAlarms();
            return(<p>Data not avaible!</p>);

        }
    }
    
}
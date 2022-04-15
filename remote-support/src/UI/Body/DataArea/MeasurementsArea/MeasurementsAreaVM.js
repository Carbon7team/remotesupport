class MeasurementsAreaVM {
    constructor(rootstore){
        this.rootstore = rootstore;
        this.options = [{value: 'Battery', label: 'Battery'},
                        {value: 'Input', label: 'Input'},
                        {value: 'Output', label: 'Output'},
                        {value: 'Bypass', label: 'Bypass'},
                        {value: 'Inverter', label: 'Inverter'}];
        this.filterValueMeasurments = rootstore.stateUIStore.filterValueAlarms;
        makeAutoObservable(this, {autoBind: true});
    }

    handleChange(optionValue) {
        this.rootstore.stateUIStore.setFilterValueMeasurements(optionValue);
    }

    renderBatteryMeasurements = (jsonData) => {
        try {

            this.rootstore.datasetStore.measurementsFromJSON(JSON.parse(jsonData).measurements);

            return(
                this.rootstore.datasetStore.measurements.forEach(
                    alarm => { return(<li className={() => {alarm.severity === "Critical" ? "critical-item" : "warning-item"}}>{alarm.code}:{alarm.name}</li>)}
                )
            );

        } catch (error) {

            this.rootstore.datasetStore.resetAlarms();
            return(<p>Data not avaible!</p>);

        }

    }
}

export default MeasurementsAreaVM;
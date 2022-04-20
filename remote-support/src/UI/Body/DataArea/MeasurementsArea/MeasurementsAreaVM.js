import { makeAutoObservable } from "mobx";

class MeasurementsAreaVM {
    constructor(rootstore){
        this.rootstore = rootstore;
        this.datasetStore = rootstore.datasetStore;
        this.stateUIStore = rootstore.stateUIStore;
        this.options = [{value: 'Battery', label: 'Battery'},
                        {value: 'Input', label: 'Input'},
                        {value: 'Output', label: 'Output'},
                        {value: 'Bypass', label: 'Bypass'},
                        {value: 'Inverter', label: 'Inverter'}];
        this.filterValueMeasurments = rootstore.stateUIStore.filterValueMeasurements;
        this.jsonData = rootstore.stateUIStore.jsonData;
        makeAutoObservable(this, {autoBind: true});
    }

    handleChange = (optionValue) => {
        this.stateUIStore.setFilterValueMeasurements(optionValue);
    }

    renderBatteryMeasurements(jsonData) {
        try {

            this.datasetStore.measurementsFromJSON(JSON.parse(jsonData).measurements);

            return(
                this.datasetStore.measurements.batteryMeasurements.forEach(
                    measurement => <li className="battery-measurement">{measurement.code}:{measurement.value}{measurement.type}</li>
                )
            );

        } catch (error) {

            this.datasetStore.resetMeasurements();
            return(<p>Data not available!</p>);

        }

    }

    renderInputMeasurements(jsonData) {
        try {

            this.datasetStore.measurementsFromJSON(JSON.parse(jsonData).measurements);

            return(
                this.datasetStore.measurements.inputMeasurements.forEach(
                    measurement => <li className="input-measurement">{measurement.code}:{measurement.value}{measurement.type}</li>
                )
            );

        } catch (error) {

            this.datasetStore.resetMeasurements();
            return(<p>Data not available!</p>);

        }
    }

    renderOutputMeasurements(jsonData) {
        try {

            this.datasetStore.measurementsFromJSON(JSON.parse(jsonData).measurements);

            return(
                this.datasetStore.measurements.outputMeasurements.forEach(
                    measurement => <li className="output-measurement">{measurement.code}:{measurement.value}{measurement.type}</li>
                )
            );

        } catch (error) {

            this.datasetStore.resetMeasurements();
            return(<p>Data not available!</p>);

        }
    }

    renderBypassMeasurements(jsonData) {
        try {

            this.datasetStore.measurementsFromJSON(JSON.parse(jsonData).measurements);

            return(
                this.datasetStore.measurements.bypassMeasurements.forEach(
                    measurement => <li className="bypass-measurement">{measurement.code}:{measurement.value}{measurement.type}</li>
                )
            );

        } catch (error) {

            this.datasetStore.resetMeasurements();
            return(<p>Data not available!</p>);

        }
    }

    renderInverterMeasurements(jsonData) {
        try {

            this.datasetStore.measurementsFromJSON(JSON.parse(jsonData).measurements);

            return(
                this.datasetStore.measurements.inverterMeasurements.forEach(
                    measurement => <li className="inverter-measurement">{measurement.code}:{measurement.value}{measurement.type}</li>
                )
            );

        } catch (error) {

            this.datasetStore.resetMeasurements();
            return(<p>Data not available!</p>);

        }
    }
}

export default MeasurementsAreaVM;
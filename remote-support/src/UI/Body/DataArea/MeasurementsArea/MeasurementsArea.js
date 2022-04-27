import { observer } from "mobx-react-lite";
import { useState } from "react";
import Select from "react-select";
import { useStore } from "../../../../Utilities/contextProvider";

const MeasurementsArea = observer(() => {
  const rootstore = useStore();

  const options = [
    { value: "Battery", label: "Battery" },
    { value: "Input", label: "Input" },
    { value: "Output", label: "Output" },
    { value: "Bypass", label: "Bypass" },
    { value: "Inverter", label: "Inverter" },
  ];

  const [filterValueMeasurements, setFilterValueMeasurements] = useState({
    value: "Battery",
    label: "Battery",
  });

  const { jsonData } = rootstore.stateUIStore;

  const handleChange = (optionValue) => {
    setFilterValueMeasurements(optionValue);
  };

  const renderBatteryMeasurements = (jsonData) => {
    try {
      rootstore.datasetStore.measurementsFromJSON(
        JSON.parse(jsonData).measurements
      );

      return rootstore.datasetStore.measurements.batteryMeasurements.forEach(
        (measurement) => (
          <li className="battery-measurement">
            {measurement.code}:{measurement.value}
            {measurement.unitOfMeasure}
          </li>
        )
      );
    } catch (error) {
      rootstore.datasetStore.resetMeasurements();
      return <p>Data not available!</p>;
    }
  };

  const renderInputMeasurements = (jsonData) => {
    try {
      rootstore.datasetStore.measurementsFromJSON(
        JSON.parse(jsonData).measurements
      );

      return rootstore.datasetStore.measurements.inputMeasurements.forEach(
        (measurement) => (
          <li className="input-measurement">
            {measurement.code}:{measurement.value}
            {measurement.unitOfMeasure}
          </li>
        )
      );
    } catch (error) {
      rootstore.datasetStore.resetMeasurements();
      return <p>Data not available!</p>;
    }
  };

  const renderOutputMeasurements = (jsonData) => {
    try {
      rootstore.datasetStore.measurementsFromJSON(
        JSON.parse(jsonData).measurements
      );

      return rootstore.datasetStore.measurements.outputMeasurements.forEach(
        (measurement) => (
          <li className="output-measurement">
            {measurement.code}:{measurement.value}
            {measurement.unitOfMeasure}
          </li>
        )
      );
    } catch (error) {
      rootstore.datasetStore.resetMeasurements();
      return <p>Data not available!</p>;
    }
  };

  const renderBypassMeasurements = (jsonData) => {
    try {
      rootstore.datasetStore.measurementsFromJSON(
        JSON.parse(jsonData).measurements
      );

      return rootstore.datasetStore.measurements.bypassMeasurements.forEach(
        (measurement) => (
          <li className="bypass-measurement">
            {measurement.code}:{measurement.value}
            {measurement.unitOfMeasure}
          </li>
        )
      );
    } catch (error) {
      rootstore.datasetStore.resetMeasurements();
      return <p>Data not available!</p>;
    }
  };

  const renderInverterMeasurements = (jsonData) => {
    try {
      rootstore.datasetStore.measurementsFromJSON(
        JSON.parse(jsonData).measurements
      );

      return rootstore.datasetStore.measurements.inverterMeasurements.forEach(
        (measurement) => (
          <li className="inverter-measurement">
            {measurement.code}:{measurement.value}
            {measurement.unitOfMeasure}
          </li>
        )
      );
    } catch (error) {
      rootstore.datasetStore.resetMeasurements();
      return <p>Data not available!</p>;
    }
  };

  return (
    <div className="data-wrapper">
      <div className="title-wrapper">
        <h2>Measurements</h2>
        <p>Filters:</p>
        <Select
          id="filterAlarms"
          options={options}
          defaultValue={options[0]}
          value={filterValueMeasurements}
          onChange={handleChange}
        />
      </div>

      <div className="data-wrapper">
        <ul>
          {filterValueMeasurements.value === "Battery" &&
            renderBatteryMeasurements(jsonData)}
          {filterValueMeasurements.value === "Input" &&
            renderInputMeasurements(jsonData)}
          {filterValueMeasurements.value === "Output" &&
            renderOutputMeasurements(jsonData)}
          {filterValueMeasurements.value === "Bypass" &&
            renderBypassMeasurements(jsonData)}
          {filterValueMeasurements.value === "Inverter" &&
            renderInverterMeasurements(jsonData)}
        </ul>
      </div>
    </div>
  );
});

export default MeasurementsArea;

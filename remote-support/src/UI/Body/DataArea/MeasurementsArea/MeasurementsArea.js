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
  ];

  const [filterValueMeasurements, setFilterValueMeasurements] = useState({
    value: "Battery",
    label: "Battery",
  });

  const handleChange = (optionValue) => {
    setFilterValueMeasurements(optionValue);
  };

  const renderBatteryMeasurements = () => {
    try {
      // rootstore.datasetStore.measurementsFromJSON(
      //   JSON.parse(jsonData).measurements
      // );

      return rootstore.datasetStore.batteryMeasurements.forEach(
        (measurement) => (
          <li className="battery-measurement">
            {measurement.name}:{measurement.value}
            {measurement.unitOfMeasure}
          </li>
        )
      );
    } catch (error) {
      rootstore.datasetStore.resetMeasurements();
      return <p>Data not available!</p>;
    }
  };

  const renderInputMeasurements = () => {
    try {
      // rootstore.datasetStore.measurementsFromJSON(
      //   JSON.parse(jsonData).measurements
      // );

      return rootstore.datasetStore.inputMeasurements.forEach((measurement) => (
        <li className="input-measurement">
          {measurement.code}:{measurement.value}
          {measurement.unitOfMeasure}
        </li>
      ));
    } catch (error) {
      rootstore.datasetStore.resetMeasurements();
      return <p>Data not available!</p>;
    }
  };

  const renderOutputMeasurements = () => {
    try {
      // rootstore.datasetStore.measurementsFromJSON(
      //   JSON.parse(jsonData).measurements
      // );

      return rootstore.datasetStore.outputMeasurements.forEach(
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

  const renderBypassMeasurements = () => {
    try {
      // rootstore.datasetStore.measurementsFromJSON(
      //   JSON.parse(jsonData).measurements
      // );

      return rootstore.datasetStore.bypassMeasurements.forEach(
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
            renderBatteryMeasurements}
          {filterValueMeasurements.value === "Input" && renderInputMeasurements}
          {filterValueMeasurements.value === "Output" &&
            renderOutputMeasurements}
          {filterValueMeasurements.value === "Bypass" &&
            renderBypassMeasurements}
        </ul>
      </div>
    </div>
  );
});

export default MeasurementsArea;

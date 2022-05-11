import { observer } from "mobx-react-lite";
import { useState } from "react";
import Select from "react-select";
import ListAllMeasurements from "./ListAllMeasurements";
import ListBatteryMeasurements from "./ListBatteryMeasurements";
import ListBypassMeasurements from "./ListBypassMeasurements";
import ListInputMeasurements from "./ListInputMeasurments";
import ListOutputMeasurements from "./ListOutputMeasurements";

const MeasurementsArea = observer(() => {
  const options = [
    { value: "All", label: "All" },
    { value: "Battery", label: "Battery" },
    { value: "Input", label: "Input" },
    { value: "Output", label: "Output" },
    { value: "Bypass", label: "Bypass" },
  ];

  const [filterValueMeasurements, setFilterValueMeasurements] = useState({
    value: "All",
    label: "All",
  });

  const handleChange = (optionValue) => {
    setFilterValueMeasurements(optionValue);
  };

  return (
    <div className="m-container-wrapper">
      <h2>Measurements</h2>
      <hr />
      <div className="filter-wrapper">
        <p>Apply Filters:</p>
        <Select
          id="filterAlarms"
          options={options}
          value={filterValueMeasurements}
          onChange={handleChange}
        />
      </div>
      <hr />
      <div className="data-wrapper">
        <ul>
          {filterValueMeasurements.value === "All" && <ListAllMeasurements />}
          {filterValueMeasurements.value === "Battery" && (
            <ListBatteryMeasurements />
          )}
          {filterValueMeasurements.value === "Input" && (
            <ListInputMeasurements />
          )}
          {filterValueMeasurements.value === "Output" && (
            <ListOutputMeasurements />
          )}
          {filterValueMeasurements.value === "Bypass" && (
            <ListBypassMeasurements />
          )}
        </ul>
      </div>
    </div>
  );
});

export default MeasurementsArea;

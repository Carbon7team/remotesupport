import { observer } from "mobx-react-lite";
import { useState } from "react";
import Select from "react-select";
import RenderAllMeasurements from "./RenderAllMeasurements";
import RenderBatteryMeasurements from "./RenderBatteryMeasurements";
import RenderBypassMeasurements from "./RenderBypassMeasurements";
import RenderInputMeasurements from "./RenderInputMeasurments";
import RenderOutputMeasurements from "./RenderOutputMeasurements";

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
    <div className="data-wrapper">
      <div className="title-wrapper">
        <h2>Measurements</h2>
        <p>Filters:</p>
        <Select
          id="filterAlarms"
          options={options}
          value={filterValueMeasurements}
          onChange={handleChange}
        />
      </div>

      <div className="data-wrapper">
        <ul>
          {console.log(filterValueMeasurements)}
          {filterValueMeasurements.value === "All" && (<RenderAllMeasurements />)}
          {filterValueMeasurements.value === "Battery" && (
            <RenderBatteryMeasurements />
          )}
          {filterValueMeasurements.value === "Input" && (
            <RenderInputMeasurements />
          )}
          {filterValueMeasurements.value === "Output" && (
            <RenderOutputMeasurements />
          )}
          {filterValueMeasurements.value === "Bypass" && (
            <RenderBypassMeasurements />
          )}
        </ul>
      </div>
    </div>
  );
});

export default MeasurementsArea;

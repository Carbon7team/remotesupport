import { observer } from "mobx-react-lite";
import { useState } from "react";
import Select from "react-select";
import RenderAllAlarms from "./RenderAllAlarms";
import RenderCriticalAlarms from "./RenderCriticalAlarms";
import RenderWarningAlarms from "./RenderWarningAlarms";

const AlarmsArea = observer(() => {
  const options = [
    { value: "All", label: "All" },
    { value: "Criticals", label: "Criticals" },
    { value: "Warnings", label: "Warnings" },
  ];

  const [filterValueAlarms, setFilterValueAlarms] = useState({
    value: "All",
    label: "All",
  });

  const handleChange = (optionValue) => {
    setFilterValueAlarms(optionValue);
  };

  return (
    <div className="a-container-wrapper">
      <h2>Alarms</h2>
      <hr />
      <div className="filter-wrapper">
        <p>Apply Filters:</p>
        <Select
          id="filterAlarms"
          options={options}
          defaultValue={options[0]}
          value={filterValueAlarms}
          onChange={handleChange}
        />
      </div>
      <hr />
      <div className="data-wrapper">
        <ul>
          {filterValueAlarms.value === "All" && <RenderAllAlarms />}
          {filterValueAlarms.value === "Criticals" && <RenderCriticalAlarms />}
          {filterValueAlarms.value === "Warnings" && <RenderWarningAlarms />}
        </ul>
      </div>
    </div>
  );
});

export default AlarmsArea;

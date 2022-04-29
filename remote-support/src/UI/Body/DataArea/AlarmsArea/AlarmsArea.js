import { observer } from "mobx-react-lite";
import { useState } from "react";
import Select from "react-select";
import { useStore } from "../../../../Utilities/contextProvider";

const AlarmsArea = observer(() => {
  const rootstore = useStore();

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

  const renderAllAlarms = () => {
    try {
      // console.log(1);
      // rootstore.datasetStore.alarmsFromJSON(JSON.parse(jsonData).alarms);
      // console.log(2);

      return rootstore.datasetStore.alarms.forEach((alarm) => (
        <li
          className={() =>
            alarm.severity === "Critical" ? "critical-item" : "warning-item"
          }
        >
          {alarm.code}: {alarm.name}
        </li>
      ));
    } catch (error) {
      rootstore.datasetStore.resetAlarms();
      return <p>Data not available!</p>;
    }
  };

  const renderCriticalAlarms = () => {
    try {
      // rootstore.datasetStore.alarmsFromJSON(JSON.parse(jsonData).alarms);

      return rootstore.datasetStore.criticalAlarms.forEach((alarm) => (
        <li className="critical-item">
          {alarm.code}: {alarm.name}
        </li>
      ));
    } catch (error) {
      rootstore.datasetStore.resetAlarms();
      return <p>Data not available!</p>;
    }
  };

  const renderWarningAlarms = () => {
    try {
      // rootstore.datasetStore.alarmsFromJSON(JSON.parse(jsonData).alarms);

      return rootstore.datasetStore.warningAlarms.forEach((alarm) => (
        <li className="warning-item">
          {alarm.code}: {alarm.name}
        </li>
      ));
    } catch (error) {
      rootstore.datasetStore.resetAlarms();
      return <p>Data not available!</p>;
    }
  };

  return (
    <div className="container-wrapper">
      <div className="title-wrapper">
        <h2>Alarms</h2>
        <p>Filters:</p>
        <Select
          id="filterAlarms"
          options={options}
          defaultValue={options[0]}
          value={filterValueAlarms}
          onChange={handleChange}
        />
      </div>
      <div className="data-wrapper">
        <ul>
          {filterValueAlarms.value === "All" && renderAllAlarms}
          {filterValueAlarms.value === "Criticals" && renderCriticalAlarms}
          {filterValueAlarms.value === "Warnings" && renderWarningAlarms}
        </ul>
      </div>
    </div>
  );
});

export default AlarmsArea;

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

  const { jsonData } = rootstore.stateUIStore;

  const handleChange = (optionValue) => {
    setFilterValueAlarms(optionValue);
    console.log(optionValue);
  };

  const renderAllAlarms = (jsonData) => {
    try {
      rootstore.datasetStore.alarmsFromJSON(JSON.parse(jsonData).alarms);

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

  const renderCriticalAlarms = (jsonData) => {
    try {
      rootstore.datasetStore.alarmsFromJSON(JSON.parse(jsonData).alarms);

      return rootstore.datasetStore.alarms.criticalAlarms.forEach((alarm) => (
        <li className="critical-item">
          {alarm.code}: {alarm.name}
        </li>
      ));
    } catch (error) {
      rootstore.datasetStore.resetAlarms();
      return <p>Data not available!</p>;
    }
  };

  const renderWarningAlarms = (jsonData) => {
    try {
      rootstore.datasetStore.alarmsFromJSON(JSON.parse(jsonData).alarms);
      return rootstore.datasetStore.alarms.warningAlarms.forEach((alarm) => (
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
          {filterValueAlarms.value === "All" && renderAllAlarms(jsonData)}
          {filterValueAlarms.value === "Criticals" &&
            renderCriticalAlarms(jsonData)}
          {filterValueAlarms.value === "Warnings" &&
            renderWarningAlarms(jsonData)}
        </ul>
      </div>
    </div>
  );
});

export default AlarmsArea;

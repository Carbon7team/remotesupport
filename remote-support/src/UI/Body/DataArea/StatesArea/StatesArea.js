import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../../Utilities/contextProvider";
import Select from "react-select";

const StatesArea = observer(() => {
  const rootstore = useStore();
  const options = [
    { value: "All", label: "All" },
    { value: "Active", label: "Active" },
    { value: "Not Active", label: "Not Active" },
  ];

  const [filterValueStates, setFilterValueStates] = useState({
    value: "All",
    label: "All",
  });

  const handleChange = (optionValue) => {
    setFilterValueStates(optionValue);
  };

  const renderAllStates = () => {
    try {
      // rootstore.datasetStore.alarmsFromJSON(JSON.parse(jsonData).states);

      return rootstore.datasetStore.states.forEach((state) => (
        <li
          className={() =>
            state.active === true ? "active-item" : "not-active-item"
          }
        >
          {state.code}: {state.name}
        </li>
      ));
    } catch (error) {
      rootstore.datasetStore.resetStates();
      return <p>Data not available!</p>;
    }
  };

  const renderActiveStates = () => {
    try {
      // rootstore.datasetStore.alarmsFromJSON(JSON.parse(jsonData).states);

      return rootstore.datasetStore.states.activeStates.forEach((state) => (
        <li className="active-item">
          {state.code}: {state.name}
        </li>
      ));
    } catch (error) {
      rootstore.datasetStore.resetStates();
      return <p>Data not available!</p>;
    }
  };

  const renderNotActiveStates = () => {
    try {
      // rootstore.datasetStore.alarmsFromJSON(JSON.parse(jsonData).states);

      return rootstore.datasetStore.states.notActiveStates.forEach((state) => (
        <li className="not-active-item">
          {state.code}: {state.name}
        </li>
      ));
    } catch (error) {
      rootstore.datasetStore.resetStates();
      return <p>Data not available!</p>;
    }
  };
  return (
    <div className="container-wrapper">
      <div className="title-wrapper">
        <h2>States</h2>
        <p>Filters:</p>
        <Select
          id="filterStates"
          options={options}
          value={filterValueStates}
          onChange={handleChange}
        />
      </div>

      <div className="data-wrapper">
        <ul>
          {filterValueStates.value === "All" && renderAllStates}
          {filterValueStates.value === "Active" && renderActiveStates}
          {filterValueStates.value === "Not Active" && renderNotActiveStates}
        </ul>
      </div>
    </div>
  );
});

export default StatesArea;
